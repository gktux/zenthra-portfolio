/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/contact', destination: '/contacts', permanent: true },
      { source: '/services', destination: '/hizmetler', permanent: true },
    ];
  },
};

export default nextConfig;
