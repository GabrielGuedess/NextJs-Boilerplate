import { withAuth } from 'next-auth/middleware';

import dayjs from 'dayjs';

import { env } from 'env';

export default withAuth({
  secret: env.NEXTAUTH_SECRET,
  callbacks: {
    authorized: ({ token }) => {
      if (token?.refresh_token_expires) {
        const isValidRefreshToken = dayjs(token.refresh_token_expires).isAfter(
          new Date(),
        );

        return isValidRefreshToken;
      }

      return false;
    },
  },
});

export const config = { matcher: ['/auth'] };
