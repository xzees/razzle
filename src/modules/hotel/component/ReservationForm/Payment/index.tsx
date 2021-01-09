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
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import PaymentIcon from '@material-ui/icons/Payment';
//Model
import BookingModel from 'modules/hotel/models/ReservationModel/BookingModel';
import PaymentChannelModel from 'modules/hotel/models/ReservationModel/PaymentChannelModel';
//Style
import { cardStyle, labelStyle, textHeaderStyle, dividerStyle } from 'modules/hotel/component/ReservationForm/Style';
//Utilities
import i18n from 'utilities/I18n';

const index = (props: any) => {
    const bookingFormState:BookingModel = props.bookingFormState;
    const updatePayment = props.updatePayment;
    const paymentChannel: PaymentChannelModel[] = props.paymentChannel;

    const onPaymentChannelChange = (pc: string) => {
        const pcIndex = _.findIndex(paymentChannel, ['channel', pc]);
        if (pcIndex != -1) {
            updatePayment({ ...bookingFormState.payment, channel: paymentChannel[pcIndex] });
        }
    }

    return (
        <>
        {(paymentChannel.length > 0 && bookingFormState.payment) && 
        <form noValidate autoComplete="off" method="post" action={bookingFormState.payment.channel.form_url}>
            <Box component="div">
                <Card style={cardStyle}>
                    <CardContent>
                        <Typography variant="h3" component="h3" style={textHeaderStyle}>
                            {i18n.t('cart.actionbar.payment.status.title')}
                    </Typography>
                        <Divider style={dividerStyle} />
                        <Grid container spacing={3} style={labelStyle}>
                            <Grid item xs={12}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend" style={labelStyle}>{i18n.t('payment.form.header.title')}</FormLabel>
                                    <RadioGroup aria-label="payment-channel" name="payment-channel" value={bookingFormState.payment.channel.channel} onChange={(e) => onPaymentChannelChange(e.target.value)} row>
                                        {
                                            paymentChannel.map((pc) => {
                                                return (<FormControlLabel value={pc.channel} control={<Radio />} label={<img alt={pc.channel} src={pc.icon} />} />)
                                            })
                                        }
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Input type="hidden" value={bookingFormState.payment.channel.secureKey} name="secureKey" />
                    </CardContent>
                </Card>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        type="submit"
                        fullWidth
                        startIcon={<PaymentIcon />}
                        style={textHeaderStyle}
                    >
                        {i18n.t('cart.process.payment.button')}
                </Button>
                </Grid>
            </Grid>
        </form>
        }
        </>
    );
}

export default index;