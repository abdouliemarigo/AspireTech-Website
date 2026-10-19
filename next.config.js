/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ hostname: '**' }] },
  experimental: { typedRoutes: false }
};
module.exports = nextConfig;
