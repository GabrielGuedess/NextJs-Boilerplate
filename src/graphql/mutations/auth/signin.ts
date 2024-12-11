import { gql } from '@apollo/client';

export const MUTATION_SIGN_IN = gql`
  mutation SignIn($signIn: AuthUserInput!) {
    signIn(signIn: $signIn) {
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
  }
`;
