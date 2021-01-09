import {
  grayColor,
  whiteColor,
  mlAuto,
  hexToRgb,
} from "modules/sightseeing/assets/jss/core";

import tooltip from "modules/sightseeing/assets/jss/ecommerce/Tootip";
import { red } from "@material-ui/core/colors";

const headerLinksStyle = (theme: any) => ({
  list: {
    // [theme.breakpoints.up("lg")]: {
    //   WebkitBoxAlign: "center",
    //   MsFlexAlign: "center",
    //   alignItems: "center",
    //   WebkitBoxOrient: "horizontal",
    //   WebkitBoxDirection: "normal",
    //   MsFlexDirection: "row",
    //   flexDirection: "row",
    // },
    // [theme.breakpoints.down("lg")]: {
    display: "block",
    // },
    marginTop: "0px",
    // display: "flex",
    paddingLeft: "0",
    marginBottom: "0",
    listStyle: "none",
    padding: "0",
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("md")]: {
      "& ul": {
        maxHeight: "400px",
        overflow: "auto",
        overflowX: "hidden",
      },
      width: "100%",
      "&:not(:last-child)": {
        "&:after": {
          width: "calc(100% - 30px)",
          content: '""',
          display: "block",
          height: "1px",
          marginLeft: "15px",
          // backgroundColor: '#f3f2fa',
        },
      },
    },
  },
  listItemText: {
    padding: "0 !important",
    margin: 0,
  },
  navLink: {
    color: "inherit",
    position: "relative",
    padding: "0.9375rem 0.9375rem 0.9375rem 0.4rem",
    fontWeight: "400",
    fontSize: "21px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    marginRight: "1.5625rem",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "inherit",
    },
    "& .fab,& .far,& .fal,& .fas,& .material-icons": {
      position: "relative",
      top: "2px",
      marginTop: "-4px",
      marginRight: "4px",
      marginBottom: "0px",
      fontSize: "1.25rem",
    },
    [theme.breakpoints.down("md")]: {
      width: "calc(100% - 30px)",
      marginLeft: "10px",
      // marginBottom: "8px",
      // marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
    "& svg": {
      marginRight: "3px",
      width: "20px",
      height: "20px",
    }
  },
  navLinkJustIcon: {
    "& .fab,& .far,& .fal,& .fas,& .material-icons": {
      marginRight: "0px",
    },
    "& svg": {
      marginRight: "0px",
    },
  },
  navButton: {
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    [theme.breakpoints.down("md")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "5px",
      marginTop: "5px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
    "& $icons": {
      marginRight: "3px",
    },
  },
  notificationNavLink: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
  },
  registerNavLink: {
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
  },
  navLinkActive: {
    "&, &:hover, &:focus,&:active ": {
      color: "inherit",
      backgroundColor: "rgba(" + hexToRgb(whiteColor) + ", 0.1)",
    },
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "14px",
  },
  dropdownIcons: {
    width: "24px",
    height: "24px",
    marginRight: "14px",
    opacity: "0.5",
    marginTop: "-4px",
    top: "1px",
    verticalAlign: "middle",
    fontSize: "24px",
    position: "relative",
  },
  socialIcons: {
    position: "relative",
    fontSize: "1.25rem",
    maxWidth: "24px",
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "flex",
      padding: "5px 10px",
    },
  },
  ...tooltip,
  marginRight5: {
    marginRight: "5px",
  },
  collapse: {
    [theme.breakpoints.up("lg")]: {
      display: "flex !important",
      MsFlexPreferredSize: "auto",
      flexBasis: "auto",
    },
    WebkitBoxFlex: "1",
    MsFlexPositive: "1",
    flexGrow: "1",
    WebkitBoxAlign: "center",
    MsFlexAlign: "center",
    alignItems: "center",
  },
  mlAuto,
  buttonIcon: {
    width: "20px",
    height: "20px"
  },
  ML9: {
    marginLeft: 9
  },
  MR10: {
    marginRight: 10
  },
  MR25: {
    marginRight: 25
  },
  toggleMenu: {
    // padding: '0 20px',
    display: 'inline-block',
    paddingBottom: 10,
    "& li": {
      width: '100%'
    },
    "& li a": {
      color: '#440099',
      fontSize: '1.5625rem'
    }
  },
  navLinkToggle: {
    borderTop: "1px solid #f3f2fa",
    fontSize: '1.5625rem',
    marginLeft: 20,
    marginRight: 16,
    width: "calc(100% - 40px)",
    textAlign: "left",
    justifyContent: "flex-start",
    borderRadius: 'unset',
    paddingLeft: 0
  }
});

export default headerLinksStyle;
