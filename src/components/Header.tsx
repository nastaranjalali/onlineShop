import React, { FC } from "react";
import IconButton from "@material-ui/core/IconButton";
import { Grid, Link, Typography } from "@material-ui/core";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import useStyles from "./Header.styles";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useTheme } from "../contexts/ThemeContext";

export const Header: FC = () => {
  const classes = useStyles();
  const { darkTheme, toggleTheme } = useTheme();
  console.log({ darkTheme });
  return (
    <div
      className={classes.root}
      style={{ backgroundColor: darkTheme ? "#282828" : "#e9e9e9" }}
    >
      <Grid container className={classes.container}>
        <Grid className={classes.leftNav}>
          <Grid className={classes.logoContainer}>
            <IconButton className={classes.cartIconBTN}>
              <ShoppingCartOutlinedIcon className={classes.cartIcon} />
            </IconButton>
            <Link underline="none">
              <Typography variant="h2" className={classes.logo}>
                SHOPPOING APP
              </Typography>
            </Link>
          </Grid>

          <Grid className={classes.changeThemeContainer}>
            <IconButton
              onClick={() => toggleTheme()}
              className={[
                classes.sunIconBTN,
                !darkTheme ? "" : classes.notActiveSun,
              ].join(" ")}
              // disabled={!darkTheme ? true : false}
            >
              {darkTheme ? (
                <WbSunnyIcon className={classes.sunIcon} />
              ) : (
                <Brightness3Icon className={classes.moonIcon} />
              )}
            </IconButton>
            {/* <IconButton
              onClick={() => toggle("dark")}
              disableRipple={false}
              className={[
                classes.moonIconBTN,
                themeMode === "dark" ? "" : classes.notActiveMoon,
              ].join(" ")}
              disabled={themeMode === "dark" ? true : false}
            >
              <Brightness3Icon className={classes.moonIcon} />
            </IconButton> */}
          </Grid>
        </Grid>
        {localStorage.getItem("token") ? (
          <Grid>
            <Link underline="none" href="#" className={classes.profilelink}>
              <Typography className={classes.usersname} variant="body2">
                user's name goes here
              </Typography>
              <AccountCircleRoundedIcon className={classes.cartIcon} />
            </Link>
          </Grid>
        ) : (
          <Grid className={classes.rightNav}>
            <Link
              underline="none"
              // to={"/profile"}
              className={classes.profilelink}
            >
              <Typography className={classes.usersname} variant="body2">
                Sign Up
              </Typography>
            </Link>
            <b style={{ marginRight: 10 }}>/</b>
            <Link
              underline="none"
              // to={"/login"}
              className={classes.profilelink}
            >
              <Typography className={classes.usersname} variant="body2">
                Login
              </Typography>
            </Link>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Header;
