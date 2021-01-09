import React from "react";
import Container from "common/src/components/UI/Container";
import { Grid } from "@material-ui/core";
import Heading from 'common/src/components/Heading';
import Boxs from "@material-ui/core/Box";
import { AppImage } from "common/components";
import styled from 'styled-components';
import FontManager from 'common/Manager/FontManager';


const Popular = () => {

  return (
    <styles.popTour id="popularTour_sect">
      <Container >
        <Boxs pt={6} pb={6}>
          <Heading {...TextBannerh2} content="ประเทศยอดนิยม" />
          <Grid container spacing={4} >
            <Grid item xs={12} sm={4} md={4}>
              <styles.aTarget href="/collective/japantour">
                <styles.divMain>
                  <styles.divPic>
                    <styles.styleImage src="https://www.thaitravelcenter.com/webdatas/Package/Tour/tour-title-5954.jpg" alt="ทัวร์ญี่ปุ่น" />
                  </styles.divPic>
                  <styles.divMainCaption>
                    <styles.divCaption>
                      <Heading {...TextBannerh6} content="ทัวร์ญี่ปุ่น" />
                    </styles.divCaption>
                  </styles.divMainCaption>
                </styles.divMain>
              </styles.aTarget>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <styles.aTarget href="/collective/koreatour">
                <styles.divMain>
                  <styles.divPic>
                    <styles.styleImage src="https://www.thaitravelcenter.com/webdatas/Package/Tour/tour-title-6073.jpg" alt="ทัวร์เกาหลี" />
                  </styles.divPic>
                  <styles.divMainCaption>
                    <styles.divCaption>
                      <Heading {...TextBannerh6} content="ทัวร์เกาหลี" />
                    </styles.divCaption>
                  </styles.divMainCaption>
                </styles.divMain>
              </styles.aTarget>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <styles.aTarget href="/collective/europetour">
                <styles.divMain>
                  <styles.divPic>
                    <styles.styleImage src="https://www.thaitravelcenter.com/webdatas/Package/Tour/tour-title-5637.jpg" alt="ทัวร์ยุโรป" />
                  </styles.divPic>
                  <styles.divMainCaption>
                    <styles.divCaption>
                      <Heading {...TextBannerh6} content="ทัวร์ยุโรป" />
                    </styles.divCaption>
                  </styles.divMainCaption>
                </styles.divMain>
              </styles.aTarget>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <styles.aTarget href="/collective/vietnamtour">
                <styles.divMain>
                  <styles.divPic>
                    <styles.styleImage src="https://www.thaitravelcenter.com/webdatas/Package/Tour/tour-title-1882.jpg" alt="ทัวร์เวียดนาม" />
                  </styles.divPic>
                  <styles.divMainCaption>
                    <styles.divCaption>
                      <Heading {...TextBannerh6} content="ทัวร์เวียดนาม" />
                    </styles.divCaption>
                  </styles.divMainCaption>
                </styles.divMain>
              </styles.aTarget>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <styles.aTarget href="/collective/myanmartour">
                <styles.divMain>
                  <styles.divPic>
                    <styles.styleImage src="https://www.thaitravelcenter.com/webdatas/Package/Tour/tour-title-5717.jpg" alt="ทัวร์พม่า" />
                  </styles.divPic>
                  <styles.divMainCaption>
                    <styles.divCaption>
                      <Heading {...TextBannerh6} content="ทัวร์พม่า" />
                    </styles.divCaption>
                  </styles.divMainCaption>
                </styles.divMain>
              </styles.aTarget>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <styles.aTarget href="/collective/chinatour">
                <styles.divMain>
                  <styles.divPic>
                    <styles.styleImage src="https://www.thaitravelcenter.com/webdatas/Package/Tour/tour-title-5613.jpg" alt="ทัวร์จีน" />
                  </styles.divPic>
                  <styles.divMainCaption>
                    <styles.divCaption>
                      <Heading {...TextBannerh6} content="ทัวร์จีน" />
                    </styles.divCaption>
                  </styles.divMainCaption>
                </styles.divMain>
              </styles.aTarget>
            </Grid>
          </Grid>
        </Boxs>
      </Container>
    </styles.popTour>
  );
}

const TextBannerh2 = {
  fontFamily: FontManager.default.secondaryFont,
  fontWeight: "normal",
  as: 'h2',
  color: '#440099',
  fontSize: ['29px', '35px'],
  lineHeight: 1,
  p: 0,
  m: 0,
  mb: '14px',
  textAlign: 'center'
}, TextBannerh6 = {
  fontFamily: FontManager.default.primaryFont,
  fontWeight: "normal",
  as: 'h6',
  color: '#fff',
  fontSize: ['25px', '27px', '25px', '27px', '31px'],
  lineHeight: "30px",
  mb: 0,
  textAlign: "center",
}

const styles = {
  popTour: styled.section`
    background-color: #fff;
    margin-top: 14px;
  `,
  aTarget: styled.a`
    display: block;
  `,
  divMain: styled.div`
    width: 100%;
    height: 100%;
    display: inline-block;
    position: relative;
  `,
  divPic: styled.div`
    width: 100%;
    height: 100%;
  `,
  styleImage: styled(AppImage)`
    border-radius: 8px;
    border: 0;
    max-width: 100%;
    height: 230px;
    height: auto;
    width: 100%;
    display: inline-block;
    vertical-align: middle;
    object-fit: cover;
  `,
  divMainCaption: styled.div`
    width: 100%;
    bottom: 0;
    height: 100%;
    position: absolute;
    color: #ffffff;
  `,
  divCaption: styled.div`
    left: 0;
    width: 100%;
    bottom: 0;
    padding: 14px;
    position: absolute;
    max-height: 100%;
    background-image: linear-gradient(transparent 0%,rgba(0, 0, 0, 0.5) 25%,rgba(0, 0, 0, 0.75) 60%,rgb(0, 0, 0) 90%);
    border-radius: 0 0 8px 8px;
  `,
}


export default Popular;
