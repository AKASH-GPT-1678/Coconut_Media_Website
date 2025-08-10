import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {

    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "storage.cloud.google.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol : "https",
        hostname : "res.cloudinary.com",
      },
      {
        protocol : "https",
        hostname : "meat-bucket-2025.s3.ap-south-1.amazonaws.com",
      }
    ],
  },
};

export default nextConfig;
