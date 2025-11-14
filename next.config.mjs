/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com', // <-- 1. ADD THIS BLOCK
      },
      {
        protocol: 'https',
        hostname: 'ghchart.rshah.org',
      },
    ],
  },
};

export default nextConfig;