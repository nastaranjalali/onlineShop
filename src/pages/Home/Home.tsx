import { FC } from "react";
import { Header } from "../../components/Header";
import { Grid } from "@material-ui/core";
import useStyles from "./Home.styles";
import Products from "../Products/Products";

const Home: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Grid style={{ position: "relative", width: "90%" }}>
        {/* <Cart /> */}
        <Products />
      </Grid>

      {/*<SignUp />*/}
      {/* <Login /> */}
    </div>
  );
};

export default Home;