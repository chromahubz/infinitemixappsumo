// app/api/credits/balance/route.ts - Get user's credit balance

import { NextResponse } from 'next/server';
import { getUserFromRequest, getCreditBalance } from '@/lib/credits';

export async function GET(req: Request) {
  try {
    // Get authenticated user
    const userId = await getUserFromRequest(req);

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized. Please log in.' },
        { status: 401 }
      );
    }

    // Get credit balance
    const balance = await getCreditBalance(userId);

    return NextResponse.json({
      credits: balance.credits,
      total: balance.total,
      plan: balance.plan,
      percentage: balance.total > 0
        ? Math.round((balance.credits / balance.total) * 100)
        : 0,
      unlimited: balance.credits === -1
    });

  } catch (error) {
    console.error('[API] Failed to get credit balance:', error);
    return NextResponse.json(
      { error: 'Failed to fetch credit balance' },
      { status: 500 }
    );
  }
}
