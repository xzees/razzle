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
  const isMobile = props.stores!.ScreenStore.isMobileHeader;
  const isServer = RootStore.isServer || size == 0;
  const botType = props.stores!.ScreenStore.botType;
  // console.log(size);
  // console.log(isMobile);
  // console.log(isServer);
  // console.log(botType);

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
          {<Hidden implementation="css" lgUp>{isServer ? props.mobileView : (isMobile ? props.mobileView : undefined)}</Hidden>}
          {<Hidden implementation="css" mdDown>{isServer ? props.desktopView : (!isMobile ? props.desktopView : undefined)}</Hidden>}
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