import 'dotenv/config';

const config = {
  client: {
    excludes: ['**/generated/**'],
    includes: ['**/graphql/**/*.ts'],
    service: {
      name: 'api',
      skipSSLValidation: true,
      url: process.env.NEXT_PUBLIC_API_URL,
    },
  },
};

export default config;
