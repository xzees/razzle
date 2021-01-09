
import React from "react";
import ImageManager from "common/Manager/ImageManager";
import { AppImage } from "common/components";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, ListItemText, Typography } from "@material-ui/core";
import ArrowRight from "@material-ui/icons/ArrowForwardIosRounded";
import CustomDropdown from "./customdropdown";

import styles from "./HeaderLinkStyle";
const useStyles = makeStyles((styles as any));

const HeaderLink = (props: any) => {
  const classes = useStyles();
  let navMenu: any[] = [];
  let dropMenu: any[] = [];
  let megaMenu: any[] = [];

  const checkIcon = (param: any) => {
    switch (param) {
      case 'IconHome':
        return <AppImage src={ImageManager.default.images.common.menu.IconHome} alt="Home" className={props.toggleMenu === true ? `${classes.buttonIcon} ${classes.MR25}` : `${classes.buttonIcon} ${classes.MR10}`} />;
      case 'IconFlight':
        return <AppImage src={ImageManager.default.images.common.menu.IconFlight} alt="Flight" className={props.toggleMenu === true ? `${classes.buttonIcon} ${classes.MR25}` : `${classes.buttonIcon} ${classes.MR10}`} />;
      case 'IconHotel':
        return <AppImage src={ImageManager.default.images.common.menu.IconHotel} alt="Hotel" className={props.toggleMenu === true ? `${classes.buttonIcon} ${classes.MR25}` : `${classes.buttonIcon} ${classes.MR10}`} />;
      case 'IconTour':
        return <AppImage src={ImageManager.default.images.common.menu.IconTour} alt="Tour" className={props.toggleMenu === true ? `${classes.buttonIcon} ${classes.MR25}` : `${classes.buttonIcon} ${classes.MR10}`} />;
      case 'IconPKTour':
        return <AppImage src={ImageManager.default.images.common.menu.IconPKTour} alt="Package Tour" className={props.toggleMenu === true ? `${classes.buttonIcon} ${classes.MR25}` : `${classes.buttonIcon} ${classes.MR10}`} />;
      case 'IconSS':
        return <AppImage src={ImageManager.default.images.common.menu.IconSS} alt="Sightseeing" className={props.toggleMenu === true ? `${classes.buttonIcon} ${classes.MR25}` : `${classes.buttonIcon} ${classes.MR10}`} />;
      case 'IconInsurance':
        return <AppImage src={ImageManager.default.images.common.menu.IconInsurance} alt="Insurance" className={props.toggleMenu === true ? `${classes.buttonIcon} ${classes.MR25}` : `${classes.buttonIcon} ${classes.MR10}`} />;
      case 'IconDMC':
        return <AppImage src={ImageManager.default.images.common.menu.IconDMC} alt="DMC" className={props.toggleMenu === true ? `${classes.buttonIcon} ${classes.MR25}` : `${classes.buttonIcon} ${classes.MR10}`} />;
      case 'IconCruise':
        return <AppImage src={ImageManager.default.images.common.menu.IconCruise} alt="Cruise" className={props.toggleMenu === true ? `${classes.buttonIcon} ${classes.MR25}` : `${classes.buttonIcon} ${classes.MR10}`} />;
      case 'IconRail':
        return <AppImage src={ImageManager.default.images.common.menu.IconRail} alt="Rail" className={props.toggleMenu === true ? `${classes.buttonIcon} ${classes.MR25}` : `${classes.buttonIcon} ${classes.MR10}`} />;
      case 'IconCars':
        return <AppImage src={ImageManager.default.images.common.menu.IconCars} alt="Rent Cars" className={props.toggleMenu === true ? `${classes.buttonIcon} ${classes.MR25}` : `${classes.buttonIcon} ${classes.MR10}`} />;
      case 'IconVisa':
        return <AppImage src={ImageManager.default.images.common.menu.IconVisa} alt="Visa" className={props.toggleMenu === true ? `${classes.buttonIcon} ${classes.MR25}` : `${classes.buttonIcon} ${classes.MR10}`} />;
      default: return ''
    }
  }

  // Mobile Detect
  if (props.isMobile === true) {
    props.menuData.map((res: any, index: number) => {
      if (res.viewMode == "Mobile" || res.viewMode == "ALL") {
        if (res.collab === true) {
          let dataSub = res.subMenu;
          dropMenu = [];
          megaMenu = [];
          dataSub.map((a: any, i: number) => {
            if (a.megamenu !== true) {
              dropMenu.push(
                <a href={`${a.path}`} className={classes.dropdownLink}>
                  {props.toggleMenu ? (
                    <ArrowRight style={{ color: "#440099", display: "inline-flex", fontSize: 14, marginTop: 9, marginRight: 28, }} />
                  ) : ("")}
                  {a.label}
                </a>
              );
            } else {
              let dataMega = a.subMenu;
              megaMenu.push({
                label: a.label,
                path: a.path,
                subMenu: dataMega,
              });
            }
          });

          navMenu.push(
            <ListItem key={index} className={classes.listItem}>
              <CustomDropdown
                noLiPadding
                navDropdown
                hoverColor={props.dropdownHoverColor}
                buttonText={res.label}
                iconNav={res.buttonIcon}
                toggleSub={props.toggleMenu === true ? true : false}
                buttonProps={{
                  className: `${classes.navLink} ${classes.navLinkToggle}`,
                  color: "transparent",
                }}
                dropdownList={dropMenu}
                megaMenuList={megaMenu}
              />
            </ListItem>
          );
        } else {
          navMenu.push(
            <ListItem key={index} className={classes.listItem}>
              <ListItemText
                className={classes.listItemText}
                primary={
                  res.path != '' && res.path != '#' ?
                    <a style={{ color: "inherit" }} href={res.path}>
                      <Typography className={`${classes.navLink} ${classes.navLinkToggle}`}>
                        {checkIcon(res.buttonIcon)}{res.label}
                      </Typography>
                    </a>
                    :
                    <Typography className={`${classes.navLink} ${classes.navLinkToggle}`}>
                      {checkIcon(res.buttonIcon)}{res.label}
                    </Typography>
                }
              />
            </ListItem>
          );
        }
      }
    });
  }
  // Desktop Detect
  else {
    // Toggle Menu Desktop
    if (props.toggleMenu === true) {
      props.menuData.map((res: any, index: number) => {
        if (res.viewMode == "Mobile") {
          if (res.collab === true) {
            let dataSub = res.subMenu;
            dropMenu = [];
            megaMenu = [];
            dataSub.map((a: any, i: number) => {
              if (a.megamenu !== true) {
                dropMenu.push(
                  <a href={`${a.path}`} className={classes.dropdownLink}>
                    {props.toggleMenu ? (
                      <ArrowRight style={{ color: "#440099", display: "inline-flex", fontSize: 14, marginTop: 9, marginRight: 28, }} />
                    ) : ("")}
                    {a.label}
                  </a>
                );
              } else {
                let dataMega = a.subMenu;
                megaMenu.push({
                  label: a.label,
                  path: a.path,
                  subMenu: dataMega,
                });
              }
            });

            navMenu.push(
              <ListItem key={index} className={classes.listItem}>
                <CustomDropdown
                  noLiPadding
                  navDropdown
                  hoverColor={props.dropdownHoverColor}
                  buttonText={res.label}
                  iconNav={res.buttonIcon}
                  toggleSub={props.toggleMenu === true ? true : false}
                  buttonProps={{
                    className: props.toggleMenu === true ? `${classes.navLink} ${classes.ML9} ${classes.navLinkToggle}` : classes.navLink,
                    color: "transparent",
                  }}
                  dropdownList={dropMenu}
                  megaMenuList={megaMenu}
                />
              </ListItem>
            );
          } else {
            navMenu.push(
              <ListItem key={index} className={classes.listItem}>
                <ListItemText
                  className={classes.listItemText}
                  primary={
                    res.path != '' && res.path != '#' ?
                      <a style={{ color: "inherit" }} href={res.path}>
                        <Typography className={props.toggleMenu === true ? `${classes.navLink} ${classes.ML9} ${classes.navLinkToggle}` : classes.navLink}>
                          {checkIcon(res.buttonIcon)}{res.label}
                        </Typography>
                      </a>
                      :
                      <Typography className={props.toggleMenu === true ? `${classes.navLink} ${classes.ML9} ${classes.navLinkToggle}` : classes.navLink}>
                        {checkIcon(res.buttonIcon)}{res.label}
                      </Typography>
                  }
                />
              </ListItem>
            );
          }
        }
      });
    }
    // Navbar Desktop
    else {
      props.menuData.map((res: any, index: number) => {
        if (res.viewMode == "ALL") {
          if (res.collab === true) {
            let dataSub = res.subMenu;
            dropMenu = [];
            megaMenu = [];
            dataSub.map((a: any, i: number) => {
              if (a.megamenu !== true) {
                dropMenu.push(
                  <a href={`${a.path}`} className={classes.dropdownLink}>{a.label}</a>
                );
              } else {
                let dataMega = a.subMenu;
                megaMenu.push({
                  label: a.label,
                  path: a.path,
                  subMenu: dataMega,
                });
              }
            });

            navMenu.push(
              <ListItem key={index} className={classes.listItem}>
                <CustomDropdown
                  noLiPadding
                  navDropdown
                  hoverColor={props.dropdownHoverColor}
                  buttonText={res.label}
                  iconNav={res.buttonIcon}
                  buttonProps={{
                    className: classes.navLink,
                    color: "transparent",
                  }}
                  dropdownList={dropMenu}
                  megaMenuList={megaMenu}
                />
              </ListItem>
            );
          } else {
            navMenu.push(
              <ListItem key={index} className={classes.listItem}>
                <ListItemText
                  className={classes.listItemText}
                  primary={
                    res.path != '' && res.path != '#' ?
                      <a style={{ color: "inherit" }} href={res.path}>
                        <Typography className={classes.navLink}>
                          {checkIcon(res.buttonIcon)}{res.label}
                        </Typography>
                      </a>
                      :
                      <Typography className={classes.navLink}>
                        {checkIcon(res.buttonIcon)}{res.label}
                      </Typography>
                  }
                />
              </ListItem>
            );
          }
        }
      });
    }
  }
  return (
    <>
      {navMenu}
    </>
  )
}

export default HeaderLink;