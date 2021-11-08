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
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: { padding: "10px 15px" },
  card: {
    width: "100%",
  },
  media: {
    height: 0,
    paddingTop: "100%", // 16:9
  },

  avatar: {
    backgroundColor: red[500],
  },
});
function ProductCard() {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <AddShoppingCartIcon />
            </IconButton>
          }
          title="Sample title"
        />
        <CardMedia
          className={classes.media}
          image={samplePhoto}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body1" color="textSecondary" component="p">
            This is a sample discription of a product
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            price : 20,000
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ProductCard;
