
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["static.readdy.ai"],
  },
  experimental: {
    serverComponentsExternalPackages: ["*"]
  }
};

module.exports = nextConfig;
