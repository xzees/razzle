import React from 'react';
import { Grid, Box } from '@material-ui/core';
import _ from 'lodash';
import WifiIcon from '@material-ui/icons/Wifi';
import WcIcon from '@material-ui/icons/Wc';
import BathtubIcon from '@material-ui/icons/Bathtub';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import SearchHotelInterface from 'modules/hotel/component/SearchHotel/SearchHotelInterface';
import {
    RenderIconFacility
} from 'modules/hotel/component/Icon';
import BootstrapTooltip from 'modules/hotel/component/ToolTip/Icon';
import Outlined from 'modules/hotel/component/Button/Outlined';

import {
    ViewButton,
    divMobile,
    boxMobile,
    boxDesktop,
    box,
    removePadding
} from '../Style';
import ColorManager from 'common/Manager/ColorManager';



const NumRooms = (props: SearchHotelInterface) => {

    const {
        hotelListModel
    } = props;

    const OutlinedStyle = {
        borderColor: ColorManager.default.red,
        height: '30px',
        display: 'flex',
        color: ColorManager.default.red,

    } as React.CSSProperties

    if (hotelListModel.blockDetail.numRoomsAvailable <= 3) {
        return (
            <Grid
                className={'NumRooms'}
                style={removePadding}
                item={true}
                xs={12}
                sm={12}
                md={12}
                lg={12}
            >
                <Box
                    className={'NumRooms'}
                    display={'flex'}
                >
                    <Outlined style={OutlinedStyle}>
                        เหลือเพียง {hotelListModel.blockDetail.numRoomsAvailable} ห้องสุดท้าย
                </Outlined>
                </Box>
            </Grid>
        );
    }
    return (<></>);
};

export default NumRooms;