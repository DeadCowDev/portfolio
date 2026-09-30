/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "export",
  basePath: "/portfolio",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
