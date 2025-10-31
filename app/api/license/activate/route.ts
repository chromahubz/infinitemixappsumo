// app/api/license/activate/route.ts - Activate AppSumo license

import { NextResponse } from 'next/server';
import { activateLicense, sendMagicLink } from '@/lib/credits';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { licenseKey, email } = body;

    // Validate input
    if (!licenseKey || !email) {
      return NextResponse.json(
        { error: 'License key and email are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Activate license
    const result = await activateLicense(licenseKey, email);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 400 }
      );
    }

    // Send magic link for login
    const magicLinkResult = await sendMagicLink(email);

    if (!magicLinkResult.success) {
      // License activated but email failed
      return NextResponse.json({
        success: true,
        message: 'License activated! Please log in manually.',
        userId: result.userId,
        license: result.license,
        emailError: magicLinkResult.error
      });
    }

    return NextResponse.json({
      success: true,
      message: 'License activated! Check your email for login link.',
      userId: result.userId,
      license: {
        plan_tier: result.license?.plan_tier,
        ai_credits_total: result.license?.ai_credits_total,
        ai_credits_remaining: result.license?.ai_credits_remaining
      }
    });

  } catch (error) {
    console.error('[API] License activation error:', error);
    return NextResponse.json(
      { error: 'Failed to activate license. Please try again.' },
      { status: 500 }
    );
  }
}
