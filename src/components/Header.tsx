import { FC } from "react";
import IconButton from "@material-ui/core/IconButton";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import useStyles from "./Header.styles";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
export const Header: FC = () => {
  const classes = useStyles();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={classes.root}
      style={{ backgroundColor: theme === "dark" ? "#282828" : "#e9e9e9" }}
    >
      <Grid container className={classes.container}>
        <Grid className={classes.leftNav}>
          <Link to="/cart">
            <IconButton aria-label="settings" className={classes.cartIconBTN}>
              <ShoppingCartOutlinedIcon className={classes.cartIcon} />
            </IconButton>
          </Link>
          <Grid className={classes.changeThemeContainer}>
            <IconButton
              onClick={() => toggleTheme()}
              disableRipple={false}
              className={classes.sunIconBTN}
            >
              {theme === "dark" ? (
                <WbSunnyIcon className={classes.sunIcon} />
              ) : (
                <Brightness3Icon className={classes.moonIcon} />
              )}
            </IconButton>
          </Grid>
        </Grid>
        <Link to="/" className={classes.logo}>
          <Typography variant="h2" className={classes.logo}>
            Sample Logo
          </Typography>
        </Link>
        {localStorage.getItem("token") ? (
          <Grid>
            <Link to="/profile" className={classes.profilelink}>
              <Typography className={classes.usersname} variant="body2">
                user's name goes here
              </Typography>
              <AccountCircleRoundedIcon className={classes.avatarIcon} />
            </Link>
          </Grid>
        ) : (
          <Grid className={classes.rightNav}>
            <Link to={"/signUp"} className={classes.profilelink}>
              <Typography className={classes.usersname} variant="body2">
                Sign Up
              </Typography>
            </Link>
            <b style={{ marginRight: 10 }}>/</b>
            <Link to={"/login"} className={classes.profilelink}>
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
