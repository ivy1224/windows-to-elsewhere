/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  }
};

export default nextConfig; 