import { defineConfig } from 'cypress';

const config = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3333',
  },
});

export default config;
