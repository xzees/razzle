import React from "react";
import Container from "common/src/components/UI/Container";
import LoadableComponents from 'common/components/LoadableComponents';
import FooterWrapper, { List, ListItem, BoxDW } from "./style";
import { Grid, Box as Boxs, Hidden } from "@material-ui/core";
import { FOOTER_COLONE } from "./MenuFooter";
import { Label } from "common/components/Label";
import { AppImage } from "common/components";
import { inject, observer } from "mobx-react";
import i18n from "utilities/I18n";
import RootStore from "stores";
import Divider from "@material-ui/core/Divider";

import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import PrintIcon from "@material-ui/icons/Print";
import EmailIcon from "@material-ui/icons/Email";

import ColorManager from "common/Manager/ColorManager";
import FontManager from "common/Manager/FontManager";
import ImageManager from "common/Manager/ImageManager";

type Props = {
  stores?: RootStore;
};

const Footer = inject("stores")(
  observer((props: Props) => {
    const themeStore = props.stores!.ThemeStore;
    const Newsletter = LoadableComponents(import(/* webpackChunkName: "FooterSub" */"common/layout/Footer/Subscribe"), '');
    const date = new Date();
    const year = date.getFullYear();

    return (
      <>
        <Newsletter />
        <FooterWrapper id="footerSection">
          <Container>
            <Grid container spacing={3}>
              <Grid className="col " item xs={12} sm={12} md={4}>
                <Boxs mt={6}>
                  <Grid container spacing={4}>
                    <Grid className="row" item xs={12} md={12}>
                      <Label
                        style={{ marginBottom: RootStore.default.ScreenManager.isMobile ? 0 : "0.4rem" }}
                        fontSize={FontManager.default.large}
                        color={ColorManager.default.white}
                      >
                        {themeStore.brandInformation.companyName.TH}
                      </Label>
                    </Grid>
                    <Grid className="row" item xs={12} md={12}>
                      <Grid container>
                        <Grid item className="col" xs={12} md={11}>
                          <Label
                            style={{ marginBottom: RootStore.default.ScreenManager.isMobile ? 0 : "0.4rem" }}
                            fontSize={FontManager.default.text}
                            color={ColorManager.default.white}
                          >
                            {themeStore.brandInformation.companyAddress.TH}
                          </Label>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid className="row" item xs={12} md={12}>
                      <Boxs mt={1.2}>
                        <Grid container spacing={1}>
                          <Grid className="row" item xs={12}>
                            <Label
                              style={{ marginBottom: RootStore.default.ScreenManager.isMobile ? 0 : "0.4rem" }}
                              fontSize={FontManager.default.text}
                              color={ColorManager.default.white}
                            >
                              {`Tax ID : ${themeStore.brandInformation.taxID}`}
                            </Label>
                          </Grid>
                          <Grid className="row" item xs={12}>
                            <Label
                              style={{ marginBottom: RootStore.default.ScreenManager.isMobile ? 0 : "0.4rem" }}
                              fontSize={FontManager.default.text}
                              color={ColorManager.default.white}
                            >
                              {`Travel License : ${themeStore.brandInformation.travelLicense}`}
                            </Label>
                          </Grid>
                          <Grid className="row" item xs={12}>
                            <Label
                              style={{ marginBottom: RootStore.default.ScreenManager.isMobile ? 0 : "0.4rem" }}
                              fontSize={FontManager.default.text}
                              color={ColorManager.default.white}
                            >
                              {`IATA Accredited Agent : ${themeStore.brandInformation.IATA_ID}`}
                            </Label>
                          </Grid>
                        </Grid>
                      </Boxs>
                    </Grid>
                    <Grid className="row" item xs={12} md={12}>
                      <Boxs mt={6}>
                        <Grid container spacing={4}>
                          <Grid item xs={12} md={12}>
                            <Label
                              style={{ marginBottom: RootStore.default.ScreenManager.isMobile ? 0 : "0.4rem" }}
                              fontSize={FontManager.default.header}
                              color={ColorManager.default.white}
                              className="appDownload"
                            >
                              {themeStore.brandInformation.downloadtitle}
                            </Label>
                          </Grid>
                          <Grid item xs={12} md={12}>
                            <Grid container>
                              <BoxDW item xs={6} md={6}>
                                <a href={themeStore.brandInformation.appStoreUrl} title={themeStore.brandInformation.appStoreTitle} >
                                  <AppImage width={150} height={50} style={{ marginRight: 8 }} src={ImageManager.default.images.common.footer.appstoreImage} />
                                </a>
                              </BoxDW>
                              <BoxDW item xs={6} md={6}>
                                <a href={themeStore.brandInformation.playStoreUrl} title={themeStore.brandInformation.playStoreTitle} >
                                  <AppImage width={150} height={50} style={{ marginRight: 8 }} src={ImageManager.default.images.common.footer.playstoreImage} />
                                </a>
                              </BoxDW>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Boxs>
                    </Grid>
                  </Grid>
                </Boxs>
              </Grid>
              {/* End of column 1*/}
              <Grid className="col" item xs={12} sm={12} md={5}>
                <Hidden only={["lg", "md", "sm", "xl"]}>
                  <Boxs mt={2.5}>
                    <Divider style={{ backgroundColor: "rgba(255,255,255,0.3" }} />
                  </Boxs>
                </Hidden>

                <Boxs mt={6}>
                  <Grid container>
                    <Grid item xs={12} md={1}></Grid>
                    <Grid item xs={12} md={11}>
                      <Grid container spacing={7}>
                        <Grid className="row" item xs={12} md={12}>
                          <Label
                            style={{
                              marginBottom: RootStore.default.ScreenManager.isMobile ? 0 : "0.4rem",
                              fontFamily: "DBHeaventRoundedMedv32"
                            }}
                            fontSize={FontManager.default.header}
                            color={ColorManager.default.white}
                          >
                            {i18n.t("footer.open.daily")}
                          </Label>
                        </Grid>
                        <Grid className="row" item xs={12} md={12}>
                          <Grid container>
                            <Grid item xs={12} md={12}>
                              <Grid container>
                                <Grid item xs={1}>
                                  <HeadsetMicIcon style={{ color: "white" }} fontSize="small" />
                                </Grid>
                                <Grid item xs={2}>
                                  <Label
                                    style={{ marginBottom: RootStore.default.ScreenManager.isMobile ? 0 : "0.4rem" }}
                                    fontSize={FontManager.default.textEM}
                                    color={ColorManager.default.white}
                                  >
                                    {i18n.t("footer.phone")}
                                  </Label>
                                </Grid>
                                <Grid item>
                                  <Label
                                    style={{
                                      marginBottom: RootStore.default.ScreenManager.isMobile ? 0 : "0.4rem",
                                      fontFamily: "DBHeaventRoundedMedv32"
                                    }}
                                    fontSize={FontManager.default.large}
                                    color={ColorManager.default.white}
                                  >
                                    {`: ${themeStore.brandInformation.phoneNumber}`}
                                  </Label>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <Grid container>
                                <Grid item xs={1}>
                                  <PrintIcon style={{ color: "white" }} fontSize="small" />
                                </Grid>
                                <Grid item xs={2}>
                                  <Label
                                    style={{ marginBottom: RootStore.default.ScreenManager.isMobile ? 0 : "0.4rem" }}
                                    fontSize={FontManager.default.textEM}
                                    color={ColorManager.default.white}
                                  >
                                    {i18n.t("footer.fax")}
                                  </Label>
                                </Grid>
                                <Grid item>
                                  <Label
                                    style={{
                                      marginBottom: RootStore.default.ScreenManager.isMobile ? 0 : "0.4rem",
                                      fontFamily: "DBHeaventRoundedMedv32"
                                    }}
                                    fontSize={FontManager.default.large}
                                    color={ColorManager.default.white}
                                  >
                                    {`: ${themeStore.brandInformation.fax}`}
                                  </Label>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={12} md={12}>
                              <Grid container>
                                <Grid item xs={1}>
                                  <EmailIcon style={{ color: "white" }} fontSize="small" />
                                </Grid>
                                <Grid item xs={2}>
                                  <Label
                                    style={{ marginBottom: RootStore.default.ScreenManager.isMobile ? 0 : "0.4rem" }}
                                    fontSize={FontManager.default.text}
                                    color={ColorManager.default.white}
                                  >
                                    {i18n.t("footer.email")}
                                  </Label>
                                </Grid>
                                <Grid item>
                                  <Label
                                    style={{ marginBottom: RootStore.default.ScreenManager.isMobile ? 0 : "0.4rem" }}
                                    fontSize={FontManager.default.text}
                                    color={ColorManager.default.white}
                                  >
                                    {`: ${themeStore.brandInformation.email}`}
                                  </Label>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid className="row" item xs={12} md={12}>
                          <Grid container>
                            <Grid item>
                              <a href={themeStore.brandInformation.socialMedia.facebook} title="ติดตามบนเฟสบุ๊ค" target="_blank" >
                                <AppImage width={40} height={40} style={{ marginRight: 8 }} src={ImageManager.default.images.common.footer.socialIcon.facebookIcon} />
                              </a>
                            </Grid>
                            <Grid item>
                              <a href={themeStore.brandInformation.socialMedia.twitter} title="ติดตามบนทวิสเตอร์" target="_blank" >
                                <AppImage width={40} height={40} style={{ marginRight: 8 }} src={ImageManager.default.images.common.footer.socialIcon.twitterIcon} />
                              </a>
                            </Grid>
                            <Grid item>
                              <a href={themeStore.brandInformation.socialMedia.instagram} title="ติดตามบนอินสตาแกรม" target="_blank" >
                                <AppImage width={40} height={40} style={{ marginRight: 8 }} src={ImageManager.default.images.common.footer.socialIcon.instagramIcon} />
                              </a>
                            </Grid>
                            <Grid item>
                              <a href={themeStore.brandInformation.socialMedia.youtube} title="ติดตามบนยูทูป" target="_blank" >
                                <AppImage width={40} height={40} style={{ marginRight: 8 }} src={ImageManager.default.images.common.footer.socialIcon.youtubeIcon} />
                              </a>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Boxs>
              </Grid>

              <Grid className="col" item xs={12} sm={12} md={3}>
                <Hidden only={["lg", "md", "sm", "xl"]}>
                  <Boxs mt={2.5}>
                    <Divider style={{ backgroundColor: "rgba(255,255,255,0.3" }} />
                  </Boxs>
                </Hidden>
                <Boxs mt={6}>
                  {FOOTER_COLONE.map((widget, index) => {
                    return (
                      <Grid key={`footer-widget-item-${index}`} container>
                        <Grid container>
                          <Grid item xs={12} md={2}></Grid>
                          <Grid item xs={12} md={10}>
                            <Label
                              style={{
                                marginBottom: RootStore.default.ScreenManager.isMobile ? 0 : "0.4rem",
                                fontFamily: "DBHeaventRoundedMedv32"
                              }}
                              fontSize={FontManager.default.header}
                              color={ColorManager.default.white}
                            >
                              {widget.title}
                            </Label>
                          </Grid>
                        </Grid>

                        <Grid container>
                          <Grid item xs={12} md={2}></Grid>
                          <Grid item xs={12} md={10}>
                            <Boxs mt={6}>
                              <List>
                                {widget.menuItems.map((item, i) => (
                                  <ListItem key={`list__item-${i}`}>
                                    <a href={item.url} className="ListItem">
                                      <Label
                                        style={{
                                          marginBottom: RootStore.default.ScreenManager.isMobile ? 0 : "0.4rem",
                                          cursor: "pointer"
                                        }}
                                        fontSize={FontManager.default.text}
                                        color={ColorManager.default.white}
                                      >
                                        {item.text}
                                      </Label>
                                    </a>
                                  </ListItem>
                                ))}
                              </List>
                            </Boxs>
                          </Grid>
                        </Grid>
                      </Grid>
                    );
                  })}
                </Boxs>
              </Grid>
            </Grid>
            <Boxs mt={{ xs: 4, sm: 4, md: -8 }}>
              <Grid container spacing={3}>
                <Grid className="col" item>
                  <Label
                    style={{
                      marginBottom: RootStore.default.ScreenManager.isMobile ? 0 : "0.4rem",
                      marginRight: "0.4rem"
                    }}
                    fontSize={FontManager.default.text}
                    color={ColorManager.default.white}
                  >
                    {`สงวนลิขสิทธิ์ © ${year + 543}`}
                  </Label>
                </Grid>
                <Grid className="col" item>
                  <div id="truehits_div">
                    <a href="https://truehits.net/stat.php?login=tibsonline" target="_blank" >
                      <img
                        src="//lvs.truehits.in.th/goggen.php?hc=d0006604&amp;rand=895276&amp;bv=0&amp;rf=bookmark&amp;web=%2b7IlcqTZCG1rYOrH1KHs8g%3D%3D&amp;bn=Netscape&amp;ss=1920*1080&amp;sc=24&amp;sv=1.3&amp;ck=y&amp;ja=n&amp;vt=21A0AE33.1&amp;fp=d&amp;fv=-&amp;truehitspage=/th/&amp;truehitsurl=https%3a//www.thaitravelcenter.com/th/"
                        width="14" height="17" alt="Thailand Web Stat"
                      />
                    </a>
                  </div>
                </Grid>
              </Grid>
            </Boxs>
          </Container>
        </FooterWrapper>
      </>
    );
  })
);

export default Footer;
