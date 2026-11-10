import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/truck.pdf",
        destination: "/forms/trucking-insurance-application.pdf",
        permanent: true,
      },
      {
        source: "/surety.pdf",
        destination: "/forms/freight-bond-application.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
