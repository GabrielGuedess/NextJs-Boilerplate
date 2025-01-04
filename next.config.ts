import './src/env';

import { type NextConfig } from 'next';

import { withSentryConfig } from '@sentry/nextjs';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
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

export default withSentryConfig(
  withSentryConfig(nextConfig, {
    disableLogger: true,
    hideSourceMaps: true,
    org: 'osiris-tecnology',
    silent: !process.env.CI,
    tunnelRoute: '/monitoring',
    widenClientFileUpload: true,
    automaticVercelMonitors: true,
    project: 'nextjs-boilerplate',
    reactComponentAnnotation: {
      enabled: true,
    },
  }),
  {
    disableLogger: true,
    hideSourceMaps: true,
    org: 'osiris-tecnology',
    silent: !process.env.CI,
    tunnelRoute: '/monitoring',
    widenClientFileUpload: true,
    project: 'nextjs-boilerplate',
    automaticVercelMonitors: true,
    reactComponentAnnotation: {
      enabled: true,
    },
  },
);
