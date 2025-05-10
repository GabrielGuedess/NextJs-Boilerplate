import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  defaultLocale: 'en-US',
  localePrefix: 'as-needed',
  locales: ['en-US', 'pt-BR'],
});
