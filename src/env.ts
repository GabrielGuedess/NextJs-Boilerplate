import { z } from 'zod';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  server: {
    NEXTAUTH_SECRET: z.string().min(1),
    NEXTAUTH_URL: z.string().url().min(1),
  },
  client: {
    NEXT_PUBLIC_API_URL: z.string().url().min(1),
    NEXT_PUBLIC_SENTRY_DNS: z.string().url().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_SENTRY_DNS: process.env.NEXT_PUBLIC_SENTRY_DNS,
  },
});
