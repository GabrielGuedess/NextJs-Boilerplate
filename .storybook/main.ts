import { type StorybookConfig } from '@storybook/nextjs';

export const title = 'NextJs Boilerplate';

const storybookConfig: StorybookConfig = {
  staticDirs: ['../public'],
  framework: {
    options: {},
    name: '@storybook/nextjs',
  },
  stories: ['../src/components/**/stories.tsx', '../src/stories/**/**.mdx'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
    '@storybook/addon-toolbars',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    'storybook-addon-pseudo-states',
    'storybook-dark-mode',
  ],
};

export default storybookConfig;
