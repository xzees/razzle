import React from 'react'
import { Grid, Box, styles, backgroungWhiteStyle, useStyles, FontManager, ColorManager } from './styles';
import { inject, observer } from 'mobx-react';
import RoomListInterface from 'modules/hotel/pages/room_list/RoomListInterface';
import { Link, Element, Events} from "react-scroll";
import HotelInfoModel from 'modules/hotel/models/HotelInfoModel';
import HotelReviewDesktop from 'modules/hotel/component/HotelReview/Desktop';
import _ from 'lodash';
import i18n from 'utilities/I18n';

const Review = inject('stores')(
    observer((props: RoomListInterface) => {
    const classes = useStyles();
    const uiStore = props.stores!.HotelRootStore;
    const hotelInfo: HotelInfoModel = uiStore.RoomlistStore.returnData.hotelInfo;

    return (
        <>
            <Element name={props.refName}></Element>
            <Box component="div" p={6} style={backgroungWhiteStyle}>
                <styles.AccordionHeading ref={props.refComp}>{i18n.t('hotel.pages.roomlist.desktop.review.header')}</styles.AccordionHeading>
                <div>
                    <HotelReviewDesktop/>
                </div>
            </Box>
        </>
    );
}));

export default Review;
