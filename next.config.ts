import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/khushi_web",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
