'use client';

import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

import { type ReactNode } from 'react';

import { ApolloProvider } from 'apollo/provider';

import { ToastProvider } from 'providers/ToastProvider';

export const Providers = ({ children }: { children: ReactNode }) => (
  <SessionProvider>
    <ApolloProvider>
      <ThemeProvider attribute="class" enableSystem>
        {children}

        <ToastProvider />
      </ThemeProvider>
    </ApolloProvider>
  </SessionProvider>
);
