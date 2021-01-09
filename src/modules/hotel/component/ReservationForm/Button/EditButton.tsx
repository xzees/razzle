//React
import React from 'react'
//Plugin
import _ from 'lodash';
//MUI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
//Model
import PaymentModel from 'modules/hotel/models/ReservationModel/PaymentModel';
//Style
import { textHeaderStyle } from 'modules/hotel/component/ReservationForm/Style';
//Utilities
import i18n from 'utilities/I18n';

const EditButton = (props: any) => {
    const setIsConfirmMode = props.setIsConfirmMode;
    const payment: PaymentModel = props.payment;
    const formValidate = props.formValidate;


    const ButtonCompoment = () => {
        return (
            <Grid item xs={6}>
                <Button
                    variant="contained"
                    size="large"
                    type="button"
                    color="secondary"
                    onClick={() => setIsConfirmMode(false)}
                    disabled={_.find(formValidate, ['validate', false])}
                    fullWidth
                    startIcon={<EditIcon />}
                    style={textHeaderStyle}
                >
                    {i18n.t('booking.information.form.edit')}
                </Button>
            </Grid>
        );
    }

    return (
        <>
            {(payment.orderRef == "") && <ButtonCompoment />}
        </>
    );
}

export default EditButton;