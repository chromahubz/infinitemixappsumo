#!/bin/sh
# Railway startup script with explicit PORT handling

echo "=== Railway Startup Script ==="
echo "PORT env variable: ${PORT:-not set}"
echo "Using PORT: ${PORT:-3000}"
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"
echo "Working directory: $(pwd)"
echo "Files in directory:"
ls -la
echo "=============================="

# Check if .next exists
if [ ! -d ".next" ]; then
  echo "ERROR: .next directory not found! Build may have failed."
  exit 1
fi

echo "Starting Next.js server..."

# Start Next.js with Railway's PORT (don't use exec so we can see errors)
node_modules/.bin/next start --hostname 0.0.0.0 --port "${PORT:-3000}"
EXIT_CODE=$?

echo "Next.js exited with code: $EXIT_CODE"
exit $EXIT_CODE
