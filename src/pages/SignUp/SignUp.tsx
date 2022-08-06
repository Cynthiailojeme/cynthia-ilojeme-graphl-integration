import React from "react";
import { Form, Formik, Field } from "formik";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import AuthWrapper from "../../components/AuthWrapper/AuthWrapper";
import styles from "../../components/AuthWrapper/AuthWrapper.module.scss";
import { SignUpSchema } from "../../utils/validation";
import { useLocation } from "react-router-dom";

const SignUp = () => {
  const { search } = useLocation();
  const token = new URLSearchParams(search).get("token");

  console.log("token", token);

  const signUpUser = (values: any) => {
    const payload = {
      firstName: values.first_name,
      lastName: values.last_name,
      email: values.email,
      password: values.password,
      organization: {
        name: values.organization,
      },
      title: values.title,
    };

    console.log("payload", payload);
  };

  return (
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
          email: "",
          password: "",
          confirm_password: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => signUpUser(values)}
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
                />
                <Field
                  name="last_name"
                  label="Last Name"
                  type="text"
                  placeholder="Enter last name"
                  bottom={30}
                  component={Input}
                />
              </div>
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
              <div className={styles.wrapper__grid}>
                <Field
                  name="organization"
                  label="Name of Organization"
                  type="text"
                  placeholder="Enter organization"
                  bottom={30}
                  required
                  component={Input}
                />
                <Field
                  name="title"
                  label="Title"
                  type="text"
                  placeholder="Enter title"
                  bottom={30}
                  required
                  component={Input}
                />
              </div>

              <div className={styles.wrapper__grid}>
                <Field
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                  required
                  bottom={30}
                  component={Input}
                />
                <Field
                  name="confirm_password"
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm password"
                  bottom={30}
                  required
                  component={Input}
                />
              </div>

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

export default SignUp;
