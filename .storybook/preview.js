import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

import { withNextRouter } from '@gogaille/storybook-addon-next-router';
import { addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming';

addDecorator(withNextRouter());

export const parameters = {
  darkMode: {
    dark: { ...themes.dark, appBg: '#2F2F2F' },
    light: { ...themes.normal, appBg: '#FFFFFF' },
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
