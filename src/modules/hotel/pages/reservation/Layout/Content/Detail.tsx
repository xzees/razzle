import React, {useState, useEffect} from 'react'
import { inject, observer } from 'mobx-react';
import RoomListInterface from 'modules/hotel/pages/room_list/RoomListInterface';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FontManager from 'modules/hotel/Manager/FontManager';
import i18n from 'utilities/I18n';
import _ from 'lodash';
import { 
    formatDateForAutocomplete,
    getDiffDate
} from 'common/Manager/Helper';

const Detail = inject('stores')(
    observer((props: RoomListInterface) => {
        const hotelReservationStore = props.stores!.HotelRootStore.ReservationStore.hotels;
        // console.log("🚀 ~ file: Detail.tsx ~ line 26 ~ observer ~ hotelReservationStore", hotelReservationStore)
        const hotelData = hotelReservationStore[0]?.hotelData;
        const roomReservation = hotelReservationStore[0]?.roomReservation;
        const payment = hotelReservationStore[0]?.payment;

        const blockData = _.flatten(hotelData?.block);

        const dateDiff = getDiffDate(new Date(hotelData?.checkin), new Date(hotelData?.checkout));
        const [totalPrice, setTotalPrice] = useState<number>(0);

        const textHeaderStyle = {fontSize: FontManager.default.TEXT_MEDIUM_22, fontFamily: FontManager.default.secondaryFont};
        const textBoldStyle = {fontSize: FontManager.default.TEXT_TINY_18, fontFamily: FontManager.default.secondaryFont};
        const textnormalStyle = {fontSize: FontManager.default.TEXT_TINY_18};
        const dividerStyle = {marginTop: '8px', marginBottom: '8px'};
        const textH2Style = {fontSize: FontManager.default.LARGE_28, fontFamily: FontManager.default.secondaryFont};
        const cardStyle = {marginBottom: '16px'};

        const detailList = () => {
            const list = hotelReservationStore.map((h) => {
                h.hotelData.block
                const hBlock = _.flatten(h.hotelData.block);
                const room = h.roomReservation.map((r) => {
                    const block = _.find(hBlock, ['blockId', r.blockId]);
                    if(block){
                        return (
                            <>
                                <Grid item xs={8}>
                                    <Typography variant="body1" style={textnormalStyle}>
                                        - {block?.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography variant="body1" style={textnormalStyle} align="center">
                                        {r.amount}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography variant="body1" style={textnormalStyle} align="right">
                                        {block.incrementalPrice[r.amount-1].price.toLocaleString()}
                                    </Typography>
                                </Grid>
                            </>
                        );
                    }else{
                        return null;
                    }
                });
                return (<><Typography variant="body1" style={textBoldStyle}>{i18n.t('common.hotel')} {h.hotelData.hotelInfo.name} </Typography> {room} </>);
            })
            return (<>{list}</>)
        }


        useEffect(() => {
            let p = 0;
            hotelReservationStore.map((h) => {
                h.hotelData.block
                const hBlock = _.flatten(h.hotelData.block);
                h.roomReservation.map((r) => {
                    const block = _.find(hBlock, ['blockId', r.blockId]);
                    if(block){
                       p += block.incrementalPrice[r.amount-1].price;
                    }
                });
            });
            setTotalPrice(p);
        }, [hotelReservationStore])

        return (
            <Box component="div">
                <Card style={cardStyle}>
                    <CardContent>
                        <Typography variant="h3" component="h3" style={textHeaderStyle}>
                            {i18n.t('hotel.desktop.reservation.reservationdetail')}
                        </Typography>
                        <Divider style={dividerStyle}/>
                        <Grid container spacing={0}>
                            <Grid item xs={6}>
                                <Typography variant="body1" style={textnormalStyle}>
                                    {i18n.t('hotel.components.datepicker.input.lblchkin')} :
                                </Typography>
                                <Typography variant="body1" style={textBoldStyle}>
                                    {formatDateForAutocomplete(new Date(hotelData?.checkin))}
                                </Typography>
                                <Typography variant="body1" style={textnormalStyle}>
                                    {i18n.t('hotel.pages.roomlist.desktop.policy.chkintime')} {hotelData?.hotelInfo.checkinCheckoutTimes.checkinFrom} {i18n.t('hotel.desktop.reservation.oclock')}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1" style={textnormalStyle}>
                                    {i18n.t('hotel.components.datepicker.input.lblchkout')} :
                                </Typography>
                                <Typography variant="body1" style={textBoldStyle}>
                                    {formatDateForAutocomplete(new Date(hotelData?.checkout))}
                                </Typography>
                                <Typography variant="body1" style={textnormalStyle}>
                                    {i18n.t('hotel.pages.roomlist.desktop.policy.earlychkout')} {hotelData?.hotelInfo.checkinCheckoutTimes.checkoutTo} {i18n.t('hotel.desktop.reservation.oclock')}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1" style={textnormalStyle}>
                                    {i18n.t('hotel.desktop.reservation.periodofstay')} :
                                </Typography>
                                <Typography variant="body1" style={textBoldStyle}>
                                    {i18n.t('flight.detail.price.detail.normal.distribution.table.row.header.unit')} {dateDiff} {i18n.t('hotel.desktop.reservation.night')}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

                <Card style={cardStyle}>
                    <CardContent>
                        <Typography variant="h3" component="h3" style={textHeaderStyle}>
                            {i18n.t('hotel.desktop.reservation.yourorder')}
                        </Typography>
                        <Divider style={dividerStyle}/>
                        <Grid container spacing={0}>
                        <Grid item xs={8}>
                            <Typography variant="body1" style={textnormalStyle}>
                                {i18n.t('hotel.search.room')}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="body1" style={textnormalStyle} align="center">
                                {i18n.t('flight.detail.price.detail.normal.distribution.table.row.header.unit')}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="body1" style={textnormalStyle} align="right">
                                {i18n.t('common.price')}
                            </Typography>
                        </Grid>
                        {detailList()}
                        </Grid>
                        <Divider style={dividerStyle}/>    
                        <Grid container spacing={0}>
                            <Grid item xs={8}>
                                <Typography variant="body1" style={textH2Style}>
                                    {i18n.t('price.detail.table.header.total.price')}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="body1" style={textH2Style} align="right">
                                    {totalPrice.toLocaleString()}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        );
    })
);

export default Detail;