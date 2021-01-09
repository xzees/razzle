import React from 'react'
import { Grid, Box, styles, useStyles, FontManager, ColorManager } from './styles';
import { inject, observer } from 'mobx-react';
import RoomListInterface from 'modules/hotel/pages/room_list/RoomListInterface';
import PhotoGridList from 'modules/hotel/component/PhotoGridList';
import ModalScreensMobile from 'modules/hotel/component/PhotoGridList/ModalScreensMobile';

const PhotoGallery = inject('stores')(
    observer((props: RoomListInterface) => {
    const uiStore = props.stores!.HotelRootStore;
    const hotelPhotos = uiStore.RoomlistStore.returnData.hotelInfo!.hotelPhotos;

    return (
        <ModalScreensMobile photos={hotelPhotos}>
            <PhotoGridList photoData={hotelPhotos} limit={3} isMobile={true}></PhotoGridList>
        </ModalScreensMobile>
    );
}));

export default PhotoGallery;
