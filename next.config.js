/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["your-domain.com"], // if you have image domains
  },
};

module.exports = nextConfig;
