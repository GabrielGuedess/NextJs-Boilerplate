module.exports = {
  stories: ['../src/components/**/stories.tsx', '../src/styles/**/stories.mdx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
    '@storybook/addon-toolbars',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    'storybook-addon-pseudo-states',
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
  webpackFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/NextJs-Boilerplate/';
    }

    config.resolve.modules.push(`${process.cwd()}/src`);

    return config;
  },
};
