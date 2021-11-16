import useStyles from "./Products.styles";
import { FC } from "react";
import { Grid } from "@material-ui/core";
import ProductCard from "../../components/ProductCard";
import samplePhoto from "../../assets/samplePhoto.jpg";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import { Link } from "react-router-dom";
import { MemoryRouter, Route } from "react-router";
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
        <ProductCard title="sample Title" price={20000} img={samplePhoto} />
        <ProductCard title="sample Title" price={20000} img={samplePhoto} />
      </Grid>{" "}
      <MemoryRouter initialEntries={["/inbox"]} initialIndex={0}>
        <Route>
          {({ location }) => {
            const query = new URLSearchParams(location.search);
            const page = parseInt(query.get("page") || "1", 10);
            return (
              <Pagination
                className={classes.pagination}
                page={page}
                count={10}
                color="primary"
                renderItem={(item) => (
                  <PaginationItem
                    component={Link}
                    to={`/inbox${item.page === 1 ? "" : `?page=${item.page}`}`}
                    {...item}
                  />
                )}
              />
            );
          }}
        </Route>
      </MemoryRouter>
    </Grid>
  );
};

export default Products;
