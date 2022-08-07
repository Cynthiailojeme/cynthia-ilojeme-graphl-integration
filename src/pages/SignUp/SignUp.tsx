import React, { useState } from "react";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { Form, Formik, Field } from "formik";
import jwtDecode from "jwt-decode";
import { useMutation } from "@apollo/client";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import AuthWrapper from "../../components/AuthWrapper/AuthWrapper";
import styles from "../../components/AuthWrapper/AuthWrapper.module.scss";
import { SignUpSchema } from "../../utils/validation";
import Alert from "../../utils/notification";
import { JWTDecode } from "../../routes/PrivateRoute";
import { cleanUp } from "../../utils/functions";
import { SIGNUP_MUTATION } from "../../queries/authentification";
import Storage from "../../utils/storage";

const SignUp = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const token = new URLSearchParams(search).get("token");
  const decodedToken = token && jwtDecode<JWTDecode>(token);
  const [tokenObj] = useState(decodedToken);

  const [signUpUser, { loading }] = useMutation(SIGNUP_MUTATION, {
    onCompleted: (data) => {
      Storage.set("user-token", data?.signUp?.token);
      navigate("/");
    },
    onError: (error) => {
      Alert("error", "Failure!", error?.message);
    },
  });

  return !token ? (
    <Navigate to="/identification" replace />
  ) : (
    <AuthWrapper
      title="Sign Up"
      subtitle="Kindly enter your details to sign up
    "
    >
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          organization: "",
          title: "",
          email: tokenObj && tokenObj.identifier,
          password: "",
          confirm_password: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          const payload = {
            firstName: values.first_name,
            lastName: values.last_name,
            email: values.email,
            password: values.password,
            organization: {
              name: values.organization,
              title: values.title,
              // Added based on graphl api docs because organization kind is required
              kind: "Merchant",
            },
          };
          signUpUser({ variables: cleanUp(payload) });
        }}
      >
        {({ isValid, dirty }) => {
          return (
            <Form>
              <div className={styles.wrapper__grid}>
                <Field
                  name="first_name"
                  label="First Name"
                  type="text"
                  placeholder="Enter first name"
                  bottom={30}
                  required
                  component={Input}
                  disabled={!token}
                />
                <Field
                  name="last_name"
                  label="Last Name"
                  type="text"
                  placeholder="Enter last name"
                  bottom={30}
                  component={Input}
                  disabled={!token}
                />
              </div>
              <Field
                name="title"
                label="Title"
                type="text"
                placeholder="Enter title"
                bottom={30}
                required
                component={Input}
                disabled={!token}
              />
              <Field
                name="email"
                label="Email Address"
                type="text"
                placeholder="Enter email address"
                bottom={30}
                required
                disabled
                component={Input}
              />
              <Field
                name="organization"
                label="Name of Organization"
                type="text"
                placeholder="Enter organization"
                bottom={30}
                required
                component={Input}
                disabled={!token}
              />

              <div className={styles.wrapper__grid}>
                <Field
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                  required
                  bottom={30}
                  component={Input}
                  disabled={!token}
                />
                <Field
                  name="confirm_password"
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm password"
                  bottom={30}
                  required
                  component={Input}
                  disabled={!token}
                />
              </div>

              <Button
                text="Sign Up"
                disabled={!(isValid && dirty) || loading}
                marginTop={20}
                loading={loading}
                loadingText="Signing up..."
              />
            </Form>
          );
        }}
      </Formik>
    </AuthWrapper>
  );
};

export default SignUp;
