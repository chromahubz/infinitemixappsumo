'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase-client';

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Get the current URL hash
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = hashParams.get('access_token');
        const refreshToken = hashParams.get('refresh_token');
        const tokenType = hashParams.get('token_type');

        console.log('[Auth Callback] Hash params:', { accessToken: !!accessToken, refreshToken: !!refreshToken, tokenType });

        if (accessToken && refreshToken) {
          // Set the session using the tokens
          const { data, error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken
          });

          if (error) {
            console.error('[Auth Callback] Error setting session:', error);
            router.push('/activate?error=session_failed');
            return;
          }

          console.log('[Auth Callback] Session set successfully!', data);

          // Redirect to software page
          router.push('/software');
        } else {
          // No tokens in hash, maybe using code flow
          const urlParams = new URLSearchParams(window.location.search);
          const code = urlParams.get('code');

          if (code) {
            console.log('[Auth Callback] Using code flow');
            // Code flow - let the server-side route handle it
            window.location.href = `/auth/callback-server?code=${code}`;
          } else {
            console.error('[Auth Callback] No auth tokens or code found');
            router.push('/activate?error=no_auth');
          }
        }
      } catch (error) {
        console.error('[Auth Callback] Error:', error);
        router.push('/activate?error=callback_failed');
      }
    };

    handleAuthCallback();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Logging you in...</h2>
        <p className="text-gray-600">Please wait while we complete your authentication</p>
      </div>
    </div>
  );
}
