import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import { Grid, IconButton } from "@material-ui/core";
import { FC } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./CartProductCard.styles";
interface Props {
  title: string;
  img: string;
  price: Number;
}
const CartProductCard: FC<Props> = ({ title, img, price }) => {
  const classes = useStyles();
  return (
    <Grid item xs={11} className={classes.root}>
      <Card className={classes.card}>
        <img src={img} alt="sample" className={classes.media} />
        <CardContent className={classes.content}>
          <Typography variant="h1" color="textSecondary" component="p">
            {title}
          </Typography>

          <Typography variant="h2" color="textSecondary" component="p">
            price : {price}
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
