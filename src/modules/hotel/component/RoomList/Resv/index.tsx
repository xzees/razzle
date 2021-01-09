import React from 'react';
import FillFull from 'modules/hotel/component/Button/FillFull';
import ColorManager from 'common/Manager/ColorManager';
import i18n from 'utilities/I18n';
import { inject, observer } from 'mobx-react';
import HotelRoomListInterface from 'modules/hotel/component/HotelRoomList/HotelRoomListInterface';
import ReservationModel from 'modules/hotel/models/ReservationModel';
import BlockModel from 'modules/hotel/models/BlockModel';
import NavigationManager from 'common/Manager/NavigationManager';
import qs from 'query-string';

interface ReservationInterface extends HotelRoomListInterface {
  isMobile: boolean;
  block: BlockModel;
  style: any,
}

const index = inject('stores')(
  observer((props: ReservationInterface) => {
  const block = props.block;
  const uiStore = props.stores!.HotelRootStore;
  // const roomlistStore = uiStore.RoomlistStore;
  // const hotelData = roomlistStore.data;
  // const reservation = uiStore.ReservationStore.reservation;
  // const funcBtn = (e: any) => {
  //   window.location.href = href;
  // };

  //console.log(uiStore.RoomlistStore.returnData);
  

  const onBtnClick = () => {
    // console.log("🚀 ~ file: index.tsx ~ line 21 ~ observer ~ block", block)
    // if(block.selectedAmount > 0){
    //   uiStore.ReservationStore.onReservationClick(block.selectedAmount, block.blockId);
    //   // NavigationManager.goTo(
    //   //   NavigationManager.ROUTES.HOTEL_RESERVATION
    //   // );
    // }else{
    //   alert("กรุณาเลือกจำนวนห้องพัก");
    // }
  }

  return (
    
      <FillFull 
        backgroundColor={ColorManager.default.orangeColor}
        stlye={props.style}
        onClick={() => {onBtnClick()}}
      >
        {i18n.t('hotel.desktop.btn.booking')}
      </FillFull>
  );
}));

export default index;