import { gql } from "@apollo/client";

export const GET_USER_QUERY = gql`
  query User {
    me {
        firstName,
        lastName,
        email,
        createdAt,
        memberships {
            org {
                name,
                kind,
                createdAt
            },
            role
        }
    }
  }
`;
