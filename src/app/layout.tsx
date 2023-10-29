import { type Viewport, type Metadata } from 'next';

import { Analytics } from 'components/atoms/Analytics';

import { StyledComponentsRegistry } from 'lib/registry';

import { Providers } from './providers';

export const viewport: Viewport = {
  themeColor: '#06092B',
  colorScheme: 'dark',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Boilerplate',
  description:
    'A simple project starter to work with TypeScript, React, NextJS and Styled Components.',
  icons: {
    shortcut: ['/img/icon-512.png'],
    apple: [{ url: '/img/icon-512.png' }],
  },
  manifest: '/manifest.json',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="pt-BR">
    <body>
      <StyledComponentsRegistry>
        <Providers>{children}</Providers>
      </StyledComponentsRegistry>
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
