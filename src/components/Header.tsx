import React, { FC } from "react";
import IconButton from "@material-ui/core/IconButton";
import { Grid, Link, Typography } from "@material-ui/core";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import useStyles from "./Header.styles";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

interface Props {
  toggle: any;
}
export const Header: FC<Props> = ({ toggle }) => {
  const classes = useStyles();
  const themeMode = localStorage.getItem("mode");
  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid className={classes.leftNav}>
          <IconButton aria-label="settings" className={classes.cartIconBTN}>
            <ShoppingCartOutlinedIcon className={classes.cartIcon} />
          </IconButton>
          <Grid className={classes.changeThemeContainer}>
            <IconButton
              onClick={() => toggle("light")}
              disableRipple={false}
              className={[
                classes.sunIconBTN,
                themeMode === "light" ? "" : classes.notActiveSun,
              ].join(" ")}
              disabled={themeMode === "light" ? true : false}
            >
              <WbSunnyIcon className={classes.sunIcon} />
            </IconButton>
            <IconButton
              onClick={() => toggle("dark")}
              disableRipple={false}
              className={[
                classes.moonIconBTN,
                themeMode === "dark" ? "" : classes.notActiveMoon,
              ].join(" ")}
              disabled={themeMode === "dark" ? true : false}
            >
              <Brightness3Icon className={classes.moonIcon} />
            </IconButton>
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
            <Link underline="none" href="#" className={classes.profilelink}>
              <Typography className={classes.usersname} variant="body2">
                Sign Up
              </Typography>
            </Link>
            <b style={{ marginRight: 10 }}>/</b>
            <Link underline="none" href="#" className={classes.profilelink}>
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
