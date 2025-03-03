import "./src/env.mjs";
import { withSentryConfig } from "@sentry/nextjs";
import path from "path";
import { fileURLToPath } from 'url';

// ESM equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@v1/supabase"],
  output: 'standalone',
  experimental: {
    // Better error reporting for module resolution
    outputFileTracingIncludes: {
      '/**': ['node_modules/**/*.js'],
    },
    instrumentationHook: process.env.NODE_ENV === "production",
    // Add support for proper static asset resolution
    serverComponentsExternalPackages: ['@v1/ui'],
  },
  // Ensure static assets are properly served
  poweredByHeader: false,
  reactStrictMode: true,
  // Add explicit static folder configuration
  distDir: '.next',
  // Improve asset handling - use absolute URLs to avoid path issues with spaces
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : '/',
  // Set base path to handle potential issues with spaces in directory names
  basePath: '',
  // Improve debugging
  webpack: (config, { dev, isServer }) => {
    // Improve source maps in development
    if (dev) {
      config.devtool = 'eval-source-map';
    }
    
    // Handle spaces in paths for module resolution
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@v1/ui': path.resolve(__dirname, '../../packages/ui'),
      },
    };
    
    return config;
  },
};

export default withSentryConfig(nextConfig, {
  silent: !process.env.CI,
  telemetry: false,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  tunnelRoute: "/monitoring",
});
