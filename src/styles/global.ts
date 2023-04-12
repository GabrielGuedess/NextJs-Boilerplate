import { Poppins } from 'next/font/google';

import { type ThemeVars } from '@storybook/theming';

import {
  type GlobalStyleComponent,
  type DefaultTheme,
  css,
} from 'styled-components';
import { createGlobalStyle } from 'styled-components';

type GlobalStylesProps = {
  theme: DefaultTheme;
  storyBackground?: ThemeVars;
};

const poppins = Poppins({
  weight: ['300', '400', '500'],
  display: 'swap',
  subsets: ['latin'],
});

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

  ${({ storyBackground }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${poppins.style.fontFamily};

      ${!!storyBackground &&
      css`
        background: ${storyBackground.appContentBg};
      `}
    }
  `}
`;
