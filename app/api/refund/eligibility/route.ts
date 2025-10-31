// app/api/refund/eligibility/route.ts - Check refund eligibility

import { NextResponse } from 'next/server';
import { getUserFromRequest, calculateRefundEligibility } from '@/lib/credits';

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

    // Calculate refund eligibility
    const eligibility = await calculateRefundEligibility(userId);

    if (!eligibility) {
      return NextResponse.json(
        { error: 'No active license found' },
        { status: 404 }
      );
    }

    return NextResponse.json(eligibility);

  } catch (error) {
    console.error('[API] Failed to calculate refund eligibility:', error);
    return NextResponse.json(
      { error: 'Failed to calculate refund eligibility' },
      { status: 500 }
    );
  }
}
