
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["static.readdy.ai"],
  },
  experimental: {
    outputStandalone: true
  }
};

module.exports = nextConfig;
