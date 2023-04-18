import React from 'react';

import { useDarkMode } from 'storybook-dark-mode';

import { type Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'styles/global';
import { theme } from 'styles/theme';

import { DocumentContainer } from './components/DocumentContainer';

const preview: Preview = {
  parameters: {
    darkMode: {
      dark: themes.dark,
      light: themes.normal,
    },
    docs: {
      container: DocumentContainer,
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Home',
          'Tokens',
          'Atoms',
          'Molecules',
          'Organisms',
          'Templates',
        ],
        locales: 'en-US',
      },
    },
    layout: 'fullscreen',
  },
  decorators: [
    Story => {
      const dark = useDarkMode();

      return (
        <ThemeProvider theme={theme}>
          <Story />
          <GlobalStyles storyBackground={dark ? themes.dark : themes.light} />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
