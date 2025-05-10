import type messages from 'translations/locales/en-US.json';

import { type routing } from 'i18n/routing';
import { type formats } from 'i18n/request';

declare module 'next-intl' {
  interface AppConfig {
    Formats: typeof formats;
    Messages: typeof messages;
    Locale: (typeof routing.locales)[number];
  }
}
