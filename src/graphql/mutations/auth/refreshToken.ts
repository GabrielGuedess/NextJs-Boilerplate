import { gql } from '@apollo/client';

export const MUTATION_REFRESH_TOKEN = gql`
  mutation RefreshToken {
    refreshToken {
      token
      token_expires
    }
  }
`;
