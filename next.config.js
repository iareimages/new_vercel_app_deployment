/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com'],
  },
  swcMinify: false, // 🔧 Disable minification
  compress: false,  // 🔧 Optional: turn off gzip to reduce confusion
};

module.exports = nextConfig;
