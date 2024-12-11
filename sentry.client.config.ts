import * as Sentry from '@sentry/nextjs';

import { env } from 'env';

Sentry.init({
  debug: false,
  tracesSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  dsn: env.NEXT_PUBLIC_SENTRY_DNS,
  integrations: [Sentry.replayIntegration()],
});
