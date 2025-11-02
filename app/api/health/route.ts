import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

// Health check endpoint with Supabase connection tests
export async function GET() {
  const checks: Record<string, any> = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'infinitemix',
    version: '1.0.5-supabase-debug',
    routes: {
      root: '/ = AppSumo Landing Page',
      software: '/software = InfiniteMix Software'
    },
    env: {
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || 'NOT_SET',
      hasAnonKey: !!(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
      anonKeyLength: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.length || 0,
      anonKeyPrefix: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.substring(0, 20) || 'NOT_SET',
      hasServiceKey: !!(process.env.SUPABASE_SERVICE_ROLE_KEY),
      serviceKeyLength: process.env.SUPABASE_SERVICE_ROLE_KEY?.length || 0,
      serviceKeyPrefix: process.env.SUPABASE_SERVICE_ROLE_KEY?.substring(0, 20) || 'NOT_SET',
      appUrl: process.env.NEXT_PUBLIC_APP_URL || 'NOT_SET',
    }
  };

  // Test database connection
  try {
    console.log('[Health] Testing database connection...');
    const { data, error } = await supabaseAdmin
      .from('appsumo_licenses')
      .select('count')
      .limit(1);

    checks.database = {
      connected: !error,
      error: error?.message || null,
      details: error ? JSON.stringify(error) : null
    };
  } catch (error: any) {
    checks.database = {
      connected: false,
      error: error.message,
      stack: error.stack
    };
  }

  // Test auth connection
  try {
    console.log('[Health] Testing auth connection...');
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.listUsers({
      page: 1,
      perPage: 1
    });

    checks.auth = {
      connected: !authError,
      error: authError?.message || null,
      details: authError ? JSON.stringify(authError) : null,
      userCount: authData?.users?.length || 0,
    };
  } catch (error: any) {
    checks.auth = {
      connected: false,
      error: error.message,
      stack: error.stack
    };
  }

  const allHealthy = checks.database?.connected && checks.auth?.connected;

  return NextResponse.json({
    ...checks,
    overall: allHealthy ? 'HEALTHY' : 'UNHEALTHY'
  }, {
    status: allHealthy ? 200 : 500
  });
}
