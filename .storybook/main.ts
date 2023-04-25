import { type StorybookConfig } from '@storybook/nextjs';

export const title = 'NextJs Boilerplate';

const storybookConfig: StorybookConfig = {
  stories: ['../src/components/**/stories.tsx', '../src/stories/**/**.mdx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
    '@storybook/addon-toolbars',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    'storybook-addon-pseudo-states',
    'storybook-addon-performance',
    'storybook-addon-designs',
    'storybook-dark-mode',
  ],
  staticDirs: ['../public'],
  docs: {
    autodocs: true,
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: config => {
    config.resolve?.modules?.push(`${process.cwd()}/src`);

    return config;
  },
};

export default storybookConfig;
