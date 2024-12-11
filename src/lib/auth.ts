import CredentialsProvider from 'next-auth/providers/credentials';
import { type User, type Session, type NextAuthOptions } from 'next-auth';

import dayjs from 'dayjs';

import { env } from 'env';

type CredentialsProps = {
  email: string;
  password: string;
};

const signIn = async ({ email, password }: CredentialsProps) => {
  const response = await fetch(env.NEXT_PUBLIC_API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `mutation {
        signIn(signIn: {email: "${email}", password: "${password}"}) {
          refresh_token
          refresh_token_expires
          token
          token_expires
          user_id
          user {
            active
            avatar_path
            created_at
            document
            email
            full_name
            id
            role
            updated_at
          }
        }
      }`,
    }),
  });

  const { data } = await response.json();

  return data.signIn;
};

export const authOptions = {
  pages: { signIn: '/' },
  secret: env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { type: 'text', label: 'E-mail' },
        password: { type: 'password', label: 'Password' },
      },
      authorize: async (credentials): Promise<any> => {
        if (credentials) {
          const {
            user,
            token,
            token_expires: tokenExpires,
            refresh_token: refreshToken,
            refresh_token_expires: refreshTokenExpires,
          } = await signIn({
            email: credentials.email,
            password: credentials.password,
          });

          return {
            user,
            token,
            token_expires: tokenExpires,
            refresh_token: refreshToken,
            refresh_token_expires: refreshTokenExpires,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    redirect: async ({ url }) => url,
    session: async ({ token, session }) => ({ ...session, ...token }),
    jwt: async ({ user, token, trigger, session }): Promise<any> => {
      if (trigger === 'update') {
        const newData = session as Session;

        token.user = { ...token.user, ...newData.user } as User;
      }

      const isValidToken = dayjs(token.token_expires).isAfter(new Date());

      if (!isValidToken && token?.refresh_token) {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL!, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token.refresh_token}`,
          },
          body: JSON.stringify({
            query: `mutation RefreshToken {
              refreshToken {
                token
                token_expires
              }
            }`,
          }),
        });

        const {
          data: { refreshToken },
        } = await response.json();

        return {
          ...user,
          ...token,
          token: refreshToken.token,
          token_expires: new Date(refreshToken.token_expires),
        };
      }

      return { ...token, ...user };
    },
  },
} satisfies NextAuthOptions;
