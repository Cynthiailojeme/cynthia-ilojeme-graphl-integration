import React from "react";
import { Form, Formik, Field } from "formik";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import AuthWrapper from "../../components/AuthWrapper/AuthWrapper";
import { SignInSchema } from "../../utils/validation";

const SignIn = () => {
  const signInUser = (values: any) => {
    console.log("values", values);
  };
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
        onSubmit={(values) => signInUser(values)}
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
                disabled={!(isValid && dirty)}
              />
            </Form>
          );
        }}
      </Formik>
    </AuthWrapper>
  );
};

export default SignIn;
