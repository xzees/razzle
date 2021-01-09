import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Theme, StyledProps, Drawer, IconButton } from "@material-ui/core";
import Close from '@material-ui/icons/CloseRounded';
import styles from "./DrawerStyle";
import Category from './Category';

type Props = { variant?: any; drawerOpen?: any; toggleDrawer?: any; seoTour?: any; categoryData?: any; isMobile?: boolean; }
const useStyles = makeStyles<Theme, StyledProps>(styles as any);

const DrawerCategory = (props: Props) => {
  const {
    variant,
    drawerOpen,
    toggleDrawer,
    seoTour,
    categoryData,
    isMobile
  } = props;
  const classes = useStyles({} as StyledProps);
  
  return (
    <Drawer
      variant={variant}
      anchor={"right"} open={drawerOpen} onClose={toggleDrawer}
      classes={{ paper: variant == 'persistent' ? `${classes.cateDrawerPaper} ${classes.cateDrawerPaperServ}` : classes.cateDrawerPaper, modal: classes.cateDrawerModal }}
      PaperProps={{
        style: variant == 'persistent' ? { visibility: "unset" } : {}
      }}
    >
      <IconButton
        color="inherit" aria-label="open drawer" onClick={toggleDrawer}
        className={classes.cateCloseButton}
      >
        <Close className={classes.cateCloseStyle} />
      </IconButton>
      <Category seoModel={seoTour} categoryData={categoryData} isMobile={isMobile} />
    </Drawer>
  );
}

export default DrawerCategory;