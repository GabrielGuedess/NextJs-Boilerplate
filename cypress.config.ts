import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: process.env.CYPRESS_PROJECT_ID,
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
});
