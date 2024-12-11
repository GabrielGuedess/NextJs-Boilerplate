import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'haqz14',
  e2e: {
    baseUrl: 'http://localhost:3333',
  },
});
