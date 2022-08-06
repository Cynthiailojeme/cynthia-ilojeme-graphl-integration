import { gql } from "@apollo/client";

export const QUERY_GET_USER = gql`
  query User() {
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
