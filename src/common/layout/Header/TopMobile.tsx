import React from "react";
import Container from "common/src/components/UI/Container";
import ImageManager from "common/Manager/ImageManager";
import { makeStyles } from "@material-ui/core/styles";
import { Theme, StyledProps, IconButton } from "@material-ui/core";
import Search from '@material-ui/icons/SearchRounded';
import Menu from '@material-ui/icons/MenuRounded';
import styles from "./style";
import NavMobile from "./NavMobile";

const useStyles = makeStyles<Theme, StyledProps>(styles as any);

interface Props {
  handleMobileToggle: any;
  mobileOpen: any;
  isMobile: boolean;
  isClient?: boolean;
}

export default function TopMobile(props: Props) {
  const classes = useStyles({} as StyledProps);
  const {
    handleMobileToggle,
    mobileOpen,
    isMobile,
    isClient
  } = props;

  return (
    <>
      <div id="header-top-mobile" className={classes.topNav1}>
        <Container className={classes.topNav}>
          <a href="https://www.thaitravelcenter.com/th/" title="Thai Travel Center - โลกทั้งใบอยู่ใกล้แค่เอื้อม ด้วยบริการท่องเที่ยวดีดีจากไทยทราเวลเซ็นเตอร์" className={classes.Alogomobile}>
            <img height="41px" src={ImageManager.default.images.common.header.LogoImage} alt="Thai Travel Center" className={classes.logo} />
          </a>
          <div>
            {/* <IconButton color="inherit" aria-label="Search" className={classes.searchButton} >
              <Search className={classes.menuStyle} />
            </IconButton> */}
            <IconButton color="inherit" aria-label="open drawer" onClick={handleMobileToggle} className={classes.menuButton} >
              <Menu className={classes.menuStyle} />
            </IconButton>
          </div>
        </Container>
      </div>
      <NavMobile {...props} />
    </>
  )
}