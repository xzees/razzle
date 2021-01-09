import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Theme, StyledProps, IconButton, Drawer, Backdrop } from "@material-ui/core";
import Close from '@material-ui/icons/CloseRounded';
import styles from "./style";
import ToggleMenu from "./ToggleMenu";

const useStyles = makeStyles<Theme, StyledProps>(styles as any);

interface Props {
  handleMobileToggle: any;
  mobileOpen: any;
  isMobile: boolean;
  isClient?: boolean;
}

export default function NavMobile(props: Props) {
  const classes = useStyles({} as StyledProps);
  const {
    handleMobileToggle,
    mobileOpen,
    isMobile,
    isClient
  } = props;

  return (
    <>
      <Backdrop className={classes.backdrop} open={mobileOpen} >
        <Drawer
          variant="persistent"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
            modal: classes.drawerModal
          }}
          onClose={handleMobileToggle}
          id="toggle-Menu-Mobile"
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleMobileToggle}
            className={classes.closeButtonDrawer}
          >
            <Close className={classes.closeStyle} />
          </IconButton>
          <ToggleMenu isMobile={isMobile} />
        </Drawer>
      </Backdrop>
    </>
  );
}