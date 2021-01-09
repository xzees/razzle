import React from 'react'
import { Grid, Box, styles, useStyles, FontManager, ColorManager, Accordion, AccordionSummary, AccordionDetails, Typography } from './styles';
import { inject, observer } from 'mobx-react';
import RoomListInterface from 'modules/hotel/pages/room_list/RoomListInterface';
import HotelInfoModel from 'modules/hotel/models/HotelInfoModel';
import HotelFacilitySlick from 'modules/hotel/component/HotelFacilitySlick'
import _ from 'lodash';
import i18n from 'utilities/I18n';

const FacilityPopular = inject('stores')(
    observer((props: RoomListInterface) => {
    const classes = useStyles();
    const uiStore = props.stores!.HotelRootStore;
    const hotelInfo: HotelInfoModel = uiStore.RoomlistStore.returnData.hotelInfo;

    return (
            <styles.MBox component="div" m={6}>
                <styles.AccordionHeading>
                    {i18n.t('hotel.pages.roomlist.desktop.facilitypupular.header')}
                </styles.AccordionHeading>
                <styles.HotelFacilityGridContainer container spacing={3}>
                    <HotelFacilitySlick data={hotelInfo?.hotelFacilities} isMobile={true}/>
                </styles.HotelFacilityGridContainer>
            </styles.MBox>
    );
}));

export default FacilityPopular;
