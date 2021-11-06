import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import samplePhoto from "../assets/samplePhoto.jpg";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "90.25%", // 16:9
  },

  avatar: {
    backgroundColor: red[500],
  },
});
function ProductCard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <AddShoppingCartIcon />
            </IconButton>
          }
          title="Sample title"
          subheader="Subheader"
        />
        <CardMedia
          className={classes.media}
          image={samplePhoto}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This is a sample discription of a product
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            20,000
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductCard;
