import './src/env';

import { type NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

import withSerwistInit from '@serwist/next';

const withNextIntl = createNextIntlPlugin();

const withSerwist = withSerwistInit({
  swSrc: 'src/app/sw.ts',
  swDest: 'public/sw.js',
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

const config = withSerwist(withNextIntl(nextConfig));

export default config;
