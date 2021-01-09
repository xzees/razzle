//React
import React from 'react'
//Plugin
import _ from 'lodash';
//MUI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
//Model
import PaymentModel from 'modules/hotel/models/ReservationModel/PaymentModel';
//Style
import { textHeaderStyle } from 'modules/hotel/component/ReservationForm/Style';
//Utilities
import i18n from 'utilities/I18n';

const ReviewButton = (props: any) => {

    const isConfirmMode: boolean = props.isConfirmMode;
    const payment: PaymentModel = props.payment;
    const formValidate = props.formValidate;


    const ButtonCompoment = () => {
        return (
            <Grid item xs={12}>
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
                    {i18n.t('hotel.desktop.reservation.form.booker.checkreservationinfomation')}
                </Button>
            </Grid>
        );
    }

    return (
        <>
            {!isConfirmMode && payment.orderRef == "" && <ButtonCompoment/>}
        </>
    );
}

export default ReviewButton;