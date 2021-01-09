import React from "react";
import Sticky from 'react-stickynode';
import Container from "common/src/components/UI/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Theme, StyledProps, AppBar, Toolbar, IconButton, Drawer, Backdrop } from "@material-ui/core";
import Menu from '@material-ui/icons/MenuRounded';
import Close from '@material-ui/icons/CloseRounded';
import styles from "./style";
import NavMenu from "./NavMenu";
import ToggleMenu from "./ToggleMenu";

const useStyles = makeStyles<Theme, StyledProps>(styles as any);

export default function NavDesk(props: any) {
  const classes = useStyles({} as StyledProps);
  const {
    appBarClasses,
    handleDeskToggle,
    deskOpen,
    isMobile,
    isClient
  } = props;

  React.useEffect(() => {
    var element: any = document.getElementById('header-menu');
    element.style.position = null;
  }, [])

  return (
    <>
      <Sticky innerZ={9999} activeClass="sticky-nav-active">
        <AppBar id="header-menu" className={appBarClasses} style={{ position: 'absolute' }}>
          <Container>
            <Toolbar className={classes.toolBarPD0}>
              <a href="https://www.thaitravelcenter.com/th/" title="Thai Travel Center" id="stickyLogo" className={classes.stickyLogo}></a>
              <div className={classes.collapse}>
                <NavMenu {...props} toggleMenu={false} />
              </div>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDeskToggle}
                className={classes.customButton}
              >
                <Menu className={classes.menuStyle} />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </Sticky>

      <Backdrop className={classes.backdrop} open={deskOpen} >
        <Drawer
          variant="persistent"
          anchor={"right"}
          open={deskOpen}
          classes={{
            paper: classes.drawerPaper,
            modal: classes.drawerModal
          }}
          onClose={handleDeskToggle}
          id="toggle-Menu"
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDeskToggle}
            className={classes.closeButtonDrawer}
          >
            <Close className={classes.closeStyle} />
          </IconButton>
          <ToggleMenu />
        </Drawer>
      </Backdrop>
    </>
  );
}