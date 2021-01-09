import React from 'react'
import { Box, styles, backgroungWhiteStyle } from './styles';
import { inject, observer } from 'mobx-react';
import RoomListInterface from 'modules/hotel/pages/room_list/RoomListInterface';
import HotelInfoModel from 'modules/hotel/models/HotelInfoModel';
import HotelFacilitySlick from 'modules/hotel/component/HotelFacilitySlick'
import _ from 'lodash';
import i18n from 'utilities/I18n';

const FacilityPopular = inject('stores')(
    observer((props: RoomListInterface) => {
    const uiStore = props.stores!.HotelRootStore;
    const hotelInfo: HotelInfoModel = uiStore.RoomlistStore.returnData.hotelInfo;

    return (
        <Box component="div" p={6} style={backgroungWhiteStyle}>
            <styles.AccordionHeading>
                {i18n.t('hotel.pages.roomlist.desktop.facilitypupular.header')}
            </styles.AccordionHeading>
            <styles.HotelFacilityGridContainer container spacing={6}>
                <HotelFacilitySlick data={hotelInfo?.hotelFacilities} isMobile={false}/>
            </styles.HotelFacilityGridContainer>
        </Box>
    );
}));

export default FacilityPopular;
