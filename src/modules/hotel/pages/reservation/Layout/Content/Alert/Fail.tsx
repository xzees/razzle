//React
import React from 'react'
//Plugin
import { inject, observer } from 'mobx-react';
//MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
//Manager
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
//Component

//Styled
import { Containers } from '../styles';
//Utilities
import i18n from 'utilities/I18n';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    alert: {
        '& .MuiAlert-icon': {
            fontSize: '32px'
        }
    },
  }),
);


const Fail = inject('stores')(
    observer((props: any) => {
        const {orderRef, msgPayment} = props; 
        const classes = useStyles();

        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Alert severity="error" variant="filled" className={classes.alert}>
                        <AlertTitle style={{ fontSize: FontManager.default.TEXT_EXTRA_24, marginBottom: 0, }}>{i18n.t('hotel.desktop.reservation.payment.failed')}</AlertTitle>
                        <Typography style={{ fontSize: FontManager.default.TEXT_20 }}>{i18n.t('hotel.desktop.reservation.ordernumber')} {orderRef} {msgPayment}</Typography>
                    </Alert>
                </Grid>
            </Grid>
        );
    }));

export default Fail;

