import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        aggregateTimeout: 200,
        poll: 1000,
        ignored: /node_modules/,
      };
    }
    return config;
  },
};

export default nextConfig;
