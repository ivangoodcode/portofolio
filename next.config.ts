import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default nextConfig;
