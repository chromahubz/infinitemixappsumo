#!/bin/sh
# Railway startup script with explicit PORT handling

echo "=== Railway Startup Script ==="
echo "PORT env variable: ${PORT:-not set}"
echo "Using PORT: ${PORT:-3000}"
echo "=============================="

# Start Next.js with Railway's PORT
exec node_modules/.bin/next start --hostname 0.0.0.0 --port "${PORT:-3000}"
