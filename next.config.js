/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "is1-ssl.mzstatic.com",
        port: "",
        pathname: "*",
      },
    ],
    domains: ["is1-ssl.mzstatic.com"],
  },
};

module.exports = nextConfig;
