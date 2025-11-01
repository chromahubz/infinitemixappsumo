// app/api/test/activate-license/route.ts - TEST ONLY: Simulate AppSumo purchase
// ⚠️ WARNING: This is for testing only. Remove before production!

import { NextResponse } from 'next/server';
import { activateLicense } from '@/lib/credits';

export async function POST(req: Request) {
  try {
    const { email, planTier } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email required' },
        { status: 400 }
      );
    }

    // Generate test license key with timestamp to ensure uniqueness
    const tier = planTier || 'pro';
    const timestamp = Date.now().toString(36).toUpperCase();
    const randomId = Math.random().toString(36).substring(2, 8).toUpperCase();
    const testLicenseKey = `APPSUMO-${tier.toUpperCase()}-TEST-${timestamp}${randomId}`;

    console.log(`[TEST] Creating test license: ${testLicenseKey} for ${email}`);
    console.log(`[TEST] Plan tier: ${tier}, Credits: ${require('@/lib/credit-calculator').PLAN_CREDITS[tier as any]}`);

    // Use the real activation function
    const result = await activateLicense(testLicenseKey, email);

    console.log(`[TEST] Activation result:`, result);

    if (!result.success) {
      console.error(`[TEST] Activation failed:`, result.error);
      return NextResponse.json(
        { error: result.error || 'Failed to activate license' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Test license activated!',
      licenseKey: testLicenseKey,
      email,
      planTier: tier,
      credits: result.license?.ai_credits_total,
      userId: result.userId,
      nextStep: 'Check your email for the magic link!'
    });

  } catch (error) {
    console.error('[TEST] License activation error:', error);
    return NextResponse.json(
      { error: 'Failed to create test license' },
      { status: 500 }
    );
  }
}
