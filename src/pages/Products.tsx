import useStyles from "./Products.styles";
import { FC } from "react";
import { Grid } from "@material-ui/core";
import ProductCard from "../components/ProductCard";
import samplePhoto from "../assets/samplePhoto.jpg";

interface Props {}
const Products: FC<Props> = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid container className={classes.productContainer}>
        <ProductCard title="sample Title" price={23000} img={samplePhoto} />
        <ProductCard title="sample Title" price={20000} img={samplePhoto} />
        <ProductCard title="sample Title" price={20000} img={samplePhoto} />
        <ProductCard title="sample Title" price={20000} img={samplePhoto} />
        <ProductCard title="sample Title" price={20000} img={samplePhoto} />
        <ProductCard title="sample Title" price={20000} img={samplePhoto} />
        <ProductCard title="sample Title" price={20000} img={samplePhoto} />
        <ProductCard title="sample Title" price={20000} img={samplePhoto} />
        <ProductCard title="sample Title" price={20000} img={samplePhoto} />
        <ProductCard title="sample Title" price={20000} img={samplePhoto} />
      </Grid>
    </Grid>
  );
};

export default Products;
