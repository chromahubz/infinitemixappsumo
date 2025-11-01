// lib/credit-calculator.ts - Client-safe credit calculation utilities
// This file can be imported in both client and server components

export type PlanTier = 'creator' | 'pro' | 'studio' | 'agency';

// Plan tier credits configuration
export const PLAN_CREDITS: Record<PlanTier, number> = {
  creator: 2000,    // ~10-20 mixes (30min average)
  pro: 5000,        // ~30-50 mixes
  studio: 10000,    // ~60-90 mixes
  agency: 18000     // ~120-160 mixes
};

export const PLAN_PRICES: Record<PlanTier, number> = {
  creator: 29,
  pro: 69,
  studio: 119,
  agency: 199  // TODO: Confirm Agency+ price with user
};

/**
 * Calculate credits needed based on mix duration (minutes)
 *
 * Credits are charged based on mix length:
 * - 15 min = 60 credits (4 credits/min)
 * - 30 min = 120 credits (4 credits/min)
 * - 45 min = 180 credits (4 credits/min)
 * - 1 hr (60min) = 240 credits (4 credits/min)
 * - 1.5 hr (90min) = 360 credits (4 credits/min)
 * - 2 hr (120min) = 480 credits (4 credits/min)
 *
 * Formula: credits = duration_minutes * 4
 */
export function calculateCreditsForMix(durationMinutes: number): number {
  return Math.ceil(durationMinutes * 4);
}
