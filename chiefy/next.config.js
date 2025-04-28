
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["static.readdy.ai"],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb"
    }
  }
};

module.exports = nextConfig;
