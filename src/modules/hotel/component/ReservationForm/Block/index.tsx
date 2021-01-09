//React
import React from 'react'
//Plugin
import _ from 'lodash';
//MUI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
//Model
import ReservationHotelModel from 'modules/hotel/models/ReservationModel/ReservationHotelModel';
//Compoments
import Option from 'modules/hotel/component/RoomList/Option';
import BedOption from 'modules/hotel/component/ReservationForm/Block/BedOption';
import BlockPolicy from 'modules/hotel/component/ReservationForm/Block/Policy';
//Style
import { cardStyle, labelStyle, textHeaderStyle, dividerStyle, helperTextStyle } from 'modules/hotel/component/ReservationForm/Style';
//Utilities
import i18n from 'utilities/I18n';

const index = (props: any) => {
    const hotel: ReservationHotelModel = props.hotel;
    const isConfirmMode: boolean = props.isConfirmMode;
    const bookingFormState = props.bookingFormState;
    const setBookingFormState = props.setBookingFormState;
    const inputValidateError = props.inputValidateError;
    const inputValidateIcon = props.inputValidateIcon;
    const renderMessage = props.renderMessage;
    const updateGuest = props.updateGuest;
    const hBlock = _.flatten(hotel.hotelData.block);
    let count = 0;
    const room = hotel.roomReservation.map((roomData) => {
        const block = _.find(hBlock, ['blockId', roomData.blockId]);
        if (block) {
            const thisState = _.find(bookingFormState.blocks, ['blockId', block.blockId]);
            if (thisState) {
                const roomAmount = _.range(roomData.amount).map((loopIndex) => {
                    return (
                        <Paper style={cardStyle}>
                            <Grid container spacing={3} style={labelStyle}>
                                <Grid item xs={12}>
                                    <Typography variant="h3" component="h3" style={textHeaderStyle}>
                                        {i18n.t('hotel.search.room')} {++count} : {block.name} ({loopIndex + 1})
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Option parent_props={block} />
                                </Grid>
                                <Grid item md={5} xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel style={labelStyle}>{i18n.t('hotel.desktop.reservation.form.guest.fullname')}*</InputLabel>
                                        <Input
                                            style={labelStyle}
                                            required
                                            error={inputValidateError(thisState.guests[loopIndex].guestName)}
                                            disabled={isConfirmMode}
                                            name={"guest_name[" + block.blockId + "][" + loopIndex + "]"}
                                            value={thisState.guests[loopIndex].guestName.value}
                                            onChange={(e) => updateGuest(block.blockId, loopIndex, { ...thisState.guests[loopIndex], guestName: { ...thisState.guests[loopIndex].guestName, value: e.target.value } })}
                                            endAdornment={
                                                inputValidateIcon(thisState.guests[loopIndex].guestName)
                                            }
                                            inputProps={{ maxLength: thisState.guests[loopIndex].guestName.validate?.maxLength, style: { textTransform: 'uppercase' } }}
                                        />
                                        <FormHelperText id={"helper-guestname[" + block.blockId + "][" + loopIndex + "]"} style={helperTextStyle}>
                                            {renderMessage(thisState.guests[loopIndex].guestName)}
                                        </FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item md={5} xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel style={labelStyle}>{i18n.t('hotel.desktop.reservation.form.guest.email')}</InputLabel>
                                        <Input
                                            style={labelStyle}
                                            required
                                            error={inputValidateError(thisState.guests[loopIndex].guestEmail)}
                                            disabled={isConfirmMode}
                                            name={"guest_email[" + block.blockId + "][" + loopIndex + "]"}
                                            value={thisState.guests[loopIndex].guestEmail.value}
                                            onChange={(e) => updateGuest(block.blockId, loopIndex, { ...thisState.guests[loopIndex], guestEmail: { ...thisState.guests[loopIndex].guestEmail, value: e.target.value } })}
                                            endAdornment={
                                                inputValidateIcon(thisState.guests[loopIndex].guestEmail)
                                            }
                                            inputProps={{ maxLength: thisState.guests[loopIndex].guestEmail.validate?.maxLength, style: { textTransform: 'capitalize' } }}
                                        />
                                        <FormHelperText id="helper-firstname" style={helperTextStyle}>
                                            {renderMessage(thisState.guests[loopIndex].guestEmail)}
                                        </FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item md={2} xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel style={labelStyle}>{i18n.t('hotel.desktop.reservation.form.guest.numberofguests')}</InputLabel>
                                        <Select
                                            id={'demo-simple-select-' + block.blockId + '-' + loopIndex}
                                            disabled={isConfirmMode}
                                            value={thisState.guests[loopIndex].guests.value}
                                            onChange={(e) => updateGuest(block.blockId, loopIndex, { ...thisState.guests[loopIndex], guests: { ...thisState.guests[loopIndex].guests, value: Number(e.target.value) } })}
                                            style={labelStyle}
                                        >
                                            {
                                                _.range(1, block.maxOccupancy + 1).map((occ) => {
                                                    return <MenuItem value={occ} style={labelStyle}>{occ}</MenuItem>
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <BedOption block={block} isConfirmMode={isConfirmMode} reservationBlockState={thisState} reservationBlockIndex={loopIndex} bookingFormState={bookingFormState} setBookingFormState={setBookingFormState} />
                                <BlockPolicy block={block} />
                            </Grid>
                        </Paper>
                    );
                });
                return roomAmount;
            } else {
                return null;
            }
        } else {
            return null;
        }

    });

    return (
        <Card style={cardStyle}>
            <CardContent>
                <Typography variant="h3" component="h3" style={textHeaderStyle}>
                    {i18n.t('hotel.desktop.reservation.form.guest.guestinformation')}
                </Typography>
                <Divider style={dividerStyle} />
                {room}
            </CardContent>
        </Card>
    );
}

export default index;