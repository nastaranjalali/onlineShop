import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import samplePhoto from "../assets/samplePhoto.jpg";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Grid, IconButton } from "@material-ui/core";
import { FC } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./CartProductCard.styles";
interface Props {
  icon: string;
  // title: string;
  // img: string;
  // price: Number;
}
const CartProductCard: FC<Props> = ({ icon }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6} className={classes.root}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={samplePhoto}
          title="Paella dish"
        />
        <CardContent className={classes.content}>
          <IconButton aria-label="settings" className={classes.iconBTN}>
            {icon === "cart" ? <DeleteIcon /> : <AddShoppingCartIcon />}
          </IconButton>
          <Typography variant="h2" color="textSecondary" component="p">
            This is a sample title
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            price : 20,000
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CartProductCard;
