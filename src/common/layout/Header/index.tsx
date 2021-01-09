import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import LayoutSwitcher from 'common/components/LayoutSwitcherHeader';
import { makeStyles } from "@material-ui/core/styles";
import { Theme, StyledProps, useMediaQuery } from "@material-ui/core";
import styles from "./style";
import TopDesktop from "./TopDesktop";
import TopMobile from "./TopMobile";

const useStyles = makeStyles<Theme, StyledProps>(styles as any);

export default function Header(props: any) {
  const [deskOpen, setDeskOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles({} as StyledProps);
  // เช็คขนาดหน้าจอ
  const matches = useMediaQuery('(max-width:1279px)');
  // const isClient = typeof window === 'object';
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const handleDeskToggle = () => {
    setDeskOpen(!deskOpen);
    if (deskOpen) {
      document.body.classList.remove(classes.menuOpen);
    } else {
      document.body.classList.add(classes.menuOpen);
    }
  };
  const handleMobileToggle = () => {
    setMobileOpen(!mobileOpen);
    if (mobileOpen) {
      document.body.classList.remove(classes.menuOpen);
    } else {
      document.body.classList.add(classes.menuOpen);
    }
  };
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;

    const windowsScrollTop = window.pageYOffset;
    if (matches == false) {
      if (windowsScrollTop > changeColorOnScroll.height) {
        document.body.getElementsByTagName("header")[0]?.classList.remove(classes[color]);
        document.body.getElementsByTagName("header")[0]?.classList.add(classes[changeColorOnScroll.color]);
      } else {
        document.body.getElementsByTagName("header")[0]?.classList.add(classes[color]);
        document.body.getElementsByTagName("header")[0]?.classList.remove(classes[changeColorOnScroll.color]);
      }
    } else {
      const header: any = document.getElementById("header-top-mobile");
      const sticky = header?.offsetTop;
      if (windowsScrollTop > sticky) {
        header?.classList.add(classes.fixedMobile);
      } else {
        header?.classList.remove(classes.fixedMobile);
      }
    }
  };
  const { color, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });

  // ฟังก์ชั่นการทำงานของตัวเลือกค่าเงิน
  const [currency, setCurrency] = React.useState("THB");
  const currencyChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCurrency(event.target.value as string);
    console.log('Currency :', event.target.value)
  };
  // ฟังก์ชั่นการทำงานของตัวเลือกภาษา
  const onSelectFlag = (countryCode: any) => {
    console.log('Language :', countryCode)
  }

  const isClient = typeof window === "object";

  return (
    <>
      <LayoutSwitcher
        desktopView={
          <TopDesktop
            currencyChange={currencyChange}
            appBarClasses={appBarClasses}
            handleDeskToggle={handleDeskToggle}
            deskOpen={deskOpen}
            isMobile={false}
            isClient={isClient}
          />
        }
        mobileView={
          <TopMobile
            handleMobileToggle={handleMobileToggle}
            mobileOpen={mobileOpen}
            isMobile={true}
            isClient={isClient}
          />
        }
      />
    </>
  )
}

Header.defaultProp = {
  color: "white",
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark",
  ]),
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark",
    ]).isRequired,
  }),
};
