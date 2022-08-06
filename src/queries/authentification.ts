import { gql } from "@apollo/client";

export const QUERY_SIGNUP_USER = gql`
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

export const QUERY_SIGNIN_USER = gql`
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
