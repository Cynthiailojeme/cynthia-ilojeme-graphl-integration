import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Formik, Field } from "formik";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import AuthWrapper from "../../components/AuthWrapper/AuthWrapper";
import { SignInSchema } from "../../utils/validation";
import { useMutation } from "@apollo/client";
import { SIGNIN_MUTATION } from "../../queries/authentification";
import Alert from "../../utils/notification";
import Storage from "../../utils/storage";

const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const defaultEmail = location.state;

  const [signInUser, { loading }] = useMutation(SIGNIN_MUTATION, {
    onCompleted: (data) => {
      Storage.set("user-token", data?.signIn?.token);
      navigate("/");
    },
    onError: (error) => {
      Alert("error", "Failure!", error?.message);
    },
  });

  return (
    <AuthWrapper
      title="Sign In"
      subtitle="Kindly enter your details to sign in
    "
    >
      <Formik
        initialValues={{
          email: defaultEmail || "",
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
                text="Sign In"
                disabled={!(isValid && dirty) || loading}
                loading={loading}
                loadingText="Signing in..."
              />
            </Form>
          );
        }}
      </Formik>
    </AuthWrapper>
  );
};

export default SignIn;
