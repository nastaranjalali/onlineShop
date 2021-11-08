import * as yup from "yup";
export const schema = yup.object().shape({
  name: yup.string().required("This field is required"),
  username: yup.string().required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
