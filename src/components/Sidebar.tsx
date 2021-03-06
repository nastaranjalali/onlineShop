import { Button, Grid } from "@material-ui/core";
import { FC } from "react";
import useStyles from "./Sidebar.styles";
import { Formik, Form, Field } from "formik";
import { schema } from "../pages/validation";
import Select from "react-select";
import { useTheme } from "../contexts/ThemeContext";
import { darkTheme } from "../theme/theme";

interface Login {
  username: string;
  password: string;
}

const initialValues: Login = {
  username: "",
  password: "",
};

const Sidebar: FC = () => {
  const { darkTheme: isDarkThemeEnabled } = useTheme();

  //   const customStyles = {
  //     option: (provided: any, state: { isSelected: any }) => ({
  //       ...provided,
  //       borderBottom: "1px dotted pink",
  //       color: state.isSelected ? "red" : "blue",
  //       padding: 20,
  //     }),
  //     control: () => ({
  //       // none of react-select's styles are passed to <Control />
  //       width: 200,
  //     }),
  //     singleValue: (provided: any, state: { isDisabled: any }) => {
  //       const opacity = state.isDisabled ? 0.5 : 1;
  //       const transition = "opacity 300ms";

  //       return { ...provided, opacity, transition };
  //     },
  //   };
  const classes = useStyles();
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <Grid item xs={12} className={classes.root}>
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
              <Form
                style={{
                  width: "100%",
                }}
              >
                <Grid
                  item
                  xs={12}
                  className={classes.formContainer}
                  style={{
                    backgroundColor: isDarkThemeEnabled
                      ? "transparent"
                      : "#07b377",
                  }}
                >
                  <Field
                    className={classes.field}
                    type="email"
                    name="email"
                    placeholder="Enter your Email ... "
                  />
                  <Field
                    className={classes.field}
                    type="text"
                    name="address"
                    placeholder="Enter your address ..."
                  />
                  <Select
                    options={options}
                    className={classes.select}
                    placeholder={"choose delivery method ..."}
                  />
                  <Select
                    // styles={customStyles}
                    options={options}
                    className={classes.select}
                    placeholder={"choose paying method ..."}
                  />

                  <Button type="submit" className={classes.signUpBTN}>
                    checkOut(239$)
                  </Button>
                </Grid>
              </Form>
            </Grid>
          );
        }}
      </Formik>{" "}
    </Grid>
  );
};

export default Sidebar;
