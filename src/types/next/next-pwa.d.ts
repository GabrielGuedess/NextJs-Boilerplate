declare module 'next-pwa' {
  import { type NextConfig } from 'next';

  const nextPWA: (nextConfig: NextConfig) => NextConfig;

  export default nextPWA;
}
