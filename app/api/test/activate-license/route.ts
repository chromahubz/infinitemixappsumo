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

    // Generate test license key
    const tier = planTier || 'pro';
    const randomId = Math.random().toString(36).substring(7).toUpperCase();
    const testLicenseKey = `APPSUMO-${tier.toUpperCase()}-TEST-${randomId}`;

    console.log(`[TEST] Creating test license: ${testLicenseKey} for ${email}`);

    // Use the real activation function
    const result = await activateLicense(testLicenseKey, email);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
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
