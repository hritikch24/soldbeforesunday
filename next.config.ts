import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  turbopack: { root: process.cwd() },
  async redirects() {
    return [
      { source: '/uk', destination: '/', permanent: true },
      { source: '/uk/situations/stopping-foreclosure', destination: '/uk/situations/repossession', permanent: true },
    ];
  },
};
export default nextConfig;
