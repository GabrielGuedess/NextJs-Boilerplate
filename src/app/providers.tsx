'use client';

import { DefaultSeo } from 'next-seo';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'styles/global';
import { theme } from 'styles/theme';

import SEO from '../../next-seo.config';

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    {children}
    <GlobalStyles />
    <DefaultSeo {...SEO} />
  </ThemeProvider>
);
