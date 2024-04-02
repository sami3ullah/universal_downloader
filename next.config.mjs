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
  // changing the home route "/" to /tiktok
  async redirects() {
    return [
      {
        source: "/",
        destination: "/tiktok",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
