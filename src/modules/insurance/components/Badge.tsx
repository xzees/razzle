import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Theme, StyledProps } from "@material-ui/core";
import styles from "modules/sightseeing/assets/jss/components/badge";

const useStyles = makeStyles<Theme, StyledProps>(styles as any);

type Props = {
  color?: any;
  className: string;
  children?: any;
};

export default function Badge(props: Props) {
  const { color, children, className } = props;
//   const classes = useStyles();
  const classes = useStyles({} as StyledProps);
  const badgeClasses = classNames({
    [classes.badge]: true,
    [classes[color]]: true,
    [className]: className !== undefined,
  });
  return <span className={badgeClasses}>{children}</span>;
}

// Badge.defaultProps = {
//   color: "gray",
// };

