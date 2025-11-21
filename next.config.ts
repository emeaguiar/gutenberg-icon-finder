import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/gutenberg-icon-finder",
  output: "export",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
