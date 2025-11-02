#!/bin/bash
# Script to prepare environment variables for Next.js build
# This runs BEFORE npm run build to create .env.production with actual values

echo "=== Preparing environment for Next.js build ==="
echo "NEXT_PUBLIC_SUPABASE_URL: ${NEXT_PUBLIC_SUPABASE_URL:-NOT_SET}"
echo "NEXT_PUBLIC_APP_URL: ${NEXT_PUBLIC_APP_URL:-NOT_SET}"
echo "================================================"

# Create .env.production with actual values (not variable references)
cat > .env.production << EOF
NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL}
NEXT_PUBLIC_SUPABASE_ANON_KEY=${NEXT_PUBLIC_SUPABASE_ANON_KEY}
NEXT_PUBLIC_FIREWORKS_API_KEY=${NEXT_PUBLIC_FIREWORKS_API_KEY}
NEXT_PUBLIC_GOOGLE_API_KEY=${NEXT_PUBLIC_GOOGLE_API_KEY}
NEXT_PUBLIC_APP_URL=${NEXT_PUBLIC_APP_URL}
SUPABASE_SERVICE_ROLE_KEY=${SUPABASE_SERVICE_ROLE_KEY}
KIE_API_KEY=${KIE_API_KEY}
KIE_API_BASE_URL=${KIE_API_BASE_URL}
CALLBACK_BASE_URL=${CALLBACK_BASE_URL}
NODE_ENV=production
EOF

echo ".env.production created successfully"
echo "First 3 lines:"
head -3 .env.production
