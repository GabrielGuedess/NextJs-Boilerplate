import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

import { routing } from './routing';

const request = getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../translations/locales/${locale}.json`)).default,
  };
});

export default request;
