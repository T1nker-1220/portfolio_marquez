/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Configure source maps
  productionBrowserSourceMaps: false, // Disable source maps in production
  webpack: (config, { dev, isServer }) => {
    // Suppress source map warnings in development
    if (dev && !isServer) {
      config.devtool = 'eval-source-map';
      // Filter out unwanted source map warnings
      config.ignoreWarnings = [
        /Failed to parse source map/,
        /source map/,
        /sourceMap/
      ];
    }
    return config;
  },
  // Suppress specific 404 warnings in development
  onDemandEntries: {
    // Reduce log noise
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  }
};

export default nextConfig;
