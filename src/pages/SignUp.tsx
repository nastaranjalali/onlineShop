import useStyles from "./SignUp.styles";
import { FC } from "react";
import { Formik, Form, Field } from "formik";
import { Button, Grid, Typography } from "@material-ui/core";
import { schema } from "./validation";
import { Link } from "react-router-dom";
interface SignUp {
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const initialValues: SignUp = {
  name: "",
  username: "",
  password: "",
  confirmPassword: "",
};

interface Props {}
const SignUp: FC<Props> = () => {
  const classes = useStyles();
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log({ values });
        }}
      >
        {({ errors, touched, handleBlur, values, setFieldValue }) => {
          return (
            <Grid className={classes.root}>
              <Form>
                <Grid className={classes.formContainer}>
                  <Field
                    className={classes.field}
                    type="text"
                    name="name"
                    placeholder="Enter your name ..."
                  />
                  {/*helperText ? (
        <span
          className={classes.helperText}
          style={{ color: error ? '#D41518' : '#444' }}>
          {helperText}
        </span>
                  ) : null*/}
                  <Field
                    className={classes.field}
                    type="text"
                    name="username"
                    placeholder="Enter your username ... "
                  />
                  <Field
                    className={classes.field}
                    type="password"
                    name="password"
                    placeholder="Enter your password ..."
                  />
                  <Field
                    className={classes.field}
                    type="password"
                    name="password"
                    placeholder="confirm password ..."
                  />
                  <Button type="submit" className={classes.signUpBTN}>
                    Sign Up
                  </Button>
                  <Typography variant="body2" className={classes.noAccount}>
                    already have an account?&nbsp;&nbsp;&nbsp;
                    <Link to="/login" className={classes.signUp}>
                      login
                    </Link>
                  </Typography>
                </Grid>
              </Form>
            </Grid>
          );
        }}
      </Formik>
    </>
  );
};

export default SignUp;
