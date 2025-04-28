/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    serverMinification: false,
    serverActions: {
      bodySizeLimit: "2mb"
    }
  },
  images: {
    domains: ["static.readdy.ai"],
  }
};

module.exports = nextConfig;
