import React from "react";
// nodejs library to set properties for components

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Theme, StyledProps } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
type Props = {
  children: any;
  className?: string;
  md?: any;
  sm?: any;
  xs?: any;
};

const styles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    /* flexBasis: "auto" */
  },
};

const useStyles = makeStyles<Theme, StyledProps>(styles as any);
export default function GridItem(props: Props) {
  const { children, className, md, sm, xs } = props;
  const classes = useStyles({} as StyledProps);
  return (
    <Grid
      item
      md={md}
      sm={sm}
      xs={xs}
      className={classes.grid + " " + className}
    >
      {children}
    </Grid>
  );
}
