module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    'storybook-dark-mode',
    '@storybook/addon-a11y',
    'storybook-addon-designs',
    '@storybook/addon-viewport',
    '@storybook/addon-toolbars',
    'storybook-addon-pseudo-states',
  ],
  babel: async options => ({
    ...options,
    plugins: [
      ...options.plugins,
      require.resolve('@babel/plugin-transform-react-jsx'),
    ],
  }),
  webpackFinal: config => {
    config.resolve.modules.push(`${process.cwd()}/src`);
    return config;
  },
};
