/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost:",
        port: "1337",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
