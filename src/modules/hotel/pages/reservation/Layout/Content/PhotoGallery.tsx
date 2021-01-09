import React from 'react'
import { Grid, Box, styles, backgroungWhiteStyle, useStyles, FontManager, ColorManager } from './styles';
import { inject, observer } from 'mobx-react';
import RoomListInterface from 'modules/hotel/pages/room_list/RoomListInterface';
import ModelGallery from 'modules/hotel/component/ModelGallery'
import PhotoGridList from 'modules/hotel/component/PhotoGridList';
import HotelInfoModel from 'modules/hotel/models/HotelInfoModel';

const PhotoGallery = inject('stores')(
    observer((props: RoomListInterface) => {
    const isMobile = props.isMobile;
    const hotelReservationStore = props.stores!.HotelRootStore.ReservationStore.hotels;
    const hotelInfo:HotelInfoModel = hotelReservationStore[0]?.hotelData.hotelInfo;
    const hotelPhotos = hotelInfo?.hotelPhotos;

    return (
        <Box component="div" p={2}>
            <ModelGallery data={hotelPhotos}>
                <PhotoGridList photoData={hotelPhotos} limit={(!isMobile) ? 7 : 3 } isMobile={isMobile}></PhotoGridList>
            </ModelGallery>
        </Box>
    );
}));

export default PhotoGallery;
