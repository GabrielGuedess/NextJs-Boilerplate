import { RouterContext } from 'next/dist/shared/lib/router-context';

import { themes } from '@storybook/theming';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'styles/global';
import { theme } from 'styles/theme';

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  darkMode: {
    dark: themes.dark,
    light: themes.normal,
  },
  docs: {
    theme: themes.dark,
  },
};

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
