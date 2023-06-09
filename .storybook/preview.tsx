import React from 'react';

import { withPerformance } from 'storybook-addon-performance';
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
      const isDark = useDarkMode();

      return (
        <ThemeProvider theme={theme}>
          <Story />
          <GlobalStyles storyBackground={isDark ? themes.dark : themes.light} />
        </ThemeProvider>
      );
    },
    withPerformance,
  ],
};

export default preview;
