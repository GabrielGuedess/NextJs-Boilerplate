/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !(process.env.NODE_ENV === 'production'),
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
  withPWA({
    swcMinify: true,
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
  }),
);
