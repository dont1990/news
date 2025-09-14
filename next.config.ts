import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "media.mehrnews.com", // ✅ allow images from Mehr News
      "img9.irna.ir", // optional: add other hosts you use
      "www.example.com", // add more as needed
    ],
  },
};

export default nextConfig;
