import React from 'react'
import { Grid, Box, styles, useStyles, FontManager, ColorManager } from './styles';
import { inject, observer } from 'mobx-react';
import RoomListInterface from 'modules/hotel/pages/room_list/RoomListInterface';
import { Link, Element, Events} from "react-scroll";
import HotelInfoModel from 'modules/hotel/models/HotelInfoModel';
import HotelRoomList from 'modules/hotel/component/HotelRoomList/Mobile';
import SortIcon from '@material-ui/icons/Sort';
import _ from 'lodash';
import i18n from 'utilities/I18n';

const RoomList = (props: any) => {
    const classes = useStyles();

    return (
        <styles.MBox component="div" p={6} style={{backgroundColor: ColorManager.default.greyColor}}>             
            <Grid container justify="space-between" alignItems="center">
                <Grid item={true} xs={9}>
                    <styles.AccordionHeading>
                        {i18n.t('hotel.components.hotelreview.message.filterbutton.roomtype')}                          
                    </styles.AccordionHeading>
                </Grid>
                <Grid item={true} xs={3} style={{textAlign:'right'}}>
                    <SortIcon></SortIcon>
                </Grid>
            </Grid>
            <HotelRoomList isMobile={true}/>
        </styles.MBox>
    );
}

export default RoomList;
