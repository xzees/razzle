import React from "react";
import styled from 'styled-components';
import Container from "common/src/components/UI/Container";
import { Grid } from "@material-ui/core";
import Heading from 'common/src/components/Heading';
import Boxs from "@material-ui/core/Box";
import Text from "common/src/components/Text";
import { AppImageResponsive } from 'common/components';
import ImageManager from "common/Manager/ImageManager";

const Planets = () => {
  const [hasError, setErrors] = React.useState(false);
  const [planets, setPlanets] = React.useState<any>();

  async function fetchData() {
    const res = await fetch("https://www.thaitravelcenter.com/tour-api/module/testmain.php");
    res.json()
      .then(res => setPlanets(res.data))
      .catch(err => setErrors(err));
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <DetailBox>
        <Container >
          <Boxs pt={6} pb={6}>
            <Grid container spacing={3} >
              <Grid item xs={12}>
                <Heading {...TextBannerh1} content={planets?.h1} />
              </Grid>
              <Grid item xs={12}>
                <Heading {...TextBannerh2} content={planets?.h2} />
              </Grid>
              <Grid item xs={12}>
                <Heading {...TextBannerh3} content={planets?.h3} />
              </Grid>
              <Grid item xs={12}>
                <Text {...TextBannerh3Sarabun} content={planets?.h3Sarabun} />
              </Grid>
              <Grid item xs={12}>
                <AppImageResponsive src={ImageManager.default.images.common.BGCONTENT} />
              </Grid>
              <Grid item xs={12}>
                <Heading {...TextBannerh1Roboto} content={planets?.h1Roboto} />
              </Grid>
              <Grid item xs={12}>
                <Heading {...TextBannerh2Roboto} content={planets?.h2Roboto} />
              </Grid>
              <Grid item xs={12}>
                <Heading  {...TextBannerh3Roboto} content={planets?.h3Roboto} />
              </Grid>
              <Grid item xs={12}>
                <Text {...TextBannerTextRoboto} content={planets?.h4Roboto} />
              </Grid>
            </Grid>
          </Boxs>
        </Container>
      </DetailBox>
    </>
  );
};

const DetailBox = styled.div`
  background-color: #d9deea;
`
const TextBannerh1 = {
  fontFamily: "DBHeaventRoundedv32",
  fontWeight: "Meduim",
  as: 'h1',
  color: '#000',
  fontSize: ['30px', '30px', '30px', '40px', '50px'],
  lineHeight: "30px"
}
const TextBannerh2 = {
  fontFamily: "DBHeaventRoundedv32",
  fontWeight: "normal",
  as: 'h2',
  color: '#000',
  fontSize: ['26px', '26px', '26px', '32px', '40px'],
  lineHeight: "30px"
}
const TextBannerh3 = {
  fontFamily: "DBHeaventRoundedv32",
  fontWeight: "normal",
  as: 'h3',
  color: '#000',
  fontSize: ['23px', '23px', '23px', '28px', '30px'],
  lineHeight: "30px"
}
const TextBannerh1Roboto = {
  fontFamily: "Roboto",
  fontWeight: "Meduim",
  as: 'h1',
  color: '#000',
  fontSize: ['22px', '22px', '22px', '30px', '40px'],
  lineHeight: "22px"
}
const TextBannerh2Roboto = {
  fontFamily: "Roboto",
  fontWeight: "unset",
  as: 'h2',
  color: '#000',
  fontSize: ['20px', '20px', '20px', '22px', '29px'],
  lineHeight: "22px"
}
const TextBannerh3Roboto = {
  fontFamily: "Roboto",
  fontWeight: "unset",
  as: 'h3',
  color: '#000',
  fontSize: ['18px', '18px', '18px', '18px', '20px'],
  lineHeight: "22px"
}
const TextBannerTextRoboto = {
  fontFamily: "Roboto",
  fontWeight: "unset",
  textAlign: "left"
}
const TextBannerh3Sarabun = {
  fontFamily: "Sarabun",
  fontWeight: "normal",
  textAlign: "left"
}
export default Planets;