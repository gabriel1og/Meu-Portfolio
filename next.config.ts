import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  serverExternalPackages: ["@react-pdf/renderer"],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
