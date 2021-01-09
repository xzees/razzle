import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Theme, StyledProps } from "@material-ui/core";
// core components
import styles from "modules/sightseeing/assets/jss/components/parallax";

const useStyles = makeStyles<Theme, StyledProps>(styles as any);

type Props = {
  className?: any;
  filter?: any;
  children?: any;
  style?: any;
  image?: string;
  small?: boolean;
};

export default function Parallax(props: Props) {
 
  const { filter, className, children, style, image, small } = props;
  const classes = useStyles({} as StyledProps);
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes[filter + "Color"]]: filter !== undefined,
    [classes.small]: small,
    [className]: className !== undefined,
  });
  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: "url(" + image + ")",
      }}
    >
      {children}
    </div>
  );
}
