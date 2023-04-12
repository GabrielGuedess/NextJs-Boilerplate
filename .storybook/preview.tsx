import { RouterContext } from 'next/dist/shared/lib/router-context';

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
    nextRouter: {
      Provider: RouterContext.Provider,
    },
    darkMode: {
      dark: themes.dark,
      light: themes.normal,
    },
    docs: {
      container: DocumentContainer,
    },
    layout: 'fullscreen',
  },
  decorators: [
    Story => {
      const dark = useDarkMode();

      return (
        <ThemeProvider theme={theme}>
          <GlobalStyles storyBackground={dark ? themes.dark : themes.light} />
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
