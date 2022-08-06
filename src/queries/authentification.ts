import { gql } from "@apollo/client";

// export const SIGNUP_MUTATION = gql`
//   mutation SignupMutation(
//     $email: String!
//     $password: String!
//     $firstName: String!
//     $lastName: String,
//     $organization: {
//       name: String!,
//       title: String!
//     }
//   ) {
//     signup(email: $email, password: $password, firstName: $firstName, lastName: $lastName, organization: {
//       name: $organization.name,
//       title: $organization.title
//     } ) {
//       token
//     }
//   }
// `;

export const SIGNIN_MUTATION = gql`
  mutation signInMutation($email: Email!, $password: NonEmptyString!) {
    signIn(input: { email: $email, password: $password }) {
      firstName
      lastName
      email
      token
    }
  }
`;
