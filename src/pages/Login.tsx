import useStyles from "./Login.styles";
import { FC } from "react";
import { Formik, Form, Field } from "formik";
import { Button, Grid } from "@material-ui/core";
import { schema } from "./validation";
interface Login {
  username: string;
  password: string;
}

const initialValues: Login = {
  username: "",
  password: "",
};

interface Props {}
const Login: FC<Props> = () => {
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
                    name="username"
                    placeholder="Enter your username ... "
                  />
                  <Field
                    className={classes.field}
                    type="password"
                    name="password"
                    placeholder="Enter your password ..."
                  />

                  <Button type="submit" className={classes.signUpBTN}>
                    Login
                  </Button>
                </Grid>
              </Form>
            </Grid>
          );
        }}
      </Formik>
    </>
  );
};

export default Login;
