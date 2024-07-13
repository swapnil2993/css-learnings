/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/grid-layouts/center",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
