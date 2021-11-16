import useStyles from "./Login.styles";
import { FC } from "react";
import { Formik, Form, Field } from "formik";
import { Button, Grid, Typography } from "@material-ui/core";
import { schema } from "../validation";
import { Link } from "react-router-dom";
interface LogIn {
  username: string;
  password: string;
}

const initialValues: LogIn = {
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
          let status: Number;
          fetch("http://localhost:3001/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: values.username,
              password: values.password,
            }),
          })
            .then((response) => {
              status = response.status;
              return response.json();
            })
            .then((responseJson) => {
              if (status === 400) {
                responseJson.errors.forEach((error: { key: string }) => {
                  if (error.key === "fullName") {
                  } else if (error.key === "username") {
                  } else if (error.key === "password") {
                  }
                });
              } else if (status === 409) {
              } else if (status === 201) {
              }
            });
          console.log({ values });
        }}
      >
        {({ errors, touched, handleBlur, values, setFieldValue }) => {
          return (
            <Grid className={classes.root}>
              <Form>
                <Grid className={classes.formContainer}>
                  <Grid className={classes.fieldContainer}>
                    <Field
                      className={classes.field}
                      type="text"
                      name="username"
                      placeholder="Enter your username ... "
                      label={"Name"}
                      onBlur={handleBlur}
                      value={values.username}
                      onChange={(e: any) =>
                        setFieldValue("name", e.currentTarget.value)
                      }
                    />
                    {touched.username && errors.username ? (
                      <Typography
                        variant="body2"
                        className={classes.helpertext}
                        style={{ color: errors.username ? "#B00020" : "#444" }}
                      >
                        {errors.username}
                      </Typography>
                    ) : (
                      <Typography className={classes.helpertext}></Typography>
                    )}
                  </Grid>
                  <Grid className={classes.fieldContainer}>
                    <Field
                      className={classes.field}
                      type="password"
                      name="password"
                      placeholder="Enter your password ..."
                      label={"Name"}
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={(e: any) =>
                        setFieldValue("name", e.currentTarget.value)
                      }
                    />
                    {touched.password && errors.password ? (
                      <Typography
                        variant="body2"
                        className={classes.helpertext}
                        style={{ color: errors.password ? "#B00020" : "#444" }}
                      >
                        {errors.password}
                      </Typography>
                    ) : (
                      <Typography className={classes.helpertext}></Typography>
                    )}
                  </Grid>

                  <Button type="submit" className={classes.loginBTN}>
                    Login
                  </Button>
                  <Typography variant="body2" className={classes.noAccount}>
                    you don't have an account?&nbsp;&nbsp;&nbsp;
                    <Link to="/signup" className={classes.signUp}>
                      create one
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

export default Login;
