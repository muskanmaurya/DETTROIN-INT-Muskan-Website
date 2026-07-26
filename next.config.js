/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "northpeak.com",
        pathname: "/wp-content/**",
      },
    ],
  },
};

module.exports = nextConfig;
