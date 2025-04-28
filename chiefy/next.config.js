
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['static.readdy.ai'],
  },
  swcMinify: true,
};

module.exports = nextConfig;
