import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],

    formats: ["image/avif", "image/webp"],

    minimumCacheTTL: 31536000,
  },

  compress: true,

  poweredByHeader: false,

  experimental: {
    optimizePackageImports: [
      "@imagekit/next",
      "framer-motion",
      "react-icons",
    ],
  },
};

export default nextConfig;