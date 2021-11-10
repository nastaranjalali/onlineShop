import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import samplePhoto from "../assets/samplePhoto.jpg";
import { Grid, IconButton } from "@material-ui/core";
import { FC } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./CartProductCard.styles";
import { useTheme } from "../contexts/ThemeContext";
// interface Props {
//   // title: string;
//   // img: string;
//   // price: Number;
// }
const CartProductCard: FC = () => {
  const classes = useStyles();
  const { darkTheme } = useTheme();

  return (
    <Grid item xs={11} className={classes.root}>
      <Card className={classes.card}>
        <img src={samplePhoto} alt="sample" className={classes.media} />
        <CardContent className={classes.content}>
          <Typography variant="h1" color="textSecondary" component="p">
            This is a sample title
          </Typography>

          <Typography variant="h2" color="textSecondary" component="p">
            price : 20,000
          </Typography>
          <IconButton
            aria-label="settings"
            className={classes.iconBTN}
            style={{
              backgroundColor: darkTheme ? "#424242" : "#fff",
              boxShadow: darkTheme ? "" : "1px 0 0 #ddd",
            }}
          >
            <DeleteIcon />
          </IconButton>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CartProductCard;
