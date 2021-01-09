import React from 'react'
import LocationShareFavoriteIcon from 'modules/hotel/component/LocationShareFavoriteIcon';
import { Grid, Box, styles, backgroungWhiteStyle, useStyles, FontManager, ColorManager } from './styles';
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
        <>
            <Element name={props.refName}></Element>
            <Box component="div" p={6} style={backgroungWhiteStyle}>
                <Grid container spacing={3}>
                    <Grid item xs={9}>
                        <styles.HotelTitle component="h1" ref={props.refComp}>
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
                    <Grid item xs={3}>
                        <Grid container direction="row" justify="flex-end" alignItems="center">
                            <LocationShareFavoriteIcon color={ColorManager.default.fourthColor} {...props}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}));

export default Header;