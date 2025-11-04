import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  srcDir: 'src',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  distDir: 'out',
};

export default nextConfig;
