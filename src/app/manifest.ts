import { type MetadataRoute } from 'next';

const manifest = (): MetadataRoute.Manifest => ({
  start_url: '/',
  short_name: 'Next',
  display: 'standalone',
  theme_color: '#09090b',
  orientation: 'portrait',
  name: 'Next Boilerplate',
  background_color: '#09090b',
  description: 'Boilerplate utilizando Typescript, React e NextJS',
  icons: [
    {
      sizes: '192x192',
      type: 'image/png',
      purpose: 'maskable',
      src: 'images/icon-192.png',
    },
    {
      sizes: '384x384',
      type: 'image/png',
      src: 'images/icon-384.png',
    },
    {
      sizes: '512x512',
      type: 'image/png',
      src: 'images/icon-512.png',
    },
  ],
});

export default manifest;
