import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { FC, useState } from "react";
import useStyles from "./IncrementDecrementButton.styles";
interface Props {
  initialValue: number;
}
export const IncrementDecrementButton: FC<Props> = ({ initialValue }) => {
  const classes = useStyles();
  const [counter, setCounter] = useState(initialValue);
  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    if (counter < 0) {
      setCounter(counter - 1);
    } else {
      return;
    }
  };

  return (
    <ButtonGroup className={classes.root} size="small" orientation="vertical">
      <Button className={classes.button} onClick={() => increase()}>
        <Typography variant="body2" className={classes.buttonT}>
          +
        </Typography>
      </Button>
      <Typography variant="h2">{counter}</Typography>
      <Button className={classes.button} onClick={() => decrease()}>
        <Typography variant="body2" className={classes.buttonT}>
          -
        </Typography>
      </Button>
    </ButtonGroup>
  );
};

export default IncrementDecrementButton;
