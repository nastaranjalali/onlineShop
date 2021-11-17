import useStyles from "./Products.styles";
import { FC, useEffect, useState } from "react";
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
  const [products, setProducts] = useState([
    {
      name: "dsfsfd",
      price: 10000,
      img: "../../assets/samplePhoto.jpg",
      _id: "ss",
    },
  ]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3001/main/products/get")
      .then((response) => response.json())
      .then((responseJson) => {
        setProducts(responseJson.products);
        setLoading(false);
        console.log(products);
      });
  }, []);
  return (
    <Grid container className={classes.root}>
      <Grid container className={classes.productContainer}>
        {loading ? (
          <span>loading ... </span>
        ) : (
          products.map((product) => {
            // import image from product.img
            return (
              <ProductCard
                key={product._id}
                title={product.name}
                price={product.price}
                img={product.img}
              />
            );
          })
        )}
      </Grid>
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
