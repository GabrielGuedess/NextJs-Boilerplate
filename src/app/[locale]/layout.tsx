import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { type Metadata, type Viewport } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { hasLocale, type Locale, NextIntlClientProvider } from 'next-intl';

import { type ReactNode } from 'react';

import { routing } from 'i18n/routing';

import { Providers } from 'app/providers';

import 'styles/global.css';

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#FFFFFF',
};

export const generateStaticParams = () =>
  routing.locales.map(locale => ({ locale }));

export const generateMetadata = async (
  props: Omit<LocaleLayoutProps, 'children'>,
): Promise<Metadata> => {
  const { locale } = await props.params;

  const t = await getTranslations({ locale, namespace: 'layout' });

  return {
    description: t('description'),
    applicationName: t('application-name'),
    formatDetection: {
      telephone: false,
    },
    icons: {
      shortcut: ['/image/icon-512.png'],
      apple: [{ url: '/image/icon-512.png' }],
    },
    title: {
      default: t('title-template.default'),
      template: t('title-template.template'),
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: 'default',
      title: t('apple-web-app.title'),
    },
    openGraph: {
      type: 'website',
      siteName: t('open-graph.site-name'),
      description: t('open-graph.description'),
      title: {
        default: t('open-graph.title.default'),
        template: t('open-graph.title.template'),
      },
    },
  };
};

const LocaleLayout = async ({ params, children }: LocaleLayoutProps) => {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className={inter.className} suppressHydrationWarning>
      <body
        className={`
          flex min-h-dvh flex-col bg-white transition-colors
          dark:bg-zinc-950
        `}
        suppressHydrationWarning
      >
        <NextIntlClientProvider>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
