import { gql } from "@apollo/client";

export const IDENTIFICATION_MUTATION = gql`
  mutation requestSignUpMutation($email: Email!) {
    requestSignUp(input: { email: $email }) {
      error
    }
  }
`;

export const SIGNIN_MUTATION = gql`
  mutation signInMutation($email: Email!, $password: NonEmptyString!) {
    signIn(input: { email: $email, password: $password }) {
      token
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation SignUpMutation(
    $email: Email
    $password: NonEmptyString!
    $firstName: NonEmptyString!
    $lastName: NonEmptyString
    $token: JWT
    $organization: OrganizationInput
  ) {
    signUp(
      input: {
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
        organization: $organization
        token: $token
      }
    ) {
      token
    }
  }
`;
