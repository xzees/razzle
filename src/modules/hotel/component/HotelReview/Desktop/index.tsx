import React from 'react';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import HotelReviewScrollSummary from '../ScrollSummary/index';
import HotelReviewScrollLine from '../ScrollLine/index';
import HotelReviewMessage from '../Message';
import _ from 'lodash';

    

export default function index(props: any) {

    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <HotelReviewScrollLine displaytype="1" />
            </Grid>
            <Grid item xs={4}>
                <HotelReviewScrollSummary />
            </Grid>
            <Grid item xs={4}>
                <HotelReviewScrollLine displaytype="2" />
            </Grid>
            <Grid item xs={12}>
                <HotelReviewMessage isMobile={false}/>
            </Grid>
        </Grid>
    );
}