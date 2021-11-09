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
    <Grid item xs={11} className={classes.root}>
      <Card className={classes.card}>
        <img src={samplePhoto} alt="sample photo" className={classes.media} />
        <CardContent className={classes.content}>
          <Typography variant="h1" color="textSecondary" component="p">
            This is a sample title
          </Typography>

          <Typography variant="h2" color="textSecondary" component="p">
            price : 20,000
          </Typography>
          <IconButton aria-label="settings" className={classes.iconBTN}>
            <DeleteIcon />
          </IconButton>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CartProductCard;
