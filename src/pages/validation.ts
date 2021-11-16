import * as yup from "yup";
export const schema = yup.object().shape({
  name: yup
    .string()
    .required("This field is required")
    .min(3, "your name must be more than 2 characters"),
  username: yup
    .string()
    .required("This field is required")
    .matches(
      /^[a-zA-Z0-9_\\.\\-]*$/,
      "username must contain only a-z 0-9 _ - ."
    ),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
      "your password is weak, password must contain a-z A-Z 0-9 and special characters"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
