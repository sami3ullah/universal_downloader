/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.tikwm.com",
      },
    ],
  },
};

export default nextConfig;
