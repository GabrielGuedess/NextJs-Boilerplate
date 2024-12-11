import * as Sentry from '@sentry/nextjs';

import { env } from 'env';

Sentry.init({
  debug: false,
  tracesSampleRate: 1,
  dsn: env.NEXT_PUBLIC_SENTRY_DNS,
});
