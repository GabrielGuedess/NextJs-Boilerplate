import { env } from 'env';
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  debug: false,
  tracesSampleRate: 1,
  dsn: env.NEXT_PUBLIC_SENTRY_DNS,
});
