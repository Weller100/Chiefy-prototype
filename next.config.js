/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["your-domain.com"], // if you have image domains
  },
  experimental: {
    serverActions: true, // if using server actions
  },
};

module.exports = nextConfig;
