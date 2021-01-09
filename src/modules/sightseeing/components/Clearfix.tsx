import React from "react";

// mterial-ui components
import { makeStyles } from "@material-ui/core/styles";
import { Theme, StyledProps } from "@material-ui/core";
const styles = {
  clearfix: {
    "&:after,&:before": {
      display: "table",
      content: '" "'
    },
    "&:after": {
      clear: "both"
    }
  }
};


const useStyles = makeStyles<Theme, StyledProps>(styles as any);

export default function Clearfix() {
  const classes = useStyles({} as StyledProps);
  return <div className={classes.clearfix} />;
}
