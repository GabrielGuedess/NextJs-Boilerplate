import { ThemeProvider } from 'next-themes';

import { type ReactNode, type ReactElement } from 'react';

import {
  render,
  type RenderResult,
  type RenderOptions,
} from '@testing-library/react';

type TestProviderOptionsProps = {
  theme?: 'dark' | 'light' | 'system';
};

type CustomOptionsProps = TestProviderOptionsProps & RenderOptions;

const createTestProviders = ({ theme = 'dark' }: TestProviderOptionsProps) => {
  const Providers = ({ children }: { children: ReactNode }) => (
    <ThemeProvider
      attribute="class"
      forcedTheme="light"
      defaultTheme={theme}
      enableSystem={false}
    >
      {children}
    </ThemeProvider>
  );

  return Providers;
};

const customRender = (
  ui: ReactElement,
  { theme, ...options }: CustomOptionsProps = {},
): RenderResult =>
  render(ui, { wrapper: createTestProviders({ theme }), ...options });

export { customRender as render };
