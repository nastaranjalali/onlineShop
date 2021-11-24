import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Grid, IconButton } from "@material-ui/core";
import { FC, useContext } from "react";
import useStyles from "./ProductCard.styles";
import { ThemeContext } from "../contexts/ThemeContext";

interface Props {
  title: string;
  img: string;
  price: Number;
  addFunc: (name: string, quantity: Number) => void;
}
const ProductCard: FC<Props> = ({ title, img, price, addFunc }) => {
  const classes = useStyles();
  const { theme } = useContext(ThemeContext);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.root}>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={img} />
        <CardContent className={classes.content}>
          <IconButton
            aria-label="settings"
            className={classes.iconBTN}
            style={{ backgroundColor: theme === "dark" ? "#424242" : "#fff" }}
            onClick={() => {
              addFunc(title, 1);
            }}
          >
            <AddShoppingCartIcon />
          </IconButton>
          <Typography variant="h2" color="textSecondary" component="p">
            {title}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            price : {price} $
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductCard;
