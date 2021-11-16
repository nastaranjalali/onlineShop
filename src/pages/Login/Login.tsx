import useStyles from "./Login.styles";
import { FC, useContext, useState } from "react";
import { Formik, Form, Field } from "formik";
import { Button, Grid, Typography } from "@material-ui/core";
import { LoginSchema } from "../validation";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

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
  const { login, setfullName } = useContext(AuthContext);
  const [serverErrors, setServerErrors] = useState<string | null>("");

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
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
              if (status === 409) {
                setServerErrors(responseJson.errors[0].errorText);
                console.log(responseJson.errors[0].errorText);
              } else if (status === 200) {
                login(responseJson.token);
                setfullName(responseJson.fullName);
                console.log(responseJson);
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
                      label={"Username"}
                      onBlur={handleBlur}
                      value={values.username}
                      onChange={(e: any) =>
                        setFieldValue("username", e.currentTarget.value)
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
                      <Typography
                        variant="body2"
                        className={classes.helpertext}
                        style={{ color: "#B00020" }}
                      >
                        {serverErrors}
                      </Typography>
                    )}
                  </Grid>
                  <Grid className={classes.fieldContainer}>
                    <Field
                      className={classes.field}
                      type="password"
                      name="password"
                      placeholder="Enter your password ..."
                      label={"Password"}
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={(e: any) =>
                        setFieldValue("password", e.currentTarget.value)
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
                      <Typography
                        variant="body2"
                        className={classes.helpertext}
                        style={{ color: "#B00020" }}
                      >
                        {serverErrors}
                      </Typography>
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
