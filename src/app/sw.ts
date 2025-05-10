import { Serwist } from 'serwist';
import { defaultCache } from '@serwist/next/worker';

declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
  precacheEntries: self.__SW_MANIFEST,
  fallbacks: {
    entries: [
      {
        url: '/offline',
        matcher: ({ request }) => request.destination === 'document',
      },
    ],
  },
});

serwist.addEventListeners();
