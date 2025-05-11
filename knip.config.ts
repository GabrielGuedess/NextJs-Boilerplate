import { type KnipConfig } from 'knip';

const config: KnipConfig = {
  plop: {
    config: ['generators/plopfile.mjs'],
  },
  eslint: {
    entry: ['eslint.config.mjs', 'cypress/eslint.config.mjs'],
  },
  ignore: [
    '**/sw.ts',
    '**/i18n/**',
    '**/graphql/**',
    '**/generated/**',
    '**/functions/**',
    'apollo.config.ts',
    'src/apollo/client.ts',
    'cypress/support/index.d.ts',
    'src/actions/users/createUser.ts',
  ],
  ignoreDependencies: [
    'zsa',
    'sharp',
    'ts-node',
    'polished',
    'zsa-react',
    'framer-motion',
    'react-hook-form',
    '@storybook/blocks',
    'tailwind-variants',
    'eslint-config-next',
    '@hookform/resolvers',
    'tailwindcss-animate',
    'eslint-formatter-mo',
    'eslint-config-airbnb',
    '@stylistic/eslint-plugin',
    'eslint-import-resolver-typescript',
    '@apollo/client-integration-nextjs',
    '@kesills/eslint-config-airbnb-typescript',
    'graphql-codegen-typescript-validation-schema',
    '@graphql-codegen/typescript-validation-schema',
  ],
};

export default config;
