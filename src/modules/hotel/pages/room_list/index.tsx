import React, {  Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import { HotelTheme } from 'modules/hotel/theme';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle } from 'common/containers/Crypto/crypto.style';
import Content from '../room_list/Content';
import _ from 'lodash';
import qs from 'query-string'
import RoomListInterface from 'modules/hotel/pages/room_list/RoomListInterface';

export const StoreContext: any = React.createContext<any>({});

const index = inject('stores')(
  observer((props: RoomListInterface) => {
  
  const uiStore = props.stores!.HotelRootStore;
  // uiStore.ReservationStore.clearHotelReservation();
  
  const [locationState , setLocationState] = React.useState({})
  // console.log("page room list render" , locationState)

    
  if(!_.isEqual(qs.parse(props.location.search), locationState)) {
    uiStore.RoomlistStore.init(props.location);
    setLocationState(qs.parse(props.location.search))
  }

  return (
      <ThemeProvider theme={HotelTheme}>
        <Fragment>
          <ResetCSS />
          <GlobalStyle />   
          <Content {...props} />
        </Fragment>
      </ThemeProvider>
  ); 
}));

export default index;