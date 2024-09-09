/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.loom.com', // Corrected quotes
      },
    ],
  },
};

export default nextConfig;

