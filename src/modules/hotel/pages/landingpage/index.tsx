import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { autorun } from 'mobx';
import RootStore from 'stores'
import { ThemeProvider } from 'styled-components';
import { HotelTheme } from 'modules/hotel/theme';
import { ResetCSS } from 'common/src/assets/css/style';
import Banner from 'modules/hotel/component/Banner'
import { GlobalStyle } from 'common/containers/Crypto/crypto.style';
import Brand from 'modules/hotel/component/Brand';
import HotelManager from 'modules/hotel/Manager/HotelManager';
import Store from 'modules/hotel/interface/Component/Store';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/hotel/Manager/FontManager';
import InitializeManager from 'common/Manager/InitializeManager';
interface Iprops {
  className?: string;
  stores?: RootStore;
  tour?: string;
}

const index = inject('stores')(
  observer((props: Store) => {

  React.useEffect(()=>{
    props.stores?.HotelRootStore.AutocompleteStore.setDefault()
    props.stores?.HotelRootStore.DatepickerStore.setDefault()
    props.stores?.HotelRootStore.GuestStore.setDefault()
  });

  return (
    <ThemeProvider theme={HotelTheme}>
      <Fragment>
        <ResetCSS />
        <GlobalStyle />
        <Banner />
        <Brand />
      </Fragment>
    </ThemeProvider>
  );
}));

export default index;