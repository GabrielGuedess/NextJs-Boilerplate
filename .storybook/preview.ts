import { MockedProvider } from '@apollo/client/testing';

import { themes } from '@storybook/theming';
import { type Preview } from '@storybook/react';

import '../src/styles/global.css';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    apolloClient: {
      MockedProvider,
    },
    controls: {
      matchers: {
        date: /date$/i,
      },
    },
    darkMode: {
      current: 'light',
      dark: themes.dark,
      darkClass: 'dark',
      lightClass: 'light',
      classTarget: 'html',
      light: themes.normal,
    },
    options: {
      storySort: {
        locales: 'en-US',
        method: 'alphabetical',
        order: [
          'Home',
          'Tokens',
          'Atoms',
          'Molecules',
          'Organisms',
          'Templates',
        ],
      },
    },
  },
};

export default preview;
