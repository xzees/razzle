import React from 'react'
import { Grid, Box, styles, useStyles, FontManager, ColorManager } from './styles';
import { inject, observer } from 'mobx-react';
import RoomListInterface from 'modules/hotel/pages/room_list/RoomListInterface';
import { Link, Element, Events} from "react-scroll";

const Header = inject('stores')(
    observer((props: RoomListInterface) => {
    const uiStore = props.stores!.HotelRootStore;
    const hotelInfo = uiStore.RoomlistStore.returnData.hotelInfo;

    const hotelClassComponent = () => {
        let hotelClassA = [];
        for (var i:number = 1; i <= Number(hotelInfo?.class); i++) {
            hotelClassA.push(<Grid item><styles.HotelClass/></Grid>)
        }
        return hotelClassA;
    }

    return (
        <styles.MBox component="div" m={6}>
            <styles.HotelTitle variant="h1" component="h1">
                {hotelInfo?.name}
            </styles.HotelTitle>
            <Box component="div" m={0}>
                <Grid container direction="row">
                    {hotelClassComponent()}
                </Grid>
            </Box>
            <styles.HotelAddress>{hotelInfo?.address}</styles.HotelAddress>
        </styles.MBox>
    );
}));

export default Header;