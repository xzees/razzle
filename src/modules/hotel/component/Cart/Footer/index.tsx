//React
import React, { useState, useEffect } from 'react';
//Plugin
import _ from 'lodash';
import { inject, observer } from 'mobx-react';
//MUI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';
//Manager
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import NavigationManager from 'common/Manager/NavigationManager';
//Component
import {
    SectionDesktop,
    Containers
} from 'modules/hotel/component/Banner/List/Style'
//Model/InterFace
import HotelRootStore from 'modules/hotel/Stores/HotelRootStore'

const index = inject('stores')(
    observer((props: any) => {
    const {isMobile} = props;

    const uiStore:HotelRootStore = props.stores!.HotelRootStore;
    const hotelReservationStore = uiStore.ReservationStore.hotels;
    const roomListHotelId = uiStore.RoomlistStore.data.hotelId;
    // console.log("🚀 ~ file: index.tsx ~ line 27 ~ observer ~ uiStore", uiStore);

    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const hideFooter = -75;
    const [footerPosition, setFooterPosition] = useState<number>(hideFooter);

    useEffect(() => {
        let roomAmount = 0;
        let priceAmount = 0;
        let reservationHotelId = 0;
        hotelReservationStore.map((hotel) => {
            reservationHotelId = hotel.hotelData.hotelId;
            const blocks = _.flatten(hotel.hotelData.block);
            hotel.roomReservation.map((room) => {
                const selectedBlock = _.find(blocks, ['blockId', room.blockId]);
                priceAmount += selectedBlock?.incrementalPrice[room.amount-1].price || 0;
                roomAmount += room.amount;
            });
        });
        setTotalPrice(priceAmount);
        setTotalAmount(roomAmount);
        if(roomAmount > 0 && roomListHotelId == reservationHotelId){
            // show when room amount > 0 and hotel id of room select is hotel id 
            setFooterPosition(0);
        }else{
            setFooterPosition(hideFooter);
        }
    }, [hotelReservationStore])


    const footerCartStyle = {backgroundColor: ColorManager.default.fifthColor, bottom: footerPosition, zIndex:999, width: '100%', padding: '10px', position: 'fixed', transition: 'all 0.2s ease-in'} as React.CSSProperties;
    const buttonCartStyle = {fontSize: (!isMobile) ? FontManager.default.TEXT_EXTRA_24 : FontManager.default.TEXT_20, backgroundColor: ColorManager.default.secondaryColor, color: ColorManager.default.white};
    const textNormalStyle = {fontSize: FontManager.default.TEXT_TINY_18, lineHeight: FontManager.default.TEXT_20, color: ColorManager.default.white, textAlign: 'right'} as React.CSSProperties;
    const numberStyle = {fontSize: FontManager.default.LARGE_MEDIUM_30, lineHeight: FontManager.default.TEXT_20, fontFamily: FontManager.default.secondaryFont};

    const gotoReserv = () => {
        NavigationManager.goTo(
            NavigationManager.ROUTES.HOTEL_RESERVATION
        );
    }

    return (
        <SectionDesktop style={footerCartStyle}> 
            <Containers>
                <Grid container spacing={3} direction="row" justify="flex-end" alignItems="center">
                    <Grid item>
                        <Typography variant="body1" style={textNormalStyle}>
                            จำนวนห้องที่เลือก <span style={numberStyle}>{totalAmount.toLocaleString()}</span> ห้อง
                        </Typography>
                        <Typography variant="body1" style={textNormalStyle}>
                            รวมเป็นเงินทั้งสิ้น <span style={numberStyle}>{totalPrice.toLocaleString()}</span> บาท
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" endIcon={<ChevronRightIcon/>} style={buttonCartStyle} onClick={() => {gotoReserv()}} disabled={totalAmount<1}>ดำเนินการต่อ </Button>
                    </Grid>
                </Grid>
            </Containers>
        </SectionDesktop>
    );
}));

export default index;