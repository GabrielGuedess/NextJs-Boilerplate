import { createGlobalStyle } from 'styled-components';

import { Poppins } from '@next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '500'],
  display: 'swap',
  subsets: ['latin'],
});

export const GlobalStyles = createGlobalStyle`
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
    font-family: ${poppins.style.fontFamily};
  }
`;
