import { type NextRequest } from 'next/server';
import { withAuth } from 'next-auth/middleware';
import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

const publicPages = ['/', '/offline'];

const intlMiddleware = createMiddleware(routing);

const authMiddleware = withAuth(request => intlMiddleware(request), {
  pages: {
    signIn: '/',
  },
  callbacks: {
    authorized: ({ token }) => token != null,
  },
});

export default function middleware(request: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${routing.locales.join('|')}))?(${publicPages
      .flatMap(p => (p === '/' ? ['', '/'] : p))
      .join('|')})/?$`,
    'i',
  );
  const isPublicPage = publicPathnameRegex.test(request.nextUrl.pathname);

  if (isPublicPage) {
    return intlMiddleware(request);
  }

  return (authMiddleware as any)(request);
}

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};
