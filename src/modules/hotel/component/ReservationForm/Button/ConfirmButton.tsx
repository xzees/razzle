//React
import React from 'react'
//Plugin
import _ from 'lodash';
//MUI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import PaymentModel from 'modules/hotel/models/ReservationModel/PaymentModel';
//Style
import { textHeaderStyle } from 'modules/hotel/component/ReservationForm/Style';
//Utilities
import i18n from 'utilities/I18n';

const ConfirmButton = (props: any) => {
    const payment: PaymentModel = props.payment;
    const formValidate = props.formValidate;
    let buttonWidth = 6;
    let buttonText = i18n.t('hotel.desktop.reservation.form.booker.comfirmandchoosepayment');
    if(payment.orderRef != ""){
        buttonWidth = 12;
        buttonText = i18n.t('payment.form.header.title');
    }

    return (
        <Grid item xs={6}>
            <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                disabled={_.find(formValidate, ['validate', false])}
                fullWidth
                startIcon={<SaveIcon />}
                style={textHeaderStyle}
            >
                {buttonText}
            </Button>
        </Grid>
    );
}

export default ConfirmButton;