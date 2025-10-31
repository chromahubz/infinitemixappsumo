import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  // Log for debugging on Railway
  console.log(`[InfiniteMix Middleware] Incoming: ${pathname}`);

  // CRITICAL FIX: If someone tries to go directly to /app page,
  // but we want landing at root, we need to handle this

  // The issue: Railway might be serving cached routes or
  // there might be a rewrite happening somewhere

  // Solution: Be explicit about what goes where

  // If path is exactly /app (the software), allow it
  if (pathname === '/app' || pathname.startsWith('/app/')) {
    console.log(`[InfiniteMix Middleware] ✅ Allowing /app route`);
    return NextResponse.next();
  }

  // If path is exactly / (root), it should show landing
  if (pathname === '/') {
    console.log(`[InfiniteMix Middleware] ✅ Root path - showing landing`);
    return NextResponse.next();
  }

  // All other routes continue normally
  console.log(`[InfiniteMix Middleware] ✅ Other route: ${pathname}`);
  return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
