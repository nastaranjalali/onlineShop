import useStyles from "./Cart.styles";
import { FC } from "react";
import { Grid } from "@material-ui/core";
import CartProductCard from "../components/CartProductCard";
import Sidebar from "../components/Sidebar";
import samplePhoto from "../assets/samplePhoto.jpg";

interface Props {}
const Cart: FC<Props> = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.productContainer} xs={12} md={8}>
        <CartProductCard title="sample Title" price={20000} img={samplePhoto} />
        <CartProductCard title="sample Title" price={20000} img={samplePhoto} />
        <CartProductCard title="sample Title" price={20000} img={samplePhoto} />
        <CartProductCard title="sample Title" price={20000} img={samplePhoto} />
        <CartProductCard title="sample Title" price={20000} img={samplePhoto} />
        <CartProductCard title="sample Title" price={20000} img={samplePhoto} />
        <CartProductCard title="sample Title" price={20000} img={samplePhoto} />
        <CartProductCard title="sample Title" price={20000} img={samplePhoto} />
        <CartProductCard title="sample Title" price={20000} img={samplePhoto} />
      </Grid>
      <Grid item className={classes.sidebarContainer} xs={12} md={4}>
        <Sidebar />
      </Grid>
    </Grid>
  );
};

export default Cart;
