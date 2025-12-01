import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "randomuser.me"
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      include: path.resolve(__dirname, "src/assets/images/icons"),
      use: ["@svgr/webpack"], 
    });

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      exclude: path.resolve(__dirname, "src/assets/images/icons"),
      type: "asset/resource", 
    });

    return config;
  },
};

export default nextConfig;
