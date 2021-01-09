import React from "react";
// nodejs library to set properties for components

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Theme, StyledProps } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto",
  },
};

const useStyles = makeStyles<Theme, StyledProps>(styles as any);

type Props = {
  children?: any;
  className?: string;
};

export default function GridContainer(props: Props) {
  const { children, className, ...rest } = props;
  const classes = useStyles({} as StyledProps);
  return (
    <Grid container {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}
