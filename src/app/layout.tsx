import { Inter } from 'next/font/google';
import { type Viewport, type Metadata } from 'next';

import { type ReactNode } from 'react';

import 'styles/global.css';

import { Providers } from './providers';

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#FFFFFF',
};

export const metadata: Metadata = {
  title: 'Next Boilerplate',
  manifest: '/manifest.json',
  description: 'Boilerplate utilizando Typescript, React e NextJS',
  icons: {
    shortcut: ['/img/icon-512.png'],
    apple: [{ url: '/img/icon-512.png' }],
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="pt-BR" className={inter.className} suppressHydrationWarning>
    <body
      className={`
        flex min-h-screen flex-col bg-white transition-colors
        dark:bg-zinc-950
      `}
      suppressHydrationWarning
    >
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
