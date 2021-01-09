import React, { Fragment, useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle } from 'common/containers/Crypto/crypto.style';
import { cryptoTheme } from 'common/src/theme/crypto';
import Content from './Content';
import _ from 'lodash';
import HotelListInterface from 'modules/hotel/pages/hotel_list/HotelListInterface';

const index = inject('stores')(
  observer((props: HotelListInterface) => {
    
    const listStore = props.stores!.HotelRootStore.ListStore;
   
    listStore.init(props.location);
    

    const siteEffect = () => {
        listStore.setupSocket(props.location);  
    };
    
    useEffect(siteEffect);
    
    return (
      <ThemeProvider theme={cryptoTheme}>
        <Fragment>
          <ResetCSS />
          <GlobalStyle />
          <Content {...props} />
        </Fragment>
      </ThemeProvider>
    );
  }));

export default index;