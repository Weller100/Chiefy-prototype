
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    serverActions: {
      allowedOrigins: ["*"]
    },
    serverMinification: false
  },
  images: {
    domains: ["static.readdy.ai"]
  }
};

module.exports = nextConfig;
