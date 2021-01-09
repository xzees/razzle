//React
import React, { useState } from 'react'
//Plugin
import _ from 'lodash';
import InputMask from 'react-input-mask';
//MUI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import MaterialInput from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
//Model
import BookingModel from 'modules/hotel/models/ReservationModel/BookingModel';
import BookerModel from 'modules/hotel/models/ReservationModel/BookerModel';
import RegularExpression from 'utilities/RegularExpression';
//Manager
import ColorManager from 'common/Manager/ColorManager';
//Style
import { cardStyle, labelStyle, textHeaderStyle, dividerStyle, helperTextStyle } from 'modules/hotel/component/ReservationForm/Style';
//Utilities
import i18n from 'utilities/I18n';

const index = (props: any) => {
    const bookingFormState: BookingModel = props.bookingFormState;
    const setBookingFormState = props.setBookingFormState;
    const inputValidateError = props.inputValidateError;
    const inputValidateIcon = props.inputValidateIcon;
    const renderMessage = props.renderMessage;
    const isConfirmMode: boolean = props.isConfirmMode;
    const validateData = props.validateData;

    const validation = RegularExpression.default;
    const [emailConfirm, setEmailConfirm] = useState<string>('');
    const [phoneNum, setPhoneNum] = useState<string>();

    const updateBooker = (bookerData: BookerModel) => {
        bookerData.firstname = validateData(bookerData.firstname);
        bookerData.lastname = validateData(bookerData.lastname);
        bookerData.email = validateData(bookerData.email);
        bookerData.phone = validateData(bookerData.phone);
        setBookingFormState({ ...bookingFormState, booker: bookerData });
        // console.log("🚀 ~ file: index.tsx ~ line 49 ~ updateBooker ~ bookerData", bookerData);
    }

    const validateEmailConfirm = (inputValue: string) => {
        const retValidate = { validate: false, message: '' };
        retValidate.validate = validation.emailValidate(inputValue, false);
        if (!retValidate.validate) {
            if (inputValue == '') {
                retValidate.message = i18n.t('hotel.desktop.reservation.form.booker.inputemailforconfirm');
            } else {
                retValidate.message = i18n.t('contact.form.email.error.message');
            }
        } else {
            retValidate.validate = (bookingFormState.booker.email.value == inputValue);
            if (!retValidate.validate) {
                retValidate.message = i18n.t('hotel.desktop.reservation.form.booker.emailnotmatch');
            }
        }
        return retValidate;
    }

    const onPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //console.log(event.target.value);
        setPhoneNum(event.target.value);
        const phone = (event.target.value).replace(/\D/g, '');
        updateBooker({ ...bookingFormState.booker, phone: { ...bookingFormState.booker.phone, value: phone } })
    }

    return (
        <Card style={cardStyle}>
            <CardContent>
                <Typography variant="h3" component="h3" style={textHeaderStyle}>
                    {i18n.t('hotel.desktop.reservation.form.booker.reservationinformation')}
                </Typography>
                <Divider style={dividerStyle} />
                <Grid container spacing={3} style={labelStyle}>
                    <Grid item md={6} xs={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend" style={labelStyle}>{i18n.t('hotel.desktop.reservation.form.booker.traveltowork')}</FormLabel>
                            <RadioGroup aria-label="traveller" name="traveller" value={bookingFormState.booker.traveller.value} onChange={(e) => updateBooker({ ...bookingFormState.booker, traveller: { ...bookingFormState.booker.traveller, value: e.target.value } })} row>
                                <FormControlLabel value="business" control={<Radio disabled={isConfirmMode} />} label={<Typography style={labelStyle}>{i18n.t('cart.modal.yes.button')}</Typography>} />
                                <FormControlLabel value="leisure" control={<Radio disabled={isConfirmMode} />} label={<Typography style={labelStyle}>{i18n.t('cart.modal.no.button')}</Typography>} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend" style={labelStyle}>{i18n.t('hotel.desktop.reservation.form.booker.reservationfor')}</FormLabel>
                            <RadioGroup aria-label="stayer" name="stayer" value={bookingFormState.booker.stayer.value} onChange={(e) => updateBooker({ ...bookingFormState.booker, stayer: { ...bookingFormState.booker.stayer, value: !bookingFormState.booker.stayer.value } })} row>
                                <FormControlLabel value={true} control={<Radio disabled={isConfirmMode} />} label={<Typography style={labelStyle}>{i18n.t('hotel.desktop.reservation.form.booker.mainguest')}</Typography>} />
                                <FormControlLabel value={false} control={<Radio disabled={isConfirmMode} />} label={<Typography style={labelStyle}>{i18n.t('hotel.desktop.reservation.form.booker.forother')}</Typography>} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <FormControl fullWidth>
                            <InputLabel style={labelStyle}>{i18n.t('passenger.form.firstname.floating.label')}*</InputLabel>
                            <Input
                                style={labelStyle}
                                required
                                error={inputValidateError(bookingFormState.booker.firstname)}
                                disabled={isConfirmMode}
                                name="firstname"
                                value={bookingFormState.booker.firstname.value}
                                onChange={(e) => updateBooker({ ...bookingFormState.booker, firstname: { ...bookingFormState.booker.firstname, value: e.target.value } })}
                                aria-describedby="helper-firstname"
                                endAdornment={
                                    inputValidateIcon(bookingFormState.booker.firstname)
                                }
                                inputProps={{ maxLength: bookingFormState.booker.firstname.validate?.maxLength, style: { textTransform: 'uppercase' } }}
                            />
                            <FormHelperText id="helper-firstname" style={helperTextStyle}>
                                {renderMessage(bookingFormState.booker.firstname)}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <FormControl fullWidth>
                            <InputLabel style={labelStyle}>{i18n.t('passenger.form.lastname.floating.label')}*</InputLabel>
                            <Input
                                style={labelStyle}
                                required
                                error={inputValidateError(bookingFormState.booker.lastname)}
                                disabled={isConfirmMode}
                                name="lastname"
                                value={bookingFormState.booker.lastname.value}
                                onChange={(e) => updateBooker({ ...bookingFormState.booker, lastname: { ...bookingFormState.booker.lastname, value: e.target.value } })}
                                aria-describedby="helper-lastname"
                                endAdornment={
                                    inputValidateIcon(bookingFormState.booker.lastname)
                                }
                                inputProps={{ maxLength: bookingFormState.booker.lastname.validate?.maxLength, style: { textTransform: 'uppercase' } }}
                            />
                            <FormHelperText id="helper-lastname" style={helperTextStyle}>
                                {renderMessage(bookingFormState.booker.lastname)}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <FormControl fullWidth>
                            <InputLabel style={labelStyle}>{i18n.t('contact.form.email.floating.label')}*</InputLabel>
                            <Input
                                style={labelStyle}
                                required
                                error={inputValidateError(bookingFormState.booker.email)}
                                disabled={isConfirmMode}
                                name="email"
                                value={bookingFormState.booker.email.value}
                                onChange={(e) => updateBooker({ ...bookingFormState.booker, email: { ...bookingFormState.booker.email, value: e.target.value } })}
                                endAdornment={
                                    inputValidateIcon(bookingFormState.booker.email)
                                }
                                inputProps={{ maxLength: bookingFormState.booker.email.validate?.maxLength }}
                            />
                            <FormHelperText id="helper-email" style={helperTextStyle}>
                                {renderMessage(bookingFormState.booker.email)}
                            </FormHelperText>
                        </FormControl>
                    </Grid>

                    {!isConfirmMode &&
                        <Grid item md={6} xs={12}>
                            <FormControl fullWidth>
                                <InputLabel style={labelStyle}>{i18n.t('hotel.desktop.reservation.form.booker.confirmemail')}*</InputLabel>
                                <Input
                                    style={labelStyle}
                                    required
                                    error={!validateEmailConfirm(emailConfirm).validate}
                                    disabled={isConfirmMode}
                                    name="emailConfirm"
                                    value={emailConfirm}
                                    onChange={(e) => setEmailConfirm(e.target.value)}
                                    endAdornment={
                                        (validateEmailConfirm(emailConfirm).validate)
                                            ? <CheckCircleOutlinedIcon style={{ color: ColorManager.default.primaryColor }} />
                                            : <CancelOutlinedIcon style={{ color: ColorManager.default.redColor }} />
                                    }
                                />
                                <FormHelperText id="helper-emailConfirm" style={helperTextStyle}>
                                    {(!validateEmailConfirm(emailConfirm).validate && <>{validateEmailConfirm(emailConfirm).message}</>)}
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                    }
                    <Grid item md={6} xs={12}>
                        <FormControl fullWidth>
                            <InputLabel style={labelStyle}>{i18n.t('contact.info.form.phone.number.placeholder')}*</InputLabel>
                            <InputMask 
                                mask="(999) 999-9999" 
                                value={phoneNum} 
                                onChange={onPhoneChange} 
                                style={labelStyle}
                                required
                                name="phoneNum"
                                disabled={isConfirmMode}
                                endAdornment={
                                    inputValidateIcon(bookingFormState.booker.phone)
                                }
                                id="phone-mask-input"
                                inputProps={{ maxLength: bookingFormState.booker.phone.validate?.maxLength }}>
                                {(inputProps: any) => <MaterialInput {...inputProps}
                                alwaysShowMask={true} />}
                            </InputMask>
                            <FormHelperText id="helper-phone" style={helperTextStyle}>
                                {renderMessage(bookingFormState.booker.phone)}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default index;