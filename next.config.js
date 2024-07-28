/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      }
    ],
  },
};

const withVercelToolbar = require('@vercel/toolbar/plugins/next')();

module.exports = withVercelToolbar(nextConfig);
