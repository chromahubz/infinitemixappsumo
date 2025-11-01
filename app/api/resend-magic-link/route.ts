// app/api/resend-magic-link/route.ts - Resend magic link for existing users

import { NextResponse } from 'next/server';
import { sendMagicLink } from '@/lib/credits';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email required' },
        { status: 400 }
      );
    }

    console.log(`[Resend] Sending new magic link to ${email}`);

    const result = await sendMagicLink(email);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to send magic link' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Magic link sent! Check your email.'
    });

  } catch (error) {
    console.error('[Resend] Error:', error);
    return NextResponse.json(
      { error: 'Failed to send magic link' },
      { status: 500 }
    );
  }
}
