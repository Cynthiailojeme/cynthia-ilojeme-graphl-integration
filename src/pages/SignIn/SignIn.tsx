import React from "react";
import { Form, Formik, Field } from "formik";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import AuthWrapper from "../../components/AuthWrapper/AuthWrapper";
import { SignInSchema } from "../../utils/validation";
import { useMutation } from "@apollo/client";
import { SIGNIN_MUTATION } from "../../queries/authentification";
import Alert from "../../utils/notification";

const SignIn = () => {
  const [signInUser, { data, loading }] = useMutation(SIGNIN_MUTATION, {
    onError: (error) => {
      Alert("error", "Failure!", error.message);
    },
  });

  console.log("data", { data });

  return (
    <AuthWrapper
      title="Sign In"
      subtitle="Kindly enter your details to sign in
    "
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={(values) => signInUser({ variables: values })}
      >
        {({ isValid, dirty }) => {
          return (
            <Form>
              <Field
                name="email"
                label="Email Address"
                type="text"
                placeholder="Enter email address"
                bottom={30}
                component={Input}
              />

              <Field
                name="password"
                label="Password"
                type="password"
                placeholder="Enter password"
                bottom={30}
                component={Input}
              />

              <Button
                text="Sign in"
                onClick={() => {}}
                disabled={!(isValid && dirty) || loading}
                loading={loading}
                loadingText="Signing in"
              />
            </Form>
          );
        }}
      </Formik>
    </AuthWrapper>
  );
};

export default SignIn;
