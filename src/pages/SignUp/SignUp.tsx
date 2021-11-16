import useStyles from "./SignUp.styles";
import { FC } from "react";
import { Formik, Form, Field } from "formik";
import { Button, Grid, Typography } from "@material-ui/core";
import { schema } from "../validation";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
interface Signup {
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const initialValues: Signup = {
  name: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const SignUp: FC = () => {
  const classes = useStyles();
  const { login, setfullName } = useContext(AuthContext);
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          let status: Number;
          fetch("http://localhost:3001/auth/signUp", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fullName: values.name,
              username: values.username,
              password: values.password,
            }),
          })
            .then((response) => {
              console.log(response);

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
                      name="name"
                      placeholder="Enter your name ..."
                      label={"Name"}
                      onBlur={handleBlur}
                      value={values.name}
                      onChange={(e: any) =>
                        setFieldValue("name", e.currentTarget.value)
                      }
                    />
                    {touched.name && errors.name ? (
                      <Typography
                        variant="body2"
                        className={classes.helpertext}
                        style={{ color: errors.name ? "#B00020" : "#444" }}
                      >
                        {errors.name}
                      </Typography>
                    ) : (
                      <Typography className={classes.helpertext}></Typography>
                    )}
                  </Grid>

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
                      <Typography className={classes.helpertext}></Typography>
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
                      <Typography className={classes.helpertext}></Typography>
                    )}
                  </Grid>
                  <Grid className={classes.fieldContainer}>
                    <Field
                      className={classes.field}
                      type="password"
                      name="confirmPassword"
                      placeholder="confirm password ..."
                      label={"ConfirmPassword"}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                      onChange={(e: any) =>
                        setFieldValue("confirmPassword", e.currentTarget.value)
                      }
                    />
                    {touched.confirmPassword && errors.confirmPassword ? (
                      <Typography
                        variant="body2"
                        className={classes.helpertext}
                        style={{
                          color: errors.confirmPassword ? "#B00020" : "#444",
                        }}
                      >
                        {errors.confirmPassword}
                      </Typography>
                    ) : (
                      <Typography className={classes.helpertext}></Typography>
                    )}
                  </Grid>

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
