import WithPWA from 'next-pwa';

import WithBundleAnalyzer from '@next/bundle-analyzer';

const withPWA = WithPWA({
  dest: 'public',
  disable: !(process.env.NODE_ENV === 'production'),
});

const withBundleAnalyzer = WithBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer(
  withPWA({
    swcMinify: true,
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
  }),
);

export default nextConfig;
