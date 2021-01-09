import React from "react";
import Box from "common/src/components/Box";
import Text from "common/src/components/Text";
import Heading from "common/src/components/Heading";

import Container from "common/src/components/UI/Container";
import FeatureSectionWrapper from "./BoxStyle";

import GridContainer from "modules/sightseeing/components/Gridcontainer";
import GridItem from "modules/sightseeing/components/GridItem";
import Card from "modules/sightseeing/components/Card";
import Badge from "modules/sightseeing/components/Badge";

import CardBody from "modules/sightseeing/components/CardBody";

import { makeStyles } from "@material-ui/core/styles";
import { Theme, StyledProps } from "@material-ui/core";
import profilePageStyle from "modules/sightseeing/components/BoxPageStyle";

import BKK from "modules/sightseeing/assets/img/P1.jpg";
import HHQ from "modules/sightseeing/assets/img/P2.jpg";
import HKT from "modules/sightseeing/assets/img/P3.jpg";
import KBV from "modules/sightseeing/assets/img/P4.jpg";
import LPT from "modules/sightseeing/assets/img/P5.jpg";
import XT5 from "modules/sightseeing/assets/img/P6.jpg";
import TDX from "modules/sightseeing/assets/img/P7.jpg";
import TH5 from "modules/sightseeing/assets/img/P8.jpg";
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";

// const useStyles = makeStyles(profilePageStyle);
const useStyles = makeStyles<Theme, StyledProps>(profilePageStyle as any);

const defaultprops = {
  sectionHeader: {
    mb: ["40px", "56px"],
  },
  // sub section default style
  sectionSubTitle: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "20px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#054369",
    mb: "10px",
  },
  // section title default style
  sectionTitle: {
    textAlign: "center",
    fontSize: "26px",
    fontWeight: "400",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0",
  },
};

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        borderRadius: 10,
        background: "gray",
        opacity: 1,
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  initialSlide: 0,
  rows: 2,
  lazyload: "ondemand",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SampleNextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        initialSlide: 1,
        fade: true,
        arrows: false,
      },
    },
  ],
};

const FeatureSection = () => {
  const { sectionHeader, sectionTitle, sectionSubTitle } = defaultprops;
  const classes = useStyles({} as StyledProps);

  return (
    <FeatureSectionWrapper id="featureSection">
      <Container>
        <Box {...sectionHeader}>
          <Heading content="Top Destination" {...sectionTitle} />
          <Text
            content="ค้นหาทัวร์, แหล่งท่องเที่ยว และกิจกรรมต่าง ๆ สำหรับการผจญภัยครั้งต่อไปของคุณ"
            {...sectionSubTitle}
          />
        </Box>
        <LazyLoadImage
          className={classes.img}
          alt="...."
          effect="blur"
          src={HHQ}
        />
        ;
        <Slider {...settings}>
          <GridItem>
            <Card
              background
              style={{
                backgroundImage: "url(" + BKK + ")",
              }}
            >
              <CardBody background className={classes.cardBody}>
                <Badge color="warning" className={classes.badge}>
                  BKK
                </Badge>
                <a href="#pablo">
                  <h2 className={classes.cardTitleWhite}>Bangkok</h2>
                </a>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card
              background
              style={{
                backgroundImage: "url(" + HHQ + ")",
              }}
            >
              <CardBody background className={classes.cardBody}>
                <Badge color="info" className={classes.badge}>
                  HHQ
                </Badge>
                <a href="#pablo">
                  <h2 className={classes.cardTitleWhite}>
                    Hua Hin-Cha Am-Pranburi
                  </h2>
                </a>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card
              background
              style={{
                backgroundImage: "url(" + HKT + ")",
              }}
            >
              <CardBody background className={classes.cardBody}>
                <Badge color="danger" className={classes.badge}>
                  HKT
                </Badge>
                <a href="#pablo">
                  <h2 className={classes.cardTitleWhite}>Phuket</h2>
                </a>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card
              background
              style={{
                backgroundImage: "url(" + KBV + ")",
              }}
            >
              <CardBody background className={classes.cardBody}>
                <Badge color="success" className={classes.badge}>
                  KBV
                </Badge>
                <a href="#pablo">
                  <h2 className={classes.cardTitleWhite}>Krabi</h2>
                </a>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card
              background
              style={{
                backgroundImage: "url(" + TH5 + ")",
              }}
            >
              <CardBody background className={classes.cardBody}>
                <Badge color="danger" className={classes.badge}>
                  TH5
                </Badge>
                <a href="#pablo">
                  <h2 className={classes.cardTitleWhite}>
                    Khao Lak and Phang Nga
                  </h2>
                </a>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card
              background
              style={{
                backgroundImage: "url(" + TDX + ")",
              }}
            >
              <CardBody background className={classes.cardBody}>
                <Badge color="success" className={classes.badge}>
                  TDX
                </Badge>
                <a href="#pablo">
                  <h2 className={classes.cardTitleWhite}>
                    {`Koh Chang & Koh Kood`}
                  </h2>
                </a>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card
              background
              style={{
                backgroundImage: "url(" + LPT + ")",
              }}
            >
              <CardBody background className={classes.cardBody}>
                <Badge color="danger" className={classes.badge}>
                  LPT
                </Badge>
                <a href="#pablo">
                  <h2 className={classes.cardTitleWhite}>Lampang</h2>
                </a>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card
              background
              style={{
                backgroundImage: "url(" + XT5 + ")",
              }}
            >
              <CardBody background className={classes.cardBody}>
                <Badge color="success" className={classes.badge}>
                  XT5
                </Badge>
                <a href="#pablo">
                  <h2 className={classes.cardTitleWhite}>Samut Songkhram</h2>
                </a>
              </CardBody>
            </Card>
          </GridItem>
        </Slider>
      </Container>
    </FeatureSectionWrapper>
  );
};

export default FeatureSection;
