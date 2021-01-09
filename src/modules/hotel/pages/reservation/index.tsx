import React, { Fragment, useEffect } from 'react';
//Plugin
import { inject, observer } from 'mobx-react';
import qs from 'query-string';

import { ThemeProvider } from 'styled-components';
import { HotelTheme } from 'modules/hotel/theme';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle } from 'common/containers/Crypto/crypto.style';
import Content from '../reservation/Content';
import _ from 'lodash';

//Manager
import NavigationManager from 'common/Manager/NavigationManager';
import InitializeManager from 'common/Manager/InitializeManager';

//Interface
import ReservationInterface from 'modules/hotel/pages/reservation/ReservationInterface';

//Model
import RoomlistModel from "modules/hotel/models/RoomlistModel";
import BookingModel from "modules/hotel/models/ReservationModel/BookingModel";
import RoomReservationModel from 'modules/hotel/models/ReservationModel/RoomReservationModel';

interface ReservationParamInterface {
  orderRef?: string;
}

const index = inject('stores')(
  observer((props: ReservationInterface) => {

    const reservationParam:ReservationParamInterface = qs.parse(props.location.search);
    const data = InitializeManager.default.get();

    useEffect(() => {
      const orderRef = reservationParam.orderRef;
      if(orderRef){
        if (!data.data?.booking?.success) {
          NavigationManager.goTo(NavigationManager.ROUTES.HOTEL_HOME);
        } else {
          // console.log("🚀 ~ file: index.tsx ~ line 15 ~ observer ~ booking", data.data.booking);
          const hotelData = new RoomlistModel(data.data.booking.hotelblockDetail);
          const paymentSuccess = data.data.booking.paymentSuccess;
          const msgPayment = data.data.booking.msgPayment;
          const reservationDetail = new BookingModel(data.data.booking.reservationDetail);
          const searchParam = props.stores!.HotelRootStore.paramForApiSearch();
  
          const uiStore = props.stores!.HotelRootStore.ReservationStore;
  
          const roomReservations:RoomReservationModel[] = reservationDetail.blocks.map((block) => {
            return {
              blockId: block.blockId,
              amount: block.guests.length,
              ...searchParam,
            }
          })
  
          uiStore.setReservation([
            {
              hotelData: hotelData,
              roomReservation: roomReservations,
              booking: reservationDetail,
              payment: {
                success: paymentSuccess,
                orderRef: orderRef,
                msgPayment: msgPayment,
                channel: {
                  fee: 0,
                  amount: 0,
                  form_url: '',
                  icon: '',
                  secureKey: '',
                  channel: '',
                },
              },
            },
          ]);
          // listStore.init(props.location);
        }
      }
    }, [data])


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