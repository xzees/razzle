import React from "react";
import Container from "common/src/components/UI/Container";
import ImageManager from "common/Manager/ImageManager";
import { makeStyles } from "@material-ui/core/styles";
import { Theme, StyledProps, Grid, Select, MenuItem, Hidden } from "@material-ui/core";
import ArrowDown from '@material-ui/icons/KeyboardArrowDownRounded';
import styles from "./style";
import NavDesk from "./NavDesk";

const useStyles = makeStyles<Theme, StyledProps>(styles as any);

interface Props {
  currencyChange: any;
  appBarClasses: any;
  handleDeskToggle: any;
  deskOpen: any;
  isMobile: boolean;
  isClient?: boolean;
}

export default function TopDesktop(props: Props) {
  const classes = useStyles({} as StyledProps);
  const {
    currencyChange,
    appBarClasses,
    handleDeskToggle,
    deskOpen,
    isMobile,
    isClient
  } = props;

  return (
    <>
      <div id="header-top-desktop" className={classes.topNav1}>
        <Container className={classes.topNav}>
          <a href="https://www.thaitravelcenter.com/th/" title="Thai Travel Center - โลกทั้งใบอยู่ใกล้แค่เอื้อม ด้วยบริการท่องเที่ยวดีดีจากไทยทราเวลเซ็นเตอร์" className={classes.Alogo}>
            <img height="41px" src={ImageManager.default.images.common.header.LogoImage} alt="Thai Travel Center" className={classes.logo} />
          </a>
          {/* <Hidden mdDown> */}
          <Grid container style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
            <Grid item>
              <div className={classes.topNavDiv}>
                <span className={classes.TextCC}>ศูนย์บริการช่วยเหลือลูกค้า <span className={classes.TextTel}>02-171-9999</span></span>
                <span className={classes.TextCC}>เปิดให้บริการ 06.30-21.00 น. ทุกวัน</span>
              </div>
            </Grid>
            <div className={classes.DivHR}>&nbsp;</div>
            <Grid item className={classes.TextC}>
              <div className={classes.topNavDiv2}>
                <a href="http://onelink.to/thaitravelcenter" style={{ display: 'inherit' }}>
                  <img src={ImageManager.default.images.common.header.DownloadApp} alt="Download App" className={classes.DownloadApp} />
                  <span className={classes.TextDL}>ดาวน์โหลดแอปท่องเที่ยวดีดี</span>
                </a>
              </div>
            </Grid>
            <div className={classes.DivHR}>&nbsp;</div>
            <Grid item className={classes.TextC}>
              <div className={classes.topNavDiv3}>
                <a href="http://line.me/ti/p/@thaitravelcenter" target="_blank" title="TTC Line" rel="nofollow" className={classes.DisplayIB}>
                  <img src={ImageManager.default.images.common.header.LineIcon} alt="Follow Line" className={classes.LineIcon} />
                </a>
                <a href="https://www.facebook.com/thaitravelcenter" target="_blank" title="TTC Facebook" rel="nofollow" className={classes.DisplayIB + ' ' + classes.BoxFB}>
                  <img src={ImageManager.default.images.common.header.FBIcon} alt="Follow Facebook" className={classes.FBIcon} />
                </a>
                <a href="https://www.instagram.com/thaitravelcenter" target="_blank" title="TTC Instagram" rel="nofollow" className={classes.DisplayIB}>
                  <img src={ImageManager.default.images.common.header.IGIcon} alt="Follow Instagram" className={classes.IGIcon} />
                </a>
              </div>
            </Grid>
            <div className={classes.DivHR}>&nbsp;</div>
            <Grid item >
              <div className={classes.topNavDiv4}>
                <div className={classes.currencySelect}>THB</div>
                {/* <Select
                    defaultValue="THB"
                    id="currency-select"
                    IconComponent={ArrowDown}
                    onChange={currencyChange}
                    className={classes.currencySelect}
                    MenuProps={{
                      classes: {
                        paper: classes.currencyPaper
                      }
                    }}
                  >
                    <MenuItem value="THB">THB</MenuItem>
                    <MenuItem value="USD">USD</MenuItem>
                  </Select> */}
              </div>
            </Grid>
            <div className={classes.DivHR}>&nbsp;</div>
            <Grid item >
              <div className={classes.topNavDiv5}>
                <img src={ImageManager.default.images.common.header.ThaiFlag} alt="Thai Flag" className={classes.Flag} />
              </div>
            </Grid>
            {/* <div className={classes.DivHR}>&nbsp;</div>
              <Grid item className={classes.TextR}>
                <div className={classes.topNavDiv6}>
                  <span className={classes.NameAvatar}>สวัสดี <span className={classes.NameAvatarBold}>Bright</span></span>
                  <img src={ImageManager.default.images.common.header.Avatar} alt="Avatar" className={classes.PicAvatar} />
                </div>
              </Grid> */}
          </Grid>
          {/* </Hidden> */}
        </Container>
      </div>
      {/* <Hidden mdDown> */}
      <NavDesk {...props} />
      {/* </Hidden> */}
    </>
  );
}
