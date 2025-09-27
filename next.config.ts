import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "media.mehrnews.com", // ✅ allow images from Mehr News
      "img9.irna.ir", // optional: add other hosts you use
      "www.example.com", // add more as needed
      "s3.castbox.fm",
      "www.irna.ir",
      "media.mashreghnews.ir",
      "www.mashreghnews.ir",
      "cdn.mashreghnews.ir",
      "openweathermap.org",
      "static.jaaar.com",
      "static.shahrekhabar.com",
      "media.khabaronline.ir",
    ],
  },
};

export default nextConfig;
