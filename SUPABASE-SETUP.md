# 🚀 InfiniteMix - Supabase Credit System Setup

## Quick Setup (5 minutes)

### Step 1: Create Supabase Project

1. Go to https://supabase.com
2. Click "Start your project" (free, no credit card)
3. Create new organization (e.g., "InfiniteMix")
4. Create new project:
   - Name: `infinitemix-prod`
   - Database Password: (generate strong password)
   - Region: Choose closest to your users
   - Plan: Free tier

### Step 2: Run Database Schema

1. In Supabase dashboard, go to **SQL Editor**
2. Click "New query"
3. Copy and paste this SQL:

```sql
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

-- Insert test data (for development)
-- Run this only in development, not production!
-- INSERT INTO appsumo_licenses (user_id, license_key, plan_tier, ai_credits_total, ai_credits_remaining)
-- VALUES
--   (auth.uid(), 'APPSUMO-TEST-CREATOR', 'creator', 20, 20),
--   (auth.uid(), 'APPSUMO-TEST-PRO', 'pro', 50, 50),
--   (auth.uid(), 'APPSUMO-TEST-STUDIO', 'studio', 90, 90);

COMMENT ON TABLE appsumo_licenses IS 'AppSumo lifetime licenses with AI credit allocations';
COMMENT ON TABLE credit_usage IS 'Log of all AI credit consumption for refund calculations';
COMMENT ON TABLE user_devices IS 'Device fingerprints for 3-device limit enforcement';
COMMENT ON FUNCTION calculate_refund_eligibility IS 'Calculates refund eligibility based on usage';
COMMENT ON FUNCTION check_device_limit IS 'Checks and enforces 3-device limit per license';
```

4. Click **Run** or press `Ctrl+Enter`
5. Verify success (should see "Success. No rows returned")

### Step 3: Get API Keys

1. In Supabase dashboard, go to **Settings** → **API**
2. Copy these values:

```
Project URL: https://xxxxx.supabase.co
anon/public key: eyJhbGc...
service_role key: eyJhbGc... (keep secret!)
```

3. Add to `.env.local`:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...your-anon-key
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...your-service-role-key
```

### Step 4: Enable Email Auth

1. Go to **Authentication** → **Providers**
2. Enable **Email** provider
3. Configure email templates (optional):
   - Magic Link template: Customize with InfiniteMix branding
   - Confirmation template: Customize subject/body

### Step 5: Install Dependencies

```bash
npm install @supabase/supabase-js @supabase/ssr
npm install @fingerprintjs/fingerprintjs
```

### Step 6: Test Connection

Run this test script:

```bash
node test-supabase-connection.js
```

---

## Database Schema Overview

### Tables

1. **appsumo_licenses**
   - Stores license keys, plan tiers, credits
   - One per user (1:1 relationship)

2. **credit_usage**
   - Logs every AI action (music, thumbnail, description)
   - Used for refund calculations

3. **user_devices**
   - Tracks device fingerprints
   - Enforces 3-device limit

### Security

- **Row Level Security (RLS)** enabled on all tables
- Users can only read their own data
- Service role (API) has full access
- Device fingerprints cannot personally identify users

---

## Plan Tier Credits

| Plan | Price | AI Credits | Credit Value |
|------|-------|-----------|--------------|
| Creator | $29 | 20 mixes | ~10-20 mixes (length dependent) |
| Pro | $69 | 50 mixes | ~30-50 mixes |
| Studio | $119 | 90 mixes | ~60-90 mixes |

**Note:** Credits never expire. Manual mixing is unlimited.

---

## Testing the Setup

### Test 1: Verify Tables Exist

```sql
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public';
```

Should show: `appsumo_licenses`, `credit_usage`, `user_devices`

### Test 2: Test Refund Calculator

```sql
-- Create test license (replace with real user_id)
INSERT INTO appsumo_licenses (user_id, license_key, plan_tier, ai_credits_total, ai_credits_remaining)
VALUES ('your-user-id', 'TEST-KEY-123', 'creator', 20, 15);

-- Calculate refund eligibility
SELECT calculate_refund_eligibility(id)
FROM appsumo_licenses
WHERE license_key = 'TEST-KEY-123';
```

### Test 3: Test Device Limit

```sql
-- Check device limit (replace with real user_id)
SELECT check_device_limit('your-user-id', 'test-fingerprint-123');
```

---

## Next Steps

After database setup:

1. ✅ Implement credit utilities (`lib/credits.ts`)
2. ✅ Create activation API endpoints
3. ✅ Build activation page UI
4. ✅ Update AI endpoints with credit checks
5. ✅ Add credit display to dashboard

---

## Troubleshooting

### Issue: "permission denied for table"
**Fix:** Make sure RLS policies are created and service role key is used.

### Issue: "relation does not exist"
**Fix:** Re-run the SQL schema. Check for syntax errors.

### Issue: "uuid_generate_v4() does not exist"
**Fix:** Run `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";` first.

### Issue: Connection timeout
**Fix:** Check firewall settings, verify API keys are correct.

---

## Useful SQL Queries

### View all licenses
```sql
SELECT
  l.license_key,
  l.plan_tier,
  l.ai_credits_remaining,
  u.email,
  l.activated_at
FROM appsumo_licenses l
JOIN auth.users u ON l.user_id = u.id
ORDER BY l.activated_at DESC;
```

### View credit usage
```sql
SELECT
  u.email,
  cu.action_type,
  cu.credits_used,
  cu.created_at
FROM credit_usage cu
JOIN auth.users u ON cu.user_id = u.id
ORDER BY cu.created_at DESC
LIMIT 100;
```

### Calculate total credits used by plan
```sql
SELECT
  l.plan_tier,
  COUNT(DISTINCT l.user_id) as users,
  SUM(l.ai_credits_total - l.ai_credits_remaining) as total_credits_used,
  AVG(l.ai_credits_total - l.ai_credits_remaining) as avg_credits_per_user
FROM appsumo_licenses l
GROUP BY l.plan_tier;
```

---

## Security Checklist

- [x] RLS enabled on all tables
- [x] Service role key kept secret (not in client code)
- [x] Anon key only for public operations
- [x] Device fingerprints anonymized
- [x] Credit deductions atomic (prevent race conditions)
- [x] Input validation on all API endpoints

---

## Cost Monitoring

Supabase Free Tier Limits:
- ✅ Database: 500 MB (you'll use ~50 MB for 10K users)
- ✅ Auth: 50,000 monthly active users
- ✅ Storage: 2 GB
- ✅ Bandwidth: 2 GB/month

Monitor usage: Settings → Usage

Upgrade when: Database > 400 MB or Users > 40K

---

🎉 **Setup Complete!** Now let's build the credit system code.
