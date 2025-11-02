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

# Make prepare-env script executable
RUN chmod +x scripts/prepare-env.sh

# Run prepare-env script to create .env.production with actual values
# Railway's env vars are available as environment variables during build
RUN ./scripts/prepare-env.sh

# Build the application (Next.js will read .env.production)
RUN npm run build

# Copy startup script
COPY start.sh ./
RUN chmod +x start.sh

# Expose port (Railway will map to its own port)
EXPOSE 3000

# Start Next.js using shell script for reliable PORT handling
CMD ["./start.sh"]
