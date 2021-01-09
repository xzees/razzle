import React from 'react'
import { Grid, Box, styles, useStyles, FontManager, ColorManager } from './styles';
import { inject, observer } from 'mobx-react';
import RoomListInterface from 'modules/hotel/pages/room_list/RoomListInterface';
import HotelInfoModel from 'modules/hotel/models/HotelInfoModel';
import RelateHotel from 'modules/hotel/component/Relate';
import _ from 'lodash';
import i18n from 'utilities/I18n';

const Relate = inject('stores')(
    observer((props: RoomListInterface) => {
    const classes = useStyles();
    const uiStore = props.stores!.HotelRootStore;
    const hotelInfo: HotelInfoModel = uiStore.RoomlistStore.returnData.hotelInfo;

    return (
        <styles.MBox component="div" p={6} style={{backgroundColor: ColorManager.default.greyColor}}>
            <styles.AccordionHeading ref={props.refComp}>{i18n.t('hotel.pages.roomlist.desktop.relate.header')}</styles.AccordionHeading>
            <div>
                <RelateHotel isMobile={true} {...props}/>
            </div>
        </styles.MBox>
    );
}));

export default Relate;
