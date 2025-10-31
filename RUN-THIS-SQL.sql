-- ========================================
-- InfiniteMix Credit System - Database Schema
-- Run this in Supabase SQL Editor
-- ========================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (auto-managed by Supabase Auth)
-- No need to create, it exists automatically

-- AppSumo Licenses
CREATE TABLE appsumo_licenses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  license_key TEXT UNIQUE NOT NULL,
  plan_tier TEXT NOT NULL CHECK (plan_tier IN ('creator', 'pro', 'studio')),
  ai_credits_total INT NOT NULL,
  ai_credits_remaining INT NOT NULL,
  activated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'refunded', 'suspended', 'pending')),
  first_ai_usage_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Credit Usage Log (for refund calculations)
CREATE TABLE credit_usage (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  license_id UUID REFERENCES appsumo_licenses(id) ON DELETE CASCADE,
  action_type TEXT NOT NULL CHECK (action_type IN ('ai_music', 'ai_thumbnail', 'ai_description')),
  credits_used INT NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Device Fingerprints (for 3-device limit)
CREATE TABLE user_devices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  device_fingerprint TEXT NOT NULL,
  device_info JSONB, -- Browser, OS, etc.
  first_seen_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_seen_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, device_fingerprint)
);

-- Indexes for fast lookups
CREATE INDEX idx_licenses_user ON appsumo_licenses(user_id);
CREATE INDEX idx_licenses_key ON appsumo_licenses(license_key);
CREATE INDEX idx_licenses_status ON appsumo_licenses(status);
CREATE INDEX idx_usage_user ON credit_usage(user_id);
CREATE INDEX idx_usage_license ON credit_usage(license_id);
CREATE INDEX idx_usage_created ON credit_usage(created_at);
CREATE INDEX idx_devices_user ON user_devices(user_id);
CREATE INDEX idx_devices_fingerprint ON user_devices(device_fingerprint);

-- Row Level Security (RLS) Policies
ALTER TABLE appsumo_licenses ENABLE ROW LEVEL SECURITY;
ALTER TABLE credit_usage ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_devices ENABLE ROW LEVEL SECURITY;

-- Users can read their own license
CREATE POLICY "Users can read own license"
  ON appsumo_licenses FOR SELECT
  USING (auth.uid() = user_id);

-- Users can read their own credit usage
CREATE POLICY "Users can read own usage"
  ON credit_usage FOR SELECT
  USING (auth.uid() = user_id);

-- Users can read their own devices
CREATE POLICY "Users can read own devices"
  ON user_devices FOR SELECT
  USING (auth.uid() = user_id);

-- Service role can do anything (for API)
CREATE POLICY "Service role full access licenses"
  ON appsumo_licenses FOR ALL
  USING (true);

CREATE POLICY "Service role full access usage"
  ON credit_usage FOR ALL
  USING (true);

CREATE POLICY "Service role full access devices"
  ON user_devices FOR ALL
  USING (true);

-- Helper function: Calculate refund eligibility
CREATE OR REPLACE FUNCTION calculate_refund_eligibility(license_id UUID)
RETURNS JSONB AS $$
DECLARE
  license_data appsumo_licenses;
  credits_used INT;
  usage_percentage NUMERIC;
  days_since_activation INT;
  refund_amount NUMERIC;
  plan_price NUMERIC;
BEGIN
  -- Get license data
  SELECT * INTO license_data FROM appsumo_licenses WHERE id = license_id;

  IF NOT FOUND THEN
    RETURN jsonb_build_object('error', 'License not found');
  END IF;

  -- Calculate usage
  credits_used := license_data.ai_credits_total - license_data.ai_credits_remaining;
  usage_percentage := (credits_used::NUMERIC / license_data.ai_credits_total::NUMERIC) * 100;
  days_since_activation := EXTRACT(DAY FROM NOW() - license_data.activated_at);

  -- Determine plan price
  plan_price := CASE license_data.plan_tier
    WHEN 'creator' THEN 29
    WHEN 'pro' THEN 69
    WHEN 'studio' THEN 119
  END;

  -- Check eligibility
  IF days_since_activation > 60 THEN
    RETURN jsonb_build_object(
      'eligible', false,
      'reason', 'Outside 60-day window',
      'refund_amount', 0,
      'days_since_activation', days_since_activation
    );
  END IF;

  IF license_data.first_ai_usage_at IS NULL THEN
    -- Never used AI = full refund
    RETURN jsonb_build_object(
      'eligible', true,
      'reason', 'Manual mixing only - full refund',
      'refund_amount', plan_price,
      'refund_percentage', 100,
      'credits_used', 0
    );
  END IF;

  IF usage_percentage <= 30 THEN
    -- Partial refund
    refund_amount := plan_price - (credits_used * 2.50);
    refund_amount := GREATEST(refund_amount, 0); -- Don't go negative

    RETURN jsonb_build_object(
      'eligible', refund_amount > 0,
      'reason', CASE
        WHEN usage_percentage <= 10 THEN 'Light AI usage - partial refund'
        ELSE 'Moderate AI usage - reduced refund'
      END,
      'refund_amount', refund_amount,
      'refund_percentage', (refund_amount / plan_price * 100)::INT,
      'credits_used', credits_used,
      'deduction', credits_used * 2.50,
      'usage_percentage', usage_percentage::INT
    );
  END IF;

  -- Heavy usage = no refund
  RETURN jsonb_build_object(
    'eligible', false,
    'reason', format('Heavy usage (%s%% of AI credits consumed)', usage_percentage::INT),
    'refund_amount', 0,
    'credits_used', credits_used,
    'usage_percentage', usage_percentage::INT,
    'message', 'You have received significant value from the platform. No refund available.'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Helper function: Check device limit
CREATE OR REPLACE FUNCTION check_device_limit(p_user_id UUID, p_fingerprint TEXT)
RETURNS JSONB AS $$
DECLARE
  device_count INT;
  existing_device user_devices;
BEGIN
  -- Check if device already registered
  SELECT * INTO existing_device
  FROM user_devices
  WHERE user_id = p_user_id AND device_fingerprint = p_fingerprint;

  IF FOUND THEN
    -- Update last seen
    UPDATE user_devices
    SET last_seen_at = NOW()
    WHERE id = existing_device.id;

    RETURN jsonb_build_object('allowed', true, 'device_count',
      (SELECT COUNT(*) FROM user_devices WHERE user_id = p_user_id)
    );
  END IF;

  -- Count existing devices
  SELECT COUNT(*) INTO device_count
  FROM user_devices
  WHERE user_id = p_user_id;

  IF device_count >= 3 THEN
    RETURN jsonb_build_object(
      'allowed', false,
      'device_count', device_count,
      'message', 'Device limit reached (3 devices max). Contact support to reset devices.'
    );
  END IF;

  RETURN jsonb_build_object('allowed', true, 'device_count', device_count);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ========================================
-- Setup Complete!
-- ========================================
-- You should see "Success. No rows returned"
-- Tables created: appsumo_licenses, credit_usage, user_devices
-- Functions created: calculate_refund_eligibility, check_device_limit
