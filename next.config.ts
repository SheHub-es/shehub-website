import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "randomuser.me", pathname: "/**" },
    ],
  },
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "192.168.1.26",
    "192.168.1.39",
  ],
};

export default nextConfig;
