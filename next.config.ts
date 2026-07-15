/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
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

module.exports = nextConfig;