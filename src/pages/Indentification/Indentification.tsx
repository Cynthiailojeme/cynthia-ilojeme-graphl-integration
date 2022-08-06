import React from "react";
import { Form, Formik, Field } from "formik";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import AuthWrapper from "../../components/AuthWrapper/AuthWrapper";
import { IndentificationSchema } from "../../utils/validation";

const Indentification = () => {
  const identifyUser = (values: any) => {
    console.log("values", values);
  };

  return (
    <AuthWrapper
      title="Indentification"
      subtitle="Kindly enter your email to identify yourself
    "
    >
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={IndentificationSchema}
        onSubmit={(values) => identifyUser(values)}
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

export default Indentification;
