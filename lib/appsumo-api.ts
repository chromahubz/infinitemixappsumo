// lib/appsumo-api.ts - AppSumo API Integration

/**
 * AppSumo License Verification
 *
 * TODO: Add real AppSumo API credentials when available:
 * - APPSUMO_API_URL (from AppSumo)
 * - APPSUMO_API_KEY (from AppSumo)
 *
 * Add to Railway environment variables.
 */

export type AppSumoTier = 'creator' | 'pro' | 'studio' | 'agency';

export interface AppSumoVerificationResult {
  valid: boolean;
  tier?: AppSumoTier;
  email?: string;
  error?: string;
}

/**
 * Verify AppSumo license key with AppSumo API
 *
 * @param licenseKey - The license key to verify
 * @param email - The email address to associate
 * @returns Verification result with tier info
 */
export async function verifyAppSumoLicense(
  licenseKey: string,
  email: string
): Promise<AppSumoVerificationResult> {

  // TODO: Replace with real AppSumo API call when credentials are available
  // Example implementation:
  /*
  try {
    const response = await fetch(process.env.APPSUMO_API_URL + '/verify', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.APPSUMO_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ license_key: licenseKey, email })
    });

    if (!response.ok) {
      return { valid: false, error: 'License verification failed' };
    }

    const data = await response.json();
    return {
      valid: true,
      tier: data.plan_tier as AppSumoTier,
      email: data.email
    };
  } catch (error) {
    console.error('[AppSumo API] Verification error:', error);
    return { valid: false, error: 'API connection failed' };
  }
  */

  // TEMPORARY: Parse tier from license key format for testing
  // Remove this when AppSumo API is integrated
  console.warn('[AppSumo API] Using temporary license validation - replace with real API');

  if (!licenseKey.startsWith('APPSUMO-')) {
    return { valid: false, error: 'Invalid license key format' };
  }

  const tierMatch = licenseKey.match(/APPSUMO-(\w+)-/);
  if (!tierMatch) {
    return { valid: false, error: 'Could not parse license tier' };
  }

  const tier = tierMatch[1].toLowerCase();
  const validTiers: AppSumoTier[] = ['creator', 'pro', 'studio', 'agency'];

  if (!validTiers.includes(tier as AppSumoTier)) {
    return { valid: false, error: 'Invalid license tier' };
  }

  return {
    valid: true,
    tier: tier as AppSumoTier,
    email
  };
}

/**
 * Get credit amount for a given tier
 */
export function getCreditsForTier(tier: AppSumoTier): number {
  const credits = {
    creator: 2000,
    pro: 5000,
    studio: 10000,
    agency: 18000
  };
  return credits[tier];
}
