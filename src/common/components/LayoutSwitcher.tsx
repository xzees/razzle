import React from 'react'
import { inject, observer } from 'mobx-react';
import RootStore from 'stores';
import Hidden from '@material-ui/core/Hidden';


type Props = {
  desktopView: any,
  desktopViewClassName?: string,
  mobileView: any,
  mobileViewClassName?: string,
  className?: string,
  stores?: RootStore
}

const LayoutSwitcher = inject('stores')(observer((props: Props) => {
  const size = props.stores!.ScreenStore.currentWidth;
  // console.log("🚀 ~ file: LayoutSwitcher.tsx ~ line 18 ~ LayoutSwitcher ~ size", size)
  const isMobile = props.stores!.ScreenStore.isMobile;
  // console.log("🚀 ~ file: LayoutSwitcher.tsx ~ line 20 ~ LayoutSwitcher ~ isMobile", isMobile)
  const isServer = RootStore.isServer || size == 0;
  const botType = props.stores!.ScreenStore.botType;
  //  console.log(size);
  //  console.log(isMobile);
  //  console.log(isServer);
  //  console.log(botType);

  if (isServer) {
    if (botType == 'desktop') {
      return (
        <div className={`${props.className || ''}`} >
          <div className={props.desktopViewClassName}>{props.desktopView}</div>
        </div>
      )
    } else if (botType == 'mobile') {
      return (
        <div className={`${props.className || ''}`} >
          <div className={props.mobileViewClassName}>{props.mobileView}</div>
        </div>
      )
    } else {
      return (
        <div className={`${props.className || ''}`} >
          {/* {<div className={`${isMobile ? props.className : '' || ''} d-md-none`}>{isServer ? props.mobileView : (isMobile ? props.mobileView : undefined)}</div>}
          {<div className={`${!isMobile ? props.className : '' || ''} d-none d-md-block`}>{isServer ? props.desktopView : (!isMobile ? props.desktopView : undefined)}</div>} */}
          {<Hidden implementation="css" smUp>{isServer ? props.mobileView : (isMobile ? props.mobileView : undefined)}</Hidden>}
          {<Hidden implementation="css" xsDown>{isServer ? props.desktopView : (!isMobile ? props.desktopView : undefined)}</Hidden>}
        </div>
      )
    }
  } else {
    return (
      <div className={`${props.className || ''}`} >
        {isMobile ? props.mobileView : props.desktopView}
      </div>
    )
  }
}))


export default LayoutSwitcher;