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
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//Model
import BookingModel from 'modules/hotel/models/ReservationModel/BookingModel';
import AdditionModel from 'modules/hotel/models/ReservationModel/AdditionModel';
//Style
import { cardStyle, labelStyle, textHeaderStyle, dividerStyle, helperTextStyle } from 'modules/hotel/component/ReservationForm/Style';
//Utilities
import i18n from 'utilities/I18n';

const index  = (props: any) => {
    const bookingFormState:BookingModel = props.bookingFormState;
    const setBookingFormState = props.setBookingFormState;
    const isConfirmMode: boolean = props.isConfirmMode;
    const validateData = props.validateData;

    const updateAddition = (additionData: AdditionModel) => {
        additionData.remark = validateData(additionData.remark);
        setBookingFormState({ ...bookingFormState, addition: additionData });
    }

    return (
        <Card style={cardStyle}>
        <CardContent>
            <Typography variant="h3" component="h3" style={textHeaderStyle}>
                {i18n.t('hotel.desktop.reservation.specialrequest')}
        </Typography>
            <Divider style={dividerStyle} />
            <Grid container spacing={3} style={labelStyle}>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel style={labelStyle}>{i18n.t('hotel.desktop.reservation.specifyoption')}</InputLabel>
                        <Input
                            style={labelStyle}
                            multiline
                            disabled={isConfirmMode}
                            value={bookingFormState.addition.remark.value}
                            onChange={(e) => updateAddition({ ...bookingFormState.addition, remark: { ...bookingFormState.addition.remark, value: e.target.value } })}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={Boolean(bookingFormState.addition.sameAreaRooms.value)}
                                onChange={(e) => updateAddition({ ...bookingFormState.addition, sameAreaRooms: { ...bookingFormState.addition.sameAreaRooms, value: !bookingFormState.addition.sameAreaRooms.value } })}
                                name="sameAreaRooms"
                                disabled={isConfirmMode} />
                        }
                        label={<Typography style={labelStyle}>{i18n.t('hotel.desktop.reservation.form.addition.needroomclose')}</Typography>}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={Boolean(bookingFormState.addition.quietRoom.value)}
                                onChange={() => updateAddition({ ...bookingFormState.addition, quietRoom: { ...bookingFormState.addition.quietRoom, value: !bookingFormState.addition.quietRoom.value } })}
                                name="quietRoom"
                                disabled={isConfirmMode} />
                        }
                        label={<Typography style={labelStyle}>{i18n.t('hotel.desktop.reservation.form.addition.wantquietroom')}</Typography>}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={Boolean(bookingFormState.addition.freeParking.value)}
                                onChange={() => updateAddition({ ...bookingFormState.addition, freeParking: { ...bookingFormState.addition.freeParking, value: !bookingFormState.addition.freeParking.value } })}
                                name="freeParking"
                                disabled={isConfirmMode} />}
                        label={<Typography style={labelStyle}>{i18n.t('hotel.desktop.reservation.form.addition.freeparkingonsite')}</Typography>}
                    />
                    {/* ฉันต้องการที่จอดรถฟรีในบริเวณที่พัก สำหรับผู้ที่ได้รับอนุญาต */}
                </Grid>
            </Grid>
        </CardContent>
    </Card>
    );
}

export default index;