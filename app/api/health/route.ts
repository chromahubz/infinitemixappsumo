import { NextResponse } from 'next/server';

// Simple health check endpoint for Railway
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'infinitemix',
    version: '1.0.2-route-fix', // Increment this on each deploy to verify updates
    routes: {
      root: '/ = AppSumo Landing Page',
      app: '/app = InfiniteMix Software'
    },
    deployment_time: new Date().toISOString()
  });
}
