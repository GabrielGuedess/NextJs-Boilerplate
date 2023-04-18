import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '700'],
  display: 'swap',
  subsets: ['latin'],
});

export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',

    gray100: '#E1E1E6',
    gray200: '#A9A9B2',
    gray400: '#7C7C8A',
    gray500: '#505059',
    gray600: '#323238',
    gray700: '#29292E',
    gray800: '#202024',
    gray900: '#121214',
  },
  fontSizes: {
    xxs: '1rem',
    xs: '1.2rem',
    sm: '1.4rem',
    md: '1.6rem',
    lg: '1.8rem',
    xl: '2rem',
    '2xl': '2.4rem',
    '4xl': '3.2rem',
    '5xl': '3.6rem',
    '6xl': '4.8rem',
    '7xl': '6.4rem',
    '8xl': '7.2rem',
    '9xl': '9.6rem',
  },
  fontWeights: {
    regular: '400',
    medium: '500',
    bold: '700',
  },
  fonts: {
    default: `${poppins.style.fontFamily}, sans-serif`,
    code: 'monospace',
  },
  lineHeights: {
    shorter: '125%',
    short: '140%',
    base: '160%',
    tall: '180%',
  },
  radii: {
    px: '1px',
    xs: '4px',
    sm: '6px',
    md: '8px',
    lg: '16px',
    full: '9999px',
  },
  space: {
    1: '0.4rem',
    2: '0.8rem',
    3: '1.2rem',
    4: '1.6rem',
    5: '2rem',
    6: '2.4rem',
    7: '2.8rem',
    8: '3.2rem',
    10: '4.0rem',
    12: '4.8rem',
    16: '6.4rem',
    20: '8rem',
    40: '16rem',
    64: '25.6rem',
    80: '32rem',
  },
} as const;
