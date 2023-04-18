import { type ThemeVars } from '@storybook/theming';

import {
  type GlobalStyleComponent,
  type DefaultTheme,
  createGlobalStyle,
  css,
} from 'styled-components';

type GlobalStylesProps = {
  theme: DefaultTheme;
  storyBackground?: ThemeVars;
};

export const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    :is(::before, ::after) {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%;
  }

  body {
    ${({ theme, storyBackground }) => css`
      font-family: ${theme.fonts.default};
      color: ${theme.colors.white};
      background: linear-gradient(to bottom, transparent, #000) #000;

      ${!!storyBackground &&
      css`
        background: ${storyBackground.appContentBg};
      `}
    `}
  }
`;
