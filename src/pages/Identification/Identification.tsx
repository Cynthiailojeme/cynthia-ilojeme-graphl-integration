import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { Form, Formik, Field } from "formik";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import AuthWrapper from "../../components/AuthWrapper/AuthWrapper";
import { IdentificationSchema } from "../../utils/validation";
import { IDENTIFICATION_MUTATION } from "../../queries/authentification";
import Alert from "../../utils/notification";

const Identification = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const [identifyUser, { loading }] = useMutation(IDENTIFICATION_MUTATION, {
    onCompleted: () => {
      Alert("success", "Success", "An email has been sent to your mail");
    },
    onError: ({ graphQLErrors, message }) => {
      const code = graphQLErrors[0]?.extensions?.code;
      if (code === "CONFLICT") {
        navigate("/sign-in", { state: email });
        Alert("error", "Email Already Exists!", "Please sign in");
      } else {
        Alert("error", "Error!", message);
      }
    },
  });

  return (
    <AuthWrapper
      title="Identification"
      subtitle="Kindly enter your email to identify yourself
    "
    >
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={IdentificationSchema}
        onSubmit={(values) => {
          setEmail(values.email);
          identifyUser({ variables: values });
        }}
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
                text="Submit"
                disabled={!(isValid && dirty) || loading}
                loading={loading}
                loadingText="Submitting..."
              />
            </Form>
          );
        }}
      </Formik>
    </AuthWrapper>
  );
};

export default Identification;
