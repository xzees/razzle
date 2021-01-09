import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "modules/sightseeing/components/Gridcontainer";
import GridItem from "modules/sightseeing/components/GridItem";
import Card from "modules/sightseeing/components/Card";
import CardHeader from "modules/sightseeing/components/CardHeader";
import CardBody from "modules/sightseeing/components/CardBody";
import CardFooter from "modules/sightseeing/components/CardFooter";
import Button from "modules/sightseeing/components/Button";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "modules/sightseeing/assets/jss/ecommerce/latestOffersStyle";

import gucci from "modules/sightseeing/assets/img/gucci.jpg";
import tomFord from "modules/sightseeing/assets/img/tom-ford.jpg";
import dolce from "modules/sightseeing/assets/img/dolce.jpg";

const useStyles = makeStyles(styles);

export default function SectionLatestOffers() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Latest Offers</h2>
        <GridContainer>
          <GridItem md={4} sm={4}>
            <Card product plain>
              <CardHeader image plain>
                <a href="#pablo">
                  <img src={gucci} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{ backgroundImage: `url(${gucci})`, opacity: 1 }}
                />
              </CardHeader>
              <CardBody className={classes.textCenter} plain>
                <h4 className={classes.cardTitle}>Gucci</h4>
                <p className={classes.cardDescription}>
                  The structured shoulders and sleek detailing ensure a sharp
                  silhouette. Team it with a silk pocket square and leather
                  loafers.
                </p>
              </CardBody>
              <CardFooter plain>
                <div className={classes.priceContainer}>
                  <span className={classNames(classes.price, classes.priceOld)}>
                    {" "}
                    €1,430
                  </span>
                  <span className={classNames(classes.price, classes.priceNew)}>
                    {" "}
                    €743
                  </span>
                </div>
                <div className={classNames(classes.stats, classes.mlAuto)}>
                  <Tooltip
                    id="tooltip-top"
                    title="Saved to Wishlist"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button justIcon simple color="rose">
                      <Favorite />
                    </Button>
                  </Tooltip>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card product plain>
              <CardHeader image plain>
                <a href="#pablo">
                  <img src={dolce} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{ backgroundImage: `url(${dolce})`, opacity: 1 }}
                />
              </CardHeader>
              <CardBody className={classes.textCenter} plain>
                <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                <p className={classes.cardDescription}>
                  The structured shoulders and sleek detailing ensure a sharp
                  silhouette. Team it with a silk pocket square and leather
                  loafers.
                </p>
              </CardBody>
              <CardFooter plain>
                <div className={classes.priceContainer}>
                  <span className={classNames(classes.price, classes.priceOld)}>
                    {" "}
                    €1,430
                  </span>
                  <span className={classNames(classes.price, classes.priceNew)}>
                    {" "}
                    €743
                  </span>
                </div>
                <div className={classNames(classes.stats, classes.mlAuto)}>
                  <Tooltip
                    id="tooltip-top"
                    title="Saved to Wishlist"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button justIcon simple color="rose">
                      <Favorite />
                    </Button>
                  </Tooltip>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card product plain>
              <CardHeader image plain>
                <a href="#pablo">
                  <img src={tomFord} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{ backgroundImage: `url(${tomFord})`, opacity: 1 }}
                />
              </CardHeader>
              <CardBody className={classes.textCenter} plain>
                <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                <p className={classes.cardDescription}>
                  The structured shoulders and sleek detailing ensure a sharp
                  silhouette. Team it with a silk pocket square and leather
                  loafers.
                </p>
              </CardBody>
              <CardFooter plain>
                <div className={classes.priceContainer}>
                  <span className={classNames(classes.price, classes.priceOld)}>
                    {" "}
                    €1,430
                  </span>
                  <span className={classNames(classes.price, classes.priceNew)}>
                    {" "}
                    €743
                  </span>
                </div>
                <div className={classNames(classes.stats, classes.mlAuto)}>
                  <Tooltip
                    id="tooltip-top"
                    title="Saved to Wishlist"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button justIcon simple color="rose">
                      <Favorite />
                    </Button>
                  </Tooltip>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
