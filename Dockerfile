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

# Build the application
RUN npm run build

# Set PORT environment variable (Railway uses PORT env var)
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Expose port
EXPOSE 3000

# Start the application (standalone mode for production)
CMD ["node", ".next/standalone/server.js"]
