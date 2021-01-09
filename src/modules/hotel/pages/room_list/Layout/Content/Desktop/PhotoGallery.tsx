import React from 'react'
import { Grid, Box, styles, backgroungWhiteStyle, useStyles, FontManager, ColorManager } from './styles';
import { inject, observer } from 'mobx-react';
import RoomListInterface from 'modules/hotel/pages/room_list/RoomListInterface';
import ModelGallery from 'modules/hotel/component/ModelGallery'
import PhotoGridList from 'modules/hotel/component/PhotoGridList';

const PhotoGallery = inject('stores')(
    observer((props: RoomListInterface) => {
    const uiStore = props.stores!.HotelRootStore;
    const hotelPhotos = uiStore.RoomlistStore.returnData.hotelInfo.hotelPhotos;

    return (
        <Box component="div" p={6} style={backgroungWhiteStyle}>
            <ModelGallery data={hotelPhotos}>
                <PhotoGridList photoData={hotelPhotos} limit={7} isMobile={false}></PhotoGridList>
            </ModelGallery>
        </Box>
    );
}));

export default PhotoGallery;
