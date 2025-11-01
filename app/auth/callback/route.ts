// app/auth/callback/route.ts - Handle Supabase auth callback from magic links

import { NextRequest, NextResponse } from 'next/server';
import { createServerClient, type CookieOptions } from '@supabase/ssr';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const next = requestUrl.searchParams.get('next') || '/software';

  if (code) {
    const cookieStore = {
      get(name: string) {
        return request.cookies.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        request.cookies.set({ name, value, ...options });
      },
      remove(name: string, options: CookieOptions) {
        request.cookies.set({ name, value: '', ...options });
      },
    };

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: cookieStore,
      }
    );

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // Successful authentication - redirect to app
      const response = NextResponse.redirect(new URL(next, requestUrl.origin));

      // Copy cookies to response
      request.cookies.getAll().forEach((cookie) => {
        response.cookies.set(cookie.name, cookie.value);
      });

      console.log('[Auth] Magic link authentication successful, redirecting to:', next);
      return response;
    }

    console.error('[Auth] Error exchanging code for session:', error);
  }

  // If no code or error, redirect to home with error
  console.error('[Auth] No auth code found in callback');
  return NextResponse.redirect(new URL('/activate?error=auth_failed', requestUrl.origin));
}
