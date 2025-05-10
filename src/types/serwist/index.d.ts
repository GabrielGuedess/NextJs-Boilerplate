import { type PrecacheEntry, type SerwistGlobalConfig } from 'serwist';

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: undefined | (string | PrecacheEntry)[];
  }
}
