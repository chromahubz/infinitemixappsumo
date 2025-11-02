# Use Node.js 20
FROM node:20-slim

# Install FFmpeg
RUN apt-get update && \
    apt-get install -y ffmpeg && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files (this layer will invalidate when source changes)
COPY . .

# Verify the fix exists
RUN echo "=== Verifying lib/task-store.ts exists ===" && \
    ls -la lib/task-store.ts && \
    echo "=== File found! ===" || \
    (echo "ERROR: lib/task-store.ts not found!" && exit 1)

# Remove any cached builds
RUN rm -rf .next

# Accept build arguments for NEXT_PUBLIC_ variables (available at build time)
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY
ARG NEXT_PUBLIC_FIREWORKS_API_KEY
ARG NEXT_PUBLIC_GOOGLE_API_KEY
ARG NEXT_PUBLIC_APP_URL

# Set as environment variables for the build
ENV NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY
ENV NEXT_PUBLIC_FIREWORKS_API_KEY=$NEXT_PUBLIC_FIREWORKS_API_KEY
ENV NEXT_PUBLIC_GOOGLE_API_KEY=$NEXT_PUBLIC_GOOGLE_API_KEY
ENV NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL

# Build the application (with env vars available)
RUN npm run build

# Copy startup script
COPY start.sh ./
RUN chmod +x start.sh

# Expose port (Railway will map to its own port)
EXPOSE 3000

# Start Next.js using shell script for reliable PORT handling
CMD ["./start.sh"]
