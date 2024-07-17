/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/grid-layouts",
        destination: "/grid-layouts/center",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
