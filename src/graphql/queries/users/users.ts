import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query Users(
    $after: String
    $before: String
    $first: Float
    $last: Float
    $order: UserOrderByWithRelationInput
    $where: UserWhereInput
  ) {
    users(
      after: $after
      before: $before
      first: $first
      last: $last
      order: $order
      where: $where
    ) {
      edges {
        node {
          active
          address
          address_complement
          address_neighborhood
          address_number
          avatar_path
          birth_date
          city_id
          created_at
          device_id
          document
          email
          email_verified
          face_id_path
          full_name
          id
          phone_number
          role
          state_id
          updated_at
          zip_code
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      count
      totalCount
    }
  }
`;
