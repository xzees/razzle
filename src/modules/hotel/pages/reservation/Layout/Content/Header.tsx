import React from 'react'
import { inject, observer } from 'mobx-react';

import RoomListInterface from 'modules/hotel/pages/room_list/RoomListInterface';
import { Grid, Box, Button, styles, useStyles, FontManager, ColorManager } from './styles';
import HotelInfoModel from 'modules/hotel/models/HotelInfoModel';

const Header = inject('stores')(
    observer((props: RoomListInterface) => {
    const hotelReservationStore = props.stores!.HotelRootStore.ReservationStore.hotels;
    const hotelInfo:HotelInfoModel = hotelReservationStore[0]?.hotelData.hotelInfo;
    
    const hotelClassComponent = () => {
        let hotelClassA = [];
        for (var i:number = 1; i <= Number(hotelInfo?.class); i++) {
            hotelClassA.push(<Grid item><styles.HotelClass/></Grid>)
        }
        return hotelClassA;
    }

    return (
            <Box component="div" p={2}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <styles.HotelTitle component="h1">
                            {hotelInfo?.name}
                        </styles.HotelTitle>
                        <Grid container direction="row">
                            { (Number(hotelInfo?.class) > 0) ? 
                            <>
                            {hotelClassComponent()}
                            <styles.HotelDetailVerticalDivider orientation="vertical" flexItem />
                            </> : null }
                            <Grid item>
                                <styles.HotelAddress>
                                    {hotelInfo?.address}
                                </styles.HotelAddress>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* <Grid item md={3} xs={12}>
                        <Grid container direction="row" justify="flex-end" alignItems="center">
                            <Button variant="outlined" color="primary" href="#outlined-buttons" style={{fontSize: FontManager.default.TEXT_TINY_18,}}>
                                เปลี่ยนแปลงห้องพัก
                            </Button>
                        </Grid>
                    </Grid> */}
                </Grid>
            </Box>
    );
}));

export default Header;