import { useSession } from 'next-auth/react';

import { type PropsWithChildren } from 'react';

import { setContext } from '@apollo/client/link/context';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import {
  from,
  ApolloClient,
  InMemoryCache,
  ApolloProvider as ApolloProviderWrapper,
} from '@apollo/client';

import { env } from 'env';

export const ApolloProvider = ({ children }: PropsWithChildren) => {
  const { data: session } = useSession();

  const httpLink = createUploadLink({
    uri: env.NEXT_PUBLIC_API_URL,
    headers: {
      ...(session ? { authorization: `Bearer ${session.token}` } : {}),
    },
  });

  const authLink = setContext(async (_, { headers }) => ({
    headers: {
      ...headers,
      ...(session ? { authorization: `Bearer ${session.token}` } : {}),
    } as Headers,
  }));

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([authLink, httpLink]),
  });

  return (
    <ApolloProviderWrapper client={client}>{children}</ApolloProviderWrapper>
  );
};
