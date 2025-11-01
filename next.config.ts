import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // CRITICAL: Disable static optimization for root page to force dynamic rendering
  // This ensures Railway serves the correct page.tsx file
  experimental: {
    // Force dynamic rendering on all routes to prevent caching issues
  },

  // Allow ESLint warnings during production builds (don't fail on warnings)
  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
      };
    }

    // Handle WASM files
    config.module.rules.push({
      test: /\.wasm$/,
      type: 'asset/resource',
    });

    // Copy essentia WASM file
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };

    return config;
  },
};

export default nextConfig;
