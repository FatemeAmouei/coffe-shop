import type { NextConfig } from "next";

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.bonmano.com",
        port: "",
        pathname: "/wp-content/**",
        search: "",
      },
    ],
  },
};

export default config;
