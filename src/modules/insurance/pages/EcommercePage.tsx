/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "modules/sightseeing/components/Gridcontainer";
import GridItem from "modules/sightseeing/components/GridItem";
import Parallax from "modules/sightseeing/components/parallax";


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Theme, StyledProps } from "@material-ui/core";

import Teststyle from "../style";

import styles from "modules/sightseeing/assets/jss/ecommerce/ecommerceStyle";

const useStyles = makeStyles<Theme, StyledProps>(styles as any);
// makeStyles<Theme, StyledProps>(headerstyles as any);

export default function EcommercePage() {
  const classes = useStyles({} as StyledProps);
  //   const classes = useStyles();
  return (
    <div>
      <Teststyle>
        <Parallax
          image={require("../assets/img/clark-street-merc.jpg")}
          filter="dark"
          small
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem
                md={8}
                sm={8}
                className={classNames(
                  classes.mlAuto,
                  classes.mrAuto,
                  classes.textCenter
                )}
              >
                <div className={classes.brand}>
                  <h1 className={classes.title}>Ecommerce Page!</h1>
                  <h4>
                    Free global delivery for all products. Use coupon{" "}
                    <b>25summer</b> for an extra 25% Off
                  </h4>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
    
        </div>
      </Teststyle>
    </div>
  );
}
