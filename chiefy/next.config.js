
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    serverActions: true,
    serverMinification: false
  },
  images: {
    domains: ["static.readdy.ai"]
  }
};

module.exports = nextConfig;
