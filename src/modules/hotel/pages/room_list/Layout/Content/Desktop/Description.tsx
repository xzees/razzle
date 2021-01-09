import React from 'react'
import { Grid, Box, styles, backgroungWhiteStyle, useStyles, FontManager, ColorManager } from './styles';
import { inject, observer } from 'mobx-react';
import RoomListInterface from 'modules/hotel/pages/room_list/RoomListInterface';
import { Link, Element, Events} from "react-scroll";
import ModelGallery from 'modules/hotel/component/ModelGallery'
import PhotoGridList from 'modules/hotel/component/PhotoGridList';
import i18n from 'utilities/I18n';

const Description = inject('stores')(
    observer((props: RoomListInterface) => {
    const uiStore = props.stores!.HotelRootStore;
    const hotelInfo = uiStore.RoomlistStore.returnData.hotelInfo;

    return (
        <Box component="div" p={6} style={backgroungWhiteStyle}>
            <styles.AccordionHeading>
                {i18n.t('hotel.pages.roomlist.desktop.hoteldesc')}
            </styles.AccordionHeading>
            <Box>
                <styles.HotelDetail component="p">
                    {hotelInfo?.hotelDescription}
                </styles.HotelDetail>
            </Box>
        </Box>
    );
}));

export default Description;
