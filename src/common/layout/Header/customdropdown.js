import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, MenuList, ClickAwayListener, Paper, Grow, FormControlLabel, Grid } from "@material-ui/core";
// core components
import Button from "modules/sightseeing/components/Button";
import styles from "./customdropdownstyle";
// import useWindowSize from "common/layout/windowSize";
import ImageManager from "common/Manager/ImageManager";
import { AppImage } from "common/components";

import AddIcon from '@material-ui/icons/AddCircleOutlineRounded';
import RemoveCIcon from '@material-ui/icons/RemoveCircleOutlineRounded';

const useStyles = makeStyles(styles);
const useStyles1 = makeStyles((theme) => ({
  iconToggle: {
    color: '#440099!important',
    width: '24px!important',
    height: '24px!important',
    position: 'absolute!important',
    right: '0!important',
    top: '25%!important',
    pointerEvents: 'none!important'
  }
}));

export default function CustomDropdown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const size = useWindowSize();
  const [checked, setChecked] = React.useState(false);

  const handleClick = (event) => {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
      setChecked(false);
      toggleSub ? event.target.classList.remove(classes.buttonMenuOpen) : ''
    } else {
      setChecked(true);
      setAnchorEl(event.currentTarget);
      toggleSub ? event.target.classList.add(classes.buttonMenuOpen) : ''
    }
  };
  const handleClose = (event) => {
    if (anchorEl !== null) {
      if (anchorEl.contains(event.target)) {
        return;
      }
      setChecked(false);
      setAnchorEl(null);
    }
  };
  const handleCloseMenu = (param) => {
    setAnchorEl(null);
    if (props && props.onClick) {
      props.onClick(param);
    }
  };
  const {
    // id,
    buttonText,
    // caretView,
    // buttonIcon,
    dropdownList,
    buttonProps,
    dropup,
    // dropdownHeader,
    caret,
    hoverColor,
    // dropPlacement,
    rtlActive,
    noLiPadding,
    innerDropDown,
    megaMenuList,
    navDropdown,
    iconNav,
    toggleSub,
  } = props;
  const classes = useStyles();
  const classes1 = useStyles1();
  const caretClasses = classNames({
    [classes.caret]: true,
    [classes.caretDropup]: dropup && !anchorEl,
    [classes.caretActive]: Boolean(anchorEl) && !dropup,
    [classes.caretRTL]: rtlActive,
  });
  const dropdownItem = classNames({
    [classes.dropdownItem]: true,
    [classes[hoverColor + "Hover"]]: true,
    [classes.noLiPadding]: noLiPadding,
    [classes.dropdownItemRTL]: rtlActive,
  });

  const checkMenu = (param) => {
    if (param == 'IconTour') {
      return classes.megamenuWrapper;
    }
  }
  const checkIcon = (param) => {
    switch (param) {
      case 'IconHome':
        return <AppImage src={ImageManager.default.images.common.menu.IconHome} alt="Home" className={toggleSub === true ? `${classes.buttonIcon} ${classes.MR25}` : `${classes.buttonIcon} ${classes.MR10}`} />;
      case 'IconFlight':
        return <AppImage src={ImageManager.default.images.common.menu.IconFlight} alt="Flight" className={toggleSub === true ? `${classes.buttonIcon} ${classes.MR25}` : `${classes.buttonIcon} ${classes.MR10}`} />;
      case 'IconHotel':
        return <AppImage src={ImageManager.default.images.common.menu.IconHotel} alt="Hotel" className={toggleSub === true ? `${classes.buttonIcon} ${classes.MR25}` : `${classes.buttonIcon} ${classes.MR10}`} />;
      case 'IconTour':
        return <AppImage src={ImageManager.default.images.common.menu.IconTour} alt="Tour" className={toggleSub === true ? `${classes.buttonIcon} ${classes.MR25}` : `${classes.buttonIcon} ${classes.MR10}`} />;
      case 'IconPKTour':
        return <AppImage src={ImageManager.default.images.common.menu.IconPKTour} alt="Package Tour" className={toggleSub === true ? `${classes.buttonIcon} ${classes.MR25}` : `${classes.buttonIcon} ${classes.MR10}`} />;
      case 'IconSS':
        return <AppImage src={ImageManager.default.images.common.menu.IconSS} alt="Sightseeing" className={toggleSub === true ? `${classes.buttonIcon} ${classes.MR25}` : `${classes.buttonIcon} ${classes.MR10}`} />;
      case 'IconInsurance':
        return <AppImage src={ImageManager.default.images.common.menu.IconInsurance} alt="Insurance" className={toggleSub === true ? `${classes.buttonIcon} ${classes.MR25}` : `${classes.buttonIcon} ${classes.MR10}`} />;
      case 'IconDMC':
        return <AppImage src={ImageManager.default.images.common.menu.IconDMC} alt="DMC" className={toggleSub === true ? `${classes.buttonIcon} ${classes.MR25}` : `${classes.buttonIcon} ${classes.MR10}`} />;
      case 'IconCruise':
        return <AppImage src={ImageManager.default.images.common.menu.IconCruise} alt="Cruise" className={toggleSub === true ? `${classes.buttonIcon} ${classes.MR25}` : `${classes.buttonIcon} ${classes.MR10}`} />;
      case 'IconRail':
        return <AppImage src={ImageManager.default.images.common.menu.IconRail} alt="Rail" className={toggleSub === true ? `${classes.buttonIcon} ${classes.MR25}` : `${classes.buttonIcon} ${classes.MR10}`} />;
      case 'IconCars':
        return <AppImage src={ImageManager.default.images.common.menu.IconCars} alt="Rent Cars" className={toggleSub === true ? `${classes.buttonIcon} ${classes.MR25}` : `${classes.buttonIcon} ${classes.MR10}`} />;
      case 'IconVisa':
        return <AppImage src={ImageManager.default.images.common.menu.IconVisa} alt="Visa" className={toggleSub === true ? `${classes.buttonIcon} ${classes.MR25}` : `${classes.buttonIcon} ${classes.MR10}`} />;
      default: return ''
    }
  }
  const changeIconToggle = () => {
    if (Boolean(!anchorEl)) {
      return <AddIcon className={classes1.iconToggle} />
    } else {
      return <RemoveCIcon className={classes1.iconToggle} />
    }
  }

  const dropDownMenu = (
    <MenuList role="menu" className={toggleSub === true ? `${classes.menuList} ${classes.toggleMenuSub}` : classes.menuList}>
      {/* {dropdownHeader !== undefined ? (
        <MenuItem
          onClick={() => handleCloseMenu(dropdownHeader)}
          className={classes.dropdownHeader}
        >
          {dropdownHeader}
        </MenuItem>
      ) : null} */}

      {dropdownList.map((prop, key) => {
        return (
          <MenuItem
            key={key}
            onClick={() => handleCloseMenu(prop)}
            className={dropdownItem}
          >
            {prop}
          </MenuItem>
        );
      })}

      <Grid container>
        {megaMenuList.map((a, key) => {
          return (
            <Grid key={key} item xs={12} md={key == 1 ? 2 : 5} className={key == 1 ? classes.megamenuBR : classes.megaTour}>
              <a href={`${a.path}`} className={`${classes.dropdownLink} ${classes.megamenuTitle}`}>
                {a.label}
              </a>
              <Grid container>
                {a.subMenu.map((b, index) => {
                  if (toggleSub) {
                    return (
                      <Grid key={index} item xs={6}>
                        <a href={`${b.path}`} className={`${classes.dropdownLink} ${classes.megamenuItem}`}
                          style={{ border: '1px solid #888aaa', background: '#fff', borderRadius: 6, color: '#000', margin: '5px 15px', padding: 10 }}>
                          {b.label}
                        </a>
                      </Grid>
                    );
                  }
                  else {
                    if (key == 1) {
                      return (
                        <Grid key={index} item xs={12} md={12}>
                          <a href={`${b.path}`} className={`${classes.dropdownLink} ${classes.megamenuItem}`}>{b.label}</a>
                        </Grid>
                      );
                    } else {
                      return (
                        <Grid key={index} item xs={12} md={6}>
                          <a href={`${b.path}`} className={`${classes.dropdownLink} ${classes.megamenuItem}`}>{b.label}</a>
                        </Grid>
                      );
                    }
                  }
                })}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </MenuList>
  );

  return (
    <>
      <div className={innerDropDown ? classes.innerManager : classes.manager}>
        <FormControlLabel
          style={{ display: "block", margin: 0 }}
          control={
            <>
              <Button
                aria-label={buttonText !== undefined ? buttonText : null}
                aria-owns={anchorEl ? "menu-list" : null}
                aria-haspopup="true"
                {...buttonProps}
                onClick={handleClick}
                endIcon={toggleSub ? changeIconToggle() : caret ? (<b className={`${caretClasses}`} />) : null}
              >
                {checkIcon(iconNav)}
                {buttonText !== undefined ? buttonText : null}
              </Button>
              <Grow
                in={checked}
                style={dropup ? { transformOrigin: "0 100% 0" } : { transformOrigin: "0 0 0" }}
                className={`${classNames({
                  [classes.toggleOpen]: toggleSub && checked && navDropdown,
                  [classes.popperClose]: !checked,
                  [classes.pooperResponsive]: true,
                  [classes.pooperNav]: checked && navDropdown,
                })} ${checkMenu(iconNav)}`}
              >
                <Paper elevation={4} className={classes.dropdown} style={{ position: "absolute" }} >
                  {!toggleSub ? <ClickAwayListener onClickAway={handleClose}>
                    {dropDownMenu}
                  </ClickAwayListener> : dropDownMenu}
                </Paper>
              </Grow>
            </>
          }
        />
      </div>
    </>
  );
}

CustomDropdown.defaultProps = {
  caret: true,
  dropup: false,
  hoverColor: "primary",
};

CustomDropdown.propTypes = {
  hoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
  ]),
  buttonText: PropTypes.node,
  buttonIcon: PropTypes.object,
  dropdownList: PropTypes.array,
  buttonProps: PropTypes.object,
  dropup: PropTypes.bool,
  dropdownHeader: PropTypes.node,
  rtlActive: PropTypes.bool,
  caret: PropTypes.bool,
  dropPlacement: PropTypes.oneOf([
    "bottom",
    "top",
    "right",
    "left",
    "bottom-start",
    "bottom-end",
    "top-start",
    "top-end",
    "right-start",
    "right-end",
    "left-start",
    "left-end",
  ]),
  megaMenuList: PropTypes.array,
  noLiPadding: PropTypes.bool,
  innerDropDown: PropTypes.bool,
  navDropdown: PropTypes.bool,
  // This is a function that returns the clicked menu item
  onClick: PropTypes.func,
  iconNav: PropTypes.string,
  toggleSub: PropTypes.bool,
};
