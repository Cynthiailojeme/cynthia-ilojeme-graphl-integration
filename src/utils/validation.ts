import * as Yup from "yup";

const pattern =
  /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,15}$/;

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email().trim().required("email is required."),
  password: Yup.string().required("password is required."),
});

export const IdentificationSchema = Yup.object().shape({
  email: Yup.string().email().trim().required("email is required."),
});

export const SignUpSchema = Yup.object().shape({
  first_name: Yup.string()
    .trim()
    .min(2, "first name cannot be less than 2 characters.")
    .required("first name is required.")
    .matches(
      /^[A-Za-z/-]+$/,
      "cannot contain numbers and special characters except hyphen."
    ),
  last_name: Yup.string()
    .trim()
    .min(2, "last name cannot be less than 2 characters.")
    .matches(
      /^[A-Za-z/-]+$/,
      "cannot contain numbers and special characters except hyphen."
    ),
  organization: Yup.string()
    .min(2, "organization name cannot be less than 2 characters.")
    .required("organization name is required."),
  title: Yup.string()
    .min(2, "title cannot be less than 2 characters.")
    .required("title is required."),
  password: Yup.string()
    .required("password is required.")
    .min(8, "password cannot be less than 8 characters.")
    .max(15, "password cannot be more than 15 characters.")
    .matches(
      pattern,
      "Must contain upper case, lower case, numeric, and special character."
    ),
  confirm_password: Yup.string()
    .required("please confirm your new password.")
    .oneOf([Yup.ref("password"), null], "passwords must match."),
});
