/** @type {import('next').NextConfig} */
const isLocal = process.env.NODE_ENV === "development";
const isProd = process.env.NODE_ENV === "production";
const localEnv = "http://localhost:3000";
const prodEnv = "https://podcaster-delta.vercel.app";

const nextConfig = {
  async headers() {
    return [
      {
        source: "/",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: isLocal ? localEnv : prodEnv,
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "is1-ssl.mzstatic.com",
        port: "",
        pathname: "/image/thumb/**",
      },
    ],
  },
};

module.exports = nextConfig;
