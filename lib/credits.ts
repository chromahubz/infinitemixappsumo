// lib/credits.ts - Credit management utilities

import { supabaseAdmin } from './supabase';
import type { AppSumoLicense } from './supabase';
import { PLAN_CREDITS, PLAN_PRICES, calculateCreditsForMix as calcCredits, type PlanTier } from './credit-calculator';

// Re-export types and functions
export type { PlanTier };
export { PLAN_CREDITS, PLAN_PRICES, calcCredits as calculateCreditsForMix };

export type ActionType = 'ai_music' | 'ai_thumbnail' | 'ai_description';

export interface CreditCheckResult {
  allowed: boolean;
  remaining: number;
  warning?: string;
  license?: AppSumoLicense;
}

export interface RefundEligibility {
  eligible: boolean;
  reason: string;
  refund_amount: number;
  refund_percentage?: number;
  credits_used?: number;
  deduction?: number;
  usage_percentage?: number;
  message?: string;
  days_since_activation?: number;
}

// PLAN_CREDITS, PLAN_PRICES, and calculateCreditsForMix are re-exported from credit-calculator.ts above

/**
 * Get user ID from request (checks auth token)
 */
export async function getUserFromRequest(req: Request): Promise<string | null> {
  try {
    // Try Authorization header first
    const authHeader = req.headers.get('authorization');
    if (authHeader?.startsWith('Bearer ')) {
      const token = authHeader.replace('Bearer ', '');
      const { data: { user }, error } = await supabaseAdmin.auth.getUser(token);
      if (!error && user) return user.id;
    }

    // Try cookie-based session
    const cookies = req.headers.get('cookie');
    if (cookies) {
      // Parse supabase auth cookie (simplified)
      const authCookie = cookies.split(';').find(c => c.trim().startsWith('sb-'));
      if (authCookie) {
        // In production, use proper cookie parsing
        // For now, return null and rely on client-side auth
      }
    }

    return null;
  } catch (error) {
    console.error('Failed to get user from request:', error);
    return null;
  }
}

/**
 * Get user's active license
 */
export async function getUserLicense(userId: string): Promise<AppSumoLicense | null> {
  try {
    const { data, error } = await supabaseAdmin
      .from('appsumo_licenses')
      .select('*')
      .eq('user_id', userId)
      .eq('status', 'active')
      .single();

    if (error) {
      console.error('Error fetching license:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Failed to get user license:', error);
    return null;
  }
}

/**
 * Check if user has enough credits and deduct if allowed
 *
 * This is the main function used by API endpoints.
 * Uses "fail open" strategy - if anything breaks, allow the action.
 */
export async function checkAndDeductCredits(
  userId: string,
  action: ActionType,
  creditsNeeded: number = 1
): Promise<CreditCheckResult> {
  try {
    // Get user's license
    const license = await getUserLicense(userId);

    // No license = backwards compatibility (allow action)
    if (!license) {
      console.log(`[Credits] No license for user ${userId}, allowing action (backwards compat)`);
      return {
        allowed: true,
        remaining: -1 // -1 means "unlimited" or "no license"
      };
    }

    // Check if refunded or suspended
    if (license.status !== 'active') {
      return {
        allowed: false,
        remaining: 0,
        warning: `Account ${license.status}. Please contact support.`,
        license
      };
    }

    // Check if enough credits
    if (license.ai_credits_remaining < creditsNeeded) {
      return {
        allowed: false,
        remaining: license.ai_credits_remaining,
        warning: `Insufficient AI credits. You have ${license.ai_credits_remaining} remaining, need ${creditsNeeded}. Manual mixing is still unlimited!`,
        license
      };
    }

    // Mark first AI usage if this is the first time
    if (!license.first_ai_usage_at) {
      await supabaseAdmin
        .from('appsumo_licenses')
        .update({ first_ai_usage_at: new Date().toISOString() })
        .eq('id', license.id);

      console.log(`[Credits] First AI usage for license ${license.license_key}`);
    }

    // Deduct credits atomically (prevents race conditions)
    const { data: updated, error: updateError } = await supabaseAdmin
      .from('appsumo_licenses')
      .update({
        ai_credits_remaining: license.ai_credits_remaining - creditsNeeded
      })
      .eq('id', license.id)
      .eq('ai_credits_remaining', license.ai_credits_remaining) // Optimistic locking
      .select()
      .single();

    if (updateError) {
      console.error('[Credits] Failed to deduct credits:', updateError);
      // FAIL OPEN: Allow action anyway to prevent breaking user experience
      return {
        allowed: true,
        remaining: license.ai_credits_remaining,
        warning: 'Credit tracking temporarily unavailable, action allowed',
        license
      };
    }

    // Log usage for refund tracking
    const { error: logError } = await supabaseAdmin
      .from('credit_usage')
      .insert({
        user_id: userId,
        license_id: license.id,
        action_type: action,
        credits_used: creditsNeeded
      });

    if (logError) {
      console.error('[Credits] Failed to log usage:', logError);
      // Continue anyway, logging is not critical
    }

    console.log(`[Credits] User ${userId} used ${creditsNeeded} credits for ${action}, ${updated.ai_credits_remaining} remaining`);

    return {
      allowed: true,
      remaining: updated.ai_credits_remaining,
      license: updated
    };

  } catch (error) {
    console.error('[Credits] Unexpected error in checkAndDeductCredits:', error);
    // FAIL OPEN: If anything breaks, allow the action
    return {
      allowed: true,
      remaining: -1,
      warning: 'Credit system error, action allowed'
    };
  }
}

/**
 * Get user's current credit balance (non-destructive)
 */
export async function getCreditBalance(userId: string): Promise<{
  credits: number;
  total: number;
  plan: PlanTier | null;
  license?: AppSumoLicense;
}> {
  try {
    const license = await getUserLicense(userId);

    if (!license) {
      return {
        credits: -1, // -1 means unlimited/no license
        total: -1,
        plan: null
      };
    }

    return {
      credits: license.ai_credits_remaining,
      total: license.ai_credits_total,
      plan: license.plan_tier,
      license
    };
  } catch (error) {
    console.error('[Credits] Failed to get balance:', error);
    return {
      credits: -1,
      total: -1,
      plan: null
    };
  }
}

/**
 * Calculate refund eligibility
 */
export async function calculateRefundEligibility(userId: string): Promise<RefundEligibility | null> {
  try {
    const license = await getUserLicense(userId);
    if (!license) return null;

    // Call Supabase function
    const { data, error } = await supabaseAdmin
      .rpc('calculate_refund_eligibility', { license_id: license.id });

    if (error) {
      console.error('[Credits] Refund calculation error:', error);
      return null;
    }

    return data as RefundEligibility;
  } catch (error) {
    console.error('[Credits] Failed to calculate refund eligibility:', error);
    return null;
  }
}

/**
 * Get credit usage history for a user
 */
export async function getCreditUsageHistory(userId: string, limit: number = 100) {
  try {
    const { data, error } = await supabaseAdmin
      .from('credit_usage')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('[Credits] Failed to get usage history:', error);
      return [];
    }

    return data;
  } catch (error) {
    console.error('[Credits] Failed to get usage history:', error);
    return [];
  }
}

/**
 * Check device limit (3 devices max per license)
 */
export async function checkDeviceLimit(
  userId: string,
  deviceFingerprint: string,
  deviceInfo?: Record<string, unknown>
): Promise<{ allowed: boolean; deviceCount: number; message?: string }> {
  try {
    // Call Supabase function
    const { data, error } = await supabaseAdmin
      .rpc('check_device_limit', {
        p_user_id: userId,
        p_fingerprint: deviceFingerprint
      });

    if (error) {
      console.error('[Device] Device limit check error:', error);
      // FAIL OPEN: Allow if check fails
      return { allowed: true, deviceCount: 0 };
    }

    const result = data as { allowed: boolean; device_count: number; message?: string };

    // If allowed and new device, register it
    if (result.allowed && result.device_count < 3) {
      const { error: insertError } = await supabaseAdmin
        .from('user_devices')
        .upsert({
          user_id: userId,
          device_fingerprint: deviceFingerprint,
          device_info: deviceInfo,
          last_seen_at: new Date().toISOString()
        }, {
          onConflict: 'user_id,device_fingerprint'
        });

      if (insertError) {
        console.error('[Device] Failed to register device:', insertError);
      }
    }

    return {
      allowed: result.allowed,
      deviceCount: result.device_count,
      message: result.message
    };
  } catch (error) {
    console.error('[Device] Failed to check device limit:', error);
    // FAIL OPEN
    return { allowed: true, deviceCount: 0 };
  }
}

/**
 * Activate AppSumo license
 */
export async function activateLicense(
  licenseKey: string,
  email: string
): Promise<{ success: boolean; userId?: string; error?: string; license?: AppSumoLicense }> {
  try {
    // Debug: Log Supabase configuration (masked)
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'NOT_SET';
    const hasServiceKey = !!(process.env.SUPABASE_SERVICE_ROLE_KEY);
    console.log('[License] Supabase URL:', supabaseUrl);
    console.log('[License] Has service role key:', hasServiceKey);
    console.log('[License] Service key length:', process.env.SUPABASE_SERVICE_ROLE_KEY?.length || 0);

    // Check if license key already activated
    const { data: existing, error: checkError } = await supabaseAdmin
      .from('appsumo_licenses')
      .select('*')
      .eq('license_key', licenseKey)
      .single();

    if (existing && !checkError) {
      return {
        success: false,
        error: 'License key already activated'
      };
    }

    // Validate license key format
    if (!licenseKey.startsWith('APPSUMO-')) {
      return {
        success: false,
        error: 'Invalid license key format'
      };
    }

    // Parse plan tier from license key (or validate with AppSumo API)
    // For now, assume format: APPSUMO-{TIER}-{RANDOM}
    const tierMatch = licenseKey.match(/APPSUMO-(\w+)-/);
    let planTier: PlanTier = 'creator'; // Default

    if (tierMatch) {
      const tier = tierMatch[1].toLowerCase();
      if (tier === 'creator' || tier === 'pro' || tier === 'studio' || tier === 'agency') {
        planTier = tier as PlanTier;
      }
    }

    // Create user account with magic link
    console.log(`[License] Attempting to create user account for ${email}`);
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      email_confirm: true, // Auto-confirm for AppSumo users
      user_metadata: {
        license_key: licenseKey,
        plan_tier: planTier
      }
    });

    if (authError) {
      console.error('[License] Auth error:', authError);
      console.error('[License] Auth error message:', authError.message);
      console.error('[License] Auth error status:', authError.status);

      // Check if user already exists (error code 422 or message contains "already")
      const userExists = authError.message?.toLowerCase().includes('already') ||
                         authError.message?.toLowerCase().includes('exist') ||
                         authError.status === 422;

      if (userExists) {
        console.log('[License] User already exists, looking up via admin API...');

        // Get all users and find by email (inefficient but works)
        // TODO: Replace with proper RPC function for production
        const { data: { users }, error: listError } = await supabaseAdmin.auth.admin.listUsers();

        if (listError) {
          console.error('[License] Failed to list users:', listError);
          // Fall back to sending magic link
          await sendMagicLink(email);
          return {
            success: false,
            error: `Account exists. Check your email for login link. Activate manually with key: ${licenseKey}`
          };
        }

        const existingUser = users?.find(u => u.email === email);

        if (!existingUser) {
          console.error('[License] User should exist but not found');
          await sendMagicLink(email);
          return {
            success: false,
            error: `Account exists. Check your email for login link. Activate manually with key: ${licenseKey}`
          };
        }

        console.log('[License] Found existing user:', existingUser.id);

        // User exists, create license
        const { data: license, error: licenseError } = await supabaseAdmin
          .from('appsumo_licenses')
          .insert({
            user_id: existingUser.id,
            license_key: licenseKey,
            plan_tier: planTier,
            ai_credits_total: PLAN_CREDITS[planTier],
            ai_credits_remaining: PLAN_CREDITS[planTier],
            status: 'active'
          })
          .select()
          .single();

        if (licenseError) {
          console.error('[License] Failed to create license:', licenseError);
          return {
            success: false,
            error: 'Failed to activate license: ' + licenseError.message
          };
        }

        // Send magic link
        console.log(`[License] Sending magic link to existing user ${email}`);
        const magicLinkResult = await sendMagicLink(email);

        if (!magicLinkResult.success) {
          console.error('[License] Failed to send magic link:', magicLinkResult.error);
        }

        return {
          success: true,
          userId: existingUser.id,
          license
        };
      }

      // Not a "user exists" error - this is a real error
      console.error('[License] Real auth error (not user exists)');
      return {
        success: false,
        error: 'Failed to create account: ' + authError.message
      };
    }

    // Create license for new user
    const { data: license, error: licenseError } = await supabaseAdmin
      .from('appsumo_licenses')
      .insert({
        user_id: authData.user.id,
        license_key: licenseKey,
        plan_tier: planTier,
        ai_credits_total: PLAN_CREDITS[planTier],
        ai_credits_remaining: PLAN_CREDITS[planTier],
        status: 'active'
      })
      .select()
      .single();

    if (licenseError) {
      return {
        success: false,
        error: 'Failed to create license: ' + licenseError.message
      };
    }

    // Send magic link for login
    console.log(`[License] Sending magic link to ${email}`);
    const magicLinkResult = await sendMagicLink(email);

    if (!magicLinkResult.success) {
      console.error('[License] Failed to send magic link:', magicLinkResult.error);
      // Don't fail the whole activation, user can request another magic link
    }

    return {
      success: true,
      userId: authData.user.id,
      license
    };

  } catch (error) {
    console.error('[License] Activation error:', error);
    return {
      success: false,
      error: 'Unexpected error during activation'
    };
  }
}

/**
 * Send magic link for login
 */
export async function sendMagicLink(email: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabaseAdmin.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL || 'https://infinitemix.app'}/auth/callback`
      }
    });

    if (error) {
      return {
        success: false,
        error: error.message
      };
    }

    return { success: true };
  } catch (error) {
    console.error('[Auth] Failed to send magic link:', error);
    return {
      success: false,
      error: 'Failed to send login email'
    };
  }
}
