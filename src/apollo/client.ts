import { getServerSession } from 'next-auth';

import { setContext } from '@apollo/client/link/context';
import { from, type ApolloClient } from '@apollo/client';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import {
  InMemoryCache,
  ApolloClient as NextSSRApolloClient,
} from '@apollo/experimental-nextjs-app-support';

import { authOptions } from 'lib/auth';

import { env } from 'env';

const httpLink = createUploadLink({
  uri: env.NEXT_PUBLIC_API_URL,
});

const registerApolloClient = (client: () => ApolloClient<unknown>) => {
  const apollo = client;

  return {
    apollo,
  };
};

const authLink = setContext(async (_, { headers }) => {
  const session = await getServerSession(authOptions);

  return {
    headers: {
      ...headers,
      authorization: session ? `Bearer ${session.token}` : '',
    } as Headers,
  };
});

export const { apollo } = registerApolloClient(
  () =>
    new NextSSRApolloClient({
      cache: new InMemoryCache(),
      link: from([authLink, httpLink]),
    }),
);
