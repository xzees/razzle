import React from 'react'
import { Grid, Box, styles, backgroungWhiteStyle, useStyles, FontManager, ColorManager } from './styles';
import RoomListInterface from 'modules/hotel/pages/room_list/RoomListInterface';
import { Link, Element, Events} from "react-scroll";
import HotelRoomList from 'modules/hotel/component/HotelRoomList/Desktop';
import _ from 'lodash';
import i18n from 'utilities/I18n';

const RoomList = (props: RoomListInterface) => {
    const classes = useStyles();

    return (
        <>
            <Element name={props.refName}></Element>
            <Box component="div" p={6}>
                <styles.AccordionHeading ref={props.refComp}>
                    {i18n.t('hotel.components.hotelreview.message.filterbutton.roomtype')}
                </styles.AccordionHeading>
                <HotelRoomList {...props}/>
            </Box>
        </>
    );
};

export default RoomList;
