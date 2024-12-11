import './src/env';

import nextPWA from 'next-pwa';

import { withSentryConfig } from '@sentry/nextjs';
import WithBundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = WithBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer(
  nextPWA({
    dest: 'public',
    swcMinify: true,
    reactStrictMode: true,
    disable: !(process.env.NODE_ENV === 'production'),
    experimental: {
      typedRoutes: true,
      serverComponentsExternalPackages: ['@sentry/nextjs', '@sentry/node'],
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
  }),
);

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
