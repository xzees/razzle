import {
  container,
  defaultFont,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  roseColor,
  transition,
  boxShadow,
  drawerWidth,
  blackColor,
  whiteColor,
  grayColor,
  hexToRgb
} from "modules/sightseeing/assets/jss/core";
import { width } from "styled-system";
import { filter } from "compression";

const headerStyle = (theme: any) => ({
  menuOpen: {
    overflow: 'hidden',
    paddingRight: 19
  },
  appBar: {
    display: "flex",
    border: "0",
    // borderRadius: "3px",
    // padding: "0.625rem 0",
    padding: "0 !important",
    // marginBottom: "20px",
    marginBottom: 0,
    // color: grayColor[15],
    color: '#440099',
    width: "100%",
    backgroundColor: whiteColor,
    boxShadow:
      "0 4px 18px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 7px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative"
  },
  topNav: {
    paddingTop: 10,
    paddingBottom: 13,
    display: 'flex',
    minHeight: '50px',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  topNav1: {
    [theme.breakpoints.down("md")]: {
      position: "sticky",
      top: "0",
      right: "0 !important",
      left: "0 !important",
      background: "#fff !important",
      zIndex: 1200
    },
    boxShadow: '0 0 4px 0px rgba(0, 0, 0, 0.12)'
    // boxShadow: '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)'
  },
  fixedMobile: {
    position: "fixed",
  },
  searchButton: {
    color: '#440099',
    padding: 0,
    marginRight: 24,
    "&": {
      backgroundColor: 'unset !important'
    }
  },
  menuButton: {
    color: '#440099',
    padding: 0,
    "&": {
      backgroundColor: 'unset !important'
    }
  },
  customButton: {
    marginRight: "-3px",
    padding: 0,
    width: "auto !important",
    "&": {
      backgroundColor: 'unset !important'
    }
  },
  absolute: {
    position: "absolute",
    top: "auto"
  },
  fixed: {
    position: "fixed",
    "& img": {
      // filter: 'invert(1)',
      filter: 'invert(92%) sepia(83%) saturate(5841%) hue-rotate(277deg) brightness(87%) contrast(153%)'
    },
    "& #stickyLogo": {
      opacity: 1,
      top: 0,
      left: '-60px'
    },
    "& svg": {
      color: '#440099'
    }
  },
  stickyLogo: {
    position: 'absolute',
    display: 'block',
    width: 60,
    height: 60,
    background: "url(https://www.thaitravelcenter.com/template/theme/images/numchok.png) no-repeat center center",
    backgroundSize: "contain",
    transition: 'all .3s ease'
  },
  container: {
    ...container,
    minHeight: "50px",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap"
  },
  title: {
    letterSpacing: "unset",
    "&,& a": {
      ...defaultFont,
      minWidth: "unset",
      lineHeight: "30px",
      fontSize: "18px",
      borderRadius: "3px",
      textTransform: "none",
      whiteSpace: "nowrap",
      color: "inherit",
      "&:hover,&:focus": {
        color: "inherit",
        background: "transparent"
      }
    }
  },
  appResponsive: {
    // margin: "20px 10px",
    // marginTop: "0px"
    background: "#fff",
    marginTop: "60px"
  },
  primary: {
    backgroundColor: primaryColor[0],
    color: whiteColor,
    boxShadow:
      "0 4px 20px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 7px 12px -5px rgba(" +
      hexToRgb(primaryColor[0]) +
      ", 0.46)"
  },
  info: {
    backgroundColor: infoColor[0],
    color: whiteColor,
    boxShadow:
      "0 4px 20px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 7px 12px -5px rgba(" +
      hexToRgb(infoColor[0]) +
      ", 0.46)"
  },
  success: {
    backgroundColor: successColor[0],
    color: whiteColor,
    boxShadow:
      "0 4px 20px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 7px 12px -5px rgba(" +
      hexToRgb(successColor[0]) +
      ", 0.46)"
  },
  warning: {
    backgroundColor: warningColor[0],
    color: whiteColor,
    boxShadow:
      "0 4px 20px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 7px 12px -5px rgba(" +
      hexToRgb(warningColor[0]) +
      ", 0.46)"
  },
  danger: {
    backgroundColor: dangerColor[0],
    color: whiteColor,
    boxShadow:
      "0 4px 20px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 7px 12px -5px rgba(" +
      hexToRgb(dangerColor[0]) +
      ", 0.46)"
  },
  rose: {
    backgroundColor: roseColor[0],
    color: whiteColor,
    boxShadow:
      "0 4px 20px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 7px 12px -5px rgba(" +
      hexToRgb(roseColor[0]) +
      ", 0.46)"
  },
  transparent: {
    // backgroundColor: "transparent !important",
    // boxShadow: "none",
    // // paddingTop: "25px",
    // color: whiteColor,
    border: "0",
    color: grayColor[15],
    backgroundColor: whiteColor + " !important",
    boxShadow: "0 0 2px 0px rgba(" + hexToRgb(blackColor) + ", 0.12)",
    // "& img": {
    //   filter: 'unset',
    // },
    "& #stickyLogo": {
      opacity: 0,
      top: '-70px'
    },
    // "& svg": {
    //   color: 'inherit'
    // }
  },
  dark: {
    color: whiteColor,
    backgroundColor: grayColor[9] + " !important",
    boxShadow:
      "0 4px 20px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 7px 12px -5px rgba(" +
      hexToRgb(grayColor[9]) +
      ", 0.46)"
  },
  white: {
    border: "0",
    // padding: "0.625rem 0",
    // marginBottom: "20px",
    color: grayColor[15],
    backgroundColor: whiteColor + " !important",
    boxShadow: "0 0 4px 0px rgba(" + hexToRgb(blackColor) + ", 0.12)"
    // boxShadow:
    //   "0 4px 18px 0px rgba(" +
    //   hexToRgb(blackColor) +
    //   ", 0.12), 0 7px 10px -5px rgba(" +
    //   hexToRgb(blackColor) +
    //   ", 0.15)"
  },
  drawerPaper: {
    background: '#f3f2fa',
    border: "none",
    bottom: "0",
    color: '#000',
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: drawerWidth,
    ...boxShadow,
    position: "fixed",
    display: "block",
    top: "0",
    // height: "100vh",
    height: "100%",
    right: "0",
    left: "auto",
    visibility: "visible",
    overflowY: "visible",
    overflow: "auto",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0",
    ...transition,
    zIndex: 10000,
    "& img": {
      filter: 'invert(92%) sepia(83%) saturate(5841%) hue-rotate(277deg) brightness(87%) contrast(153%)',
    },
    [theme.breakpoints.down("xl")]: {
      width: '20%'
    },
    [theme.breakpoints.down("lg")]: {
      width: '30%'
    },
    [theme.breakpoints.down("md")]: {
      width: '40%'
    },
    [theme.breakpoints.down("sm")]: {
      width: '50%'
    },
    [theme.breakpoints.down("xs")]: {
      width: '100%'
    }
  },
  drawerModal: {
    zIndex: '10000 !important'
  },
  hidden: {
    width: "100%"
  },
  collapse: {
    [theme.breakpoints.up("md")]: {
      display: "flex !important",
      MsFlexPreferredSize: "auto",
      flexBasis: "auto"
    },
    WebkitBoxFlex: "1",
    MsFlexPositive: "1",
    flexGrow: "1",
    WebkitBoxAlign: "center",
    MsFlexAlign: "center",
    alignItems: "center"
  },
  closeButtonDrawer: {
    position: "absolute",
    right: "12px",
    // top: "30px",
    top: "12px",
    padding: 0,
    zIndex: "1"
  },
  Alogo: {
    height: 48
  },
  Alogomobile: {
    height: 41
  },
  logo: {
    // width: 156
    height: 'inherit'
  },
  toolBarPD0: {
    paddingLeft: 0,
    paddingRight: 0
  },
  TextC: {
    textAlign: 'center'
  },
  TextL: {
    textAlign: 'left'
  },
  TextR: {
    textAlign: 'right'
  },
  DisplayIB: {
    display: 'inline-block'
  },
  BoxFB: {
    marginLeft: 10,
    marginRight: 10
  },
  topNavDiv: {
    marginLeft: 90,
    marginRight: 10,
    textAlign: 'right'
  },
  topNavDiv2: {
    display: 'inline-flex',
    fontSize: '1.3125rem',
    margin: '4px 10px 0 10px'
  },
  topNavDiv3: {
    display: 'inline-flex',
    margin: '6px 10px 0 10px'
  },
  topNavDiv4: {
    marginTop: 4,
    textAlign: 'center',
    width: 73
  },
  topNavDiv5: {
    marginTop: 8,
    textAlign: 'center',
    // padding: "0 15px"
    padding: "0 0 0 15px"
    // width: 60
  },
  topNavDiv6: {
    display: 'inline-flex',
    margin: '0 0 0 10px'
    // marginTop: 8
  },
  TextCC: {
    color: '#440099',
    display: 'block',
    fontSize: 17,
    lineHeight: 0.8
  },
  TextTel: {
    color: '#440099',
    fontFamily: 'DBHeaventRoundedMedv32',
    fontSize: 21,
  },
  DownloadApp: {
    borderRadius: 4,
    height: 27,
    // marginRight: 5,
    marginTop: 3
  },
  TextDL: {
    color: '#440099',
    marginTop: 4,
    minWidth: 170
  },
  LineIcon: {
    borderRadius: 6,
    height: 34
  },
  FBIcon: {
    borderRadius: 6,
    height: 34,
    // marginLeft: 10
  },
  IGIcon: {
    borderRadius: 6,
    height: 34,
    // marginLeft: 10
  },
  // currencySelect: {
  //   border: 'none !important',
  //   color: '#440099',
  //   fontSize: '1.3125rem',
  //   "&:after": {
  //     border: 'none !important',
  //   },
  //   "&:before": {
  //     content: 'none'
  //   },
  //   "& select": {
  //     backgroundColor: '#fff !important'
  //   },
  //   "& svg": {
  //     color: '#440099 !important',
  //     fontSize: '1.3125rem',
  //   }
  // },
  // currencyPaper: {
  //   top: '53px !important',
  //   "& .MuiMenu-list": {
  //     padding: 0
  //   },
  //   "& .MuiMenuItem-root": {
  //     fontSize: 17,
  //     margin: "5px 0"
  //   }
  // },
  currencySelect: {
    color: '#440099',
    fontFamily: 'DBHeaventRoundedMedv32',
    fontSize: '1.3125rem',
    pointerEvents: 'none'
  },
  Flag: {
    borderRadius: 4,
    height: 22
  },
  // menuFlags: {
  //   // borderRadius: 4,
  //   // height: 22,
  //   paddingBottom: 0,
  //   "& img": {
  //     borderRadius: 4,
  //     filter: 'unset'
  //   },
  //   "& .flag-select__btn:after": {
  //     content: 'none'
  //   },
  //   "& .flag-select__btn": {
  //     padding: "0 10px"
  //   },
  //   "& .flag-select__option--placeholder": {
  //     padding: 0
  //   },
  //   "& .flag-select__options": {
  //     border: "1px solid #eaeaea",
  //     fontSize: '21px !important',
  //     margin: 0,
  //     padding: 0
  //   },
  //   // "& .flag-select__option.has-label": {
  //   //   margin: 4
  //   // }
  // },
  NameAvatar: {
    fontSize: '1.3125rem',
    marginTop: 6
  },
  NameAvatarBold: {
    color: '#440099',
    fontFamily: 'DBHeaventRoundedMedv32',
  },
  PicAvatar: {
    borderRadius: 4,
    filter: 'unset !important',
    height: 35,
    marginLeft: 12
  },
  DivHR: {
    float: 'left',
    margin: '8px 4px 6px 4px',
    background: '#dddddd',
    width: 1,
    height: 22,
    display: 'block'
  },
  list: {
    padding: '0 20px'
  },
  menuStyle: {
    fontSize: '2rem'
  },
  closeStyle: {
    fontSize: '2.25rem'
  },
  MenulistItem: {
    float: 'left',
    display: 'block',
    padding: 0,
    "&:after": {
      width: "calc(100%)",
      content: '""',
      display: "block",
      height: "1px",
      backgroundColor: '#f3f2fa',
    }
  },
  MenulistNoBorder: {
    "&:after": {
      content: 'unset!important'
    },
    "&:before": {
      width: "calc(100%)",
      content: '""',
      display: "block",
      height: "1px",
      backgroundColor: '#f3f2fa',
    }
  },
  MenuPicAvatar: {
    borderRadius: 4,
    filter: 'unset !important',
    height: 58,
    marginLeft: 0
  },
  MenuNameAvatar: {
    display: 'block',
    fontSize: '1.3125rem',
    lineHeight: 0.8,
    marginTop: 4,
  },
  MenuNameAvatarBold: {
    color: '#440099',
    display: 'block',
    fontFamily: 'DBHeaventRoundedMedv32',
    fontSize: '1.9375rem',
    lineHeight: 0.8
  },
  btnEditProfile: {
    border: '2px solid #440099',
    borderRadius: '6px',
    color: '#440099',
    fontSize: '1.3125rem',
    lineHeight: 0.9,
    marginTop: 4,
    padding: '8px 10px'
  },
  MenuFlag: {
    borderRadius: 4,
    filter: 'unset !important',
    height: 18,
    marginRight: 27,
    marginTop: 2
  },
  MenuFlagTXT: {
    color: '#440099',
    display: 'block',
    fontFamily: 'DBHeaventRoundedMedv32',
    fontSize: '1.3125rem',
    lineHeight: 0.9
  },
  MenuCurrency: {
    height: 18,
    marginRight: 27,
    marginTop: 2
  },
  MenuCurrencyTXT: {
    color: '#440099',
    display: 'block',
    fontFamily: 'DBHeaventRoundedMedv32',
    fontSize: '1.3125rem',
    lineHeight: 0.9
  },
  socialButton: {
    boxShadow: 'unset !important',
    color: '#fff !important',
    fontSize: '1.5625rem',
    textTransform: 'unset !important',
    padding: '12px 16px',
    lineHeight: 1,
    "& svg": {
      fontSize: '1.5rem !important',
      filter: 'unset !important',
      position: 'absolute',
      left: 19,
      top: '25%'
    },
    "& img": {
      filter: 'unset !important',
      position: 'absolute',
      left: 19,
      top: '25%',
      width: 25
    }
  },
  callButton: {
    backgroundColor: '#440099 !important'
  },
  lineButton: {
    backgroundColor: '#3acd02 !important'
  },
  messengerButton: {
    backgroundColor: '#448afe !important'
  },
  appButton: {
    filter: 'unset !important',
  },
  backdrop: {
    position: 'fixed',
    zIndex: '10000',
    right: '0',
    bottom: '0',
    top: '0',
    left: '0'
  }
});

export default headerStyle;
