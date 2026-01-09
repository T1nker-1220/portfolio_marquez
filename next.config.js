/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack is now default in Next.js 16 - empty config silences migration warnings
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // Suppress 404 errors for missing images
    unoptimized: false,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
  },
  // Configure source maps
  productionBrowserSourceMaps: false, // Disable source maps in production
  // Custom logging to suppress image 404 errors
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
};

export default nextConfig;
