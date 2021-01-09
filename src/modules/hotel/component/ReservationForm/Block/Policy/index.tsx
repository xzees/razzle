//React
import React, { useState, useEffect } from 'react'
//Plugin
import { inject, observer } from 'mobx-react';
import { animateScroll } from 'react-scroll';
import _ from 'lodash';
//MUI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
//Model
import BlockModel from 'modules/hotel/models/BlockModel';
//Style
import {textHeaderStyle, textnormalStyle} from 'modules/hotel/component/ReservationForm/Style';
//Utilities
import i18n from 'utilities/I18n';


const index = (props: any) => {
    const block:BlockModel = props.block;

    return (
        <Grid item xs={12}>
            <Typography variant="h3" component="h3" style={textHeaderStyle}>{i18n.t('hotel.desktop.reservation.form.guest.reservationconditions')}</Typography>
            <Typography style={textnormalStyle}>- {block.paymentTerms.prepaymentDescription}</Typography>
            <Typography variant="h3" component="h3" style={textHeaderStyle}>{i18n.t('hotel.desktop.reservation.form.guest.reservationcancelconditions')}</Typography>
            <Typography style={textnormalStyle}>- {block.paymentTerms.cancellationDescription}</Typography>
        </Grid>
    );
}


export default index;
