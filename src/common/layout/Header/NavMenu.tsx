import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List } from "@material-ui/core";
import rawData from "./MenuData.json";
import HeaderLink from "./HeaderLink";

const useStyles = makeStyles({
  list: {
    display: "block",
    marginTop: "0px",
    paddingLeft: "0",
    marginBottom: "0",
    listStyle: "none",
    padding: "0",
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
  }
});

export default function NavMenu(props: any) {
  const [menuData, setMenuData] = React.useState(rawData);
  const classes = useStyles();

  return (
    <>
      {menuData?.length > 0 ? (
        <List className={props.toggleMenu === true ? `${classes.list} ${classes.toggleMenu}` : classes.list} >
          <HeaderLink {...props} menuData={menuData} />
        </List>
      ) : undefined}
    </>
  );
}