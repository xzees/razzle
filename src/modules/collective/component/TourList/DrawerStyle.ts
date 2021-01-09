import {
  transition,
  boxShadow,
  drawerWidth
} from "modules/sightseeing/assets/jss/core";

const DrawerStyle = (theme: any) => ({
  cateDrawerPaper: {
    background: '#fff',
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
      // width: '20%'
      width: '60%'
    },
    [theme.breakpoints.down("lg")]: {
      // width: '30%'
      width: '70%'
    },
    [theme.breakpoints.down("md")]: {
      // width: '40%'
      width: '80%'
    },
    [theme.breakpoints.down("sm")]: {
      // width: '50%'
      width: '90%'
    },
    [theme.breakpoints.down("xs")]: {
      width: '100%'
    }
  },
  cateDrawerPaperServ: {
    opacity: "0",
    visibility: "hidden !important"
  },
  cateDrawerModal: {
    zIndex: '10000 !important'
  },
  cateCloseButton: {
    position: "absolute",
    right: "12px",
    // top: "30px",
    top: "12px",
    padding: 0,
    zIndex: "1"
  },
  cateCloseStyle: {
    fontSize: '1.875rem'
  }
});

export default DrawerStyle;