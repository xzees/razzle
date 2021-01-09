import {
  defaultFont,
  primaryColor,
  primaryBoxShadow,
  infoColor,
  infoBoxShadow,
  successColor,
  successBoxShadow,
  warningColor,
  warningBoxShadow,
  dangerColor,
  dangerBoxShadow,
  roseColor,
  roseBoxShadow,
  blackColor,
  whiteColor,
  grayColor,
  hexToRgb
} from "modules/sightseeing/assets/jss/core";

const customDropdownStyle = theme => ({
  popperClose: {
    pointerEvents: "none",
    display: "none !important"
  },
  pooperNav: {
    [theme.breakpoints.down("sm")]: {
      position: "static !important",
      left: "unset !important",
      top: "unset !important",
      transform: "none !important",
      willChange: "none !important",
      "& > div": {
        boxShadow: "none !important",
        marginLeft: "1.5rem",
        marginRight: "1.5rem",
        transition: "none !important",
        marginTop: "0px !important",
        marginBottom: "5px !important",
        padding: "0px !important"
      }
    }
  },
  manager: {
    "& > div > button:first-child > span:first-child, & > div > a:first-child > span:first-child": {
      width: "100%"
    }
  },
  innerManager: {
    display: "block",
    "& > div > button,& > div > a": {
      margin: "0px !important",
      color: "inherit !important",
      padding: "10px 20px !important",
      "& > span:first-child": {
        width: "100%",
        justifyContent: "flex-start"
      }
    }
  },
  target: {
    "& > button:first-child > span:first-child, & > a:first-child > span:first-child": {
      display: "inline-block"
    },
    "& $caret": {
      marginLeft: "0px"
    }
  },
  dropdown: {
    borderRadius: "3px",
    border: "0",
    boxShadow: "0 2px 5px 0 rgba(" + hexToRgb(blackColor) + ", 0.26)",
    top: "100%",
    zIndex: "1000",
    minWidth: "160px",
    padding: "5px 0",
    margin: "2px 0 0",
    fontSize: "14px",
    textAlign: "left",
    listStyle: "none",
    backgroundColor: whiteColor,
    backgroundClip: "padding-box"
  },
  menuList: {
    padding: "5px 0"
  },
  megaTour: {
    '@media (min-width: 960px) and (max-width: 1279px)': {
      border: 'none',
      flexGrow: 0,
      maxWidth: '100%',
      flexBasis: '100%',
    }
  },
  pooperResponsive: {
    zIndex: "1200",
    [theme.breakpoints.down("sm")]: {
      zIndex: "1640",
      position: "static",
      float: "none",
      width: "auto!important",
      marginTop: "0",
      backgroundColor: "transparent",
      border: "0",
      boxShadow: "none",
      color: "black"
    },
    '@media (min-width: 960px) and (max-width: 1279px)': {
      zIndex: "1640",
      float: "none",
      width: "auto!important",
      marginTop: "0",
      border: "0",
      color: "black"
    }
    // [theme.breakpoints.up("sm")]: {
    //   zIndex: "1640",
    //   position: "static",
    //   float: "none",
    //   width: "auto!important",
    //   marginTop: "0",
    //   backgroundColor: "transparent",
    //   border: "0",
    //   boxShadow: "none",
    //   color: "black"
    // }
  },
  dropdownItem: {
    ...defaultFont,
    fontSize: "21px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    position: "relative",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: "400",
    height: "100%",
    color: grayColor[8],
    whiteSpace: "nowrap",
    minHeight: "unset",
    "&:hover": {
      background: '#440099!important'
    },
    "&:hover svg": {
      color: '#fff!important'
    }
  },
  darkHover: {
    "&:hover": {
      boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 7px 10px -5px rgba(" +
        hexToRgb(grayColor[9]) +
        ", 0.4)",
      backgroundColor: grayColor[9],
      color: whiteColor
    }
  },
  primaryHover: {
    "&:hover": {
      backgroundColor: primaryColor[0],
      color: whiteColor,
      ...primaryBoxShadow
    }
  },
  infoHover: {
    "&:hover": {
      backgroundColor: infoColor[0],
      color: whiteColor,
      ...infoBoxShadow
    }
  },
  successHover: {
    "&:hover": {
      backgroundColor: successColor[0],
      color: whiteColor,
      ...successBoxShadow
    }
  },
  warningHover: {
    "&:hover": {
      backgroundColor: warningColor[0],
      color: whiteColor,
      ...warningBoxShadow
    }
  },
  dangerHover: {
    "&:hover": {
      backgroundColor: dangerColor[0],
      color: whiteColor,
      ...dangerBoxShadow
    }
  },
  roseHover: {
    "&:hover": {
      backgroundColor: roseColor[0],
      color: whiteColor,
      ...roseBoxShadow
    }
  },
  dropdownItemRTL: {
    textAlign: "right"
  },
  dropdownDividerItem: {
    margin: "5px 0",
    backgroundColor: "rgba(" + hexToRgb(blackColor) + ", 0.12)",
    height: "1px",
    overflow: "hidden"
  },
  buttonIcon: {
    width: "20px",
    height: "20px"
  },
  caret: {
    transition: "all 150ms ease-in",
    display: "inline-block",
    width: "0",
    height: "0",
    marginLeft: "4px",
    verticalAlign: "middle",
    borderTop: "4px solid",
    borderRight: "4px solid transparent",
    borderLeft: "4px solid transparent"
  },
  caretActive: {
    transform: "rotate(180deg)"
  },
  caretDropup: {
    transform: "rotate(180deg)"
  },
  caretRTL: {
    marginRight: "4px"
  },
  dropdownHeader: {
    display: "block",
    padding: "0.1875rem 1.25rem",
    fontSize: "0.75rem",
    lineHeight: "1.428571",
    color: grayColor[10],
    whiteSpace: "nowrap",
    fontWeight: "inherit",
    marginTop: "10px",
    minHeight: "24px",
    "&:hover,&:focus": {
      backgroundColor: "transparent",
      cursor: "auto"
    }
  },
  noLiPadding: {
    padding: "0"
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "flex",
      padding: "5px 10px",
      // fontSize: 21
    },
  },
  MR10: {
    marginRight: 10
  },
  MR25: {
    marginRight: 25
  },
  megamenuWrapper: {
    left: "-190px",
    width: "900px",
    display: "block",
    fontSize: '1.3125rem'
  },
  megamenuBR: {
    borderLeft: '1px solid #e0e0e0',
    borderRight: '1px solid #e0e0e0',
    [theme.breakpoints.down("sm")]: {
      border: 'none'
    },
    '@media (min-width: 960px) and (max-width: 1279px)': {
      border: 'none',
      flexGrow: 0,
      maxWidth: '100%',
      flexBasis: '100%',
    }
  },
  megamenuTitle: {
    fontFamily: 'DBHeaventRoundedMedv32',
    marginLeft: 5,
    marginRight: 5,
    "&:hover,&:focus": {
      color: '#ff7700'
    },
    '@media (max-width: 1279px)': {
      display: 'block !important',
      width: '100% !important'
    }
  },
  toggleMenuSub: {
    background: "#f3f2fa",
    padding: "10px 25px 10px 8px"
  },
  megamenuItem: {
    marginLeft: 5,
    marginRight: 5,
    whiteSpace: 'nowrap',
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    "&:hover,&:focus": {
      background: '#440099',
      borderRadius: 4,
      color: '#fff'
    },
  },
  buttonMenuOpen: {
    fontFamily: 'DBHeaventRoundedMedv32',
    color: '#440099 !important',
    "& span": {
      fontFamily: 'DBHeaventRoundedMedv32'
    }
  },
  toggleOpen: {
    position: "static!important",
    backgroundColor: "transparent",
    boxShadow: "none!important",
  }
});

export default customDropdownStyle;
