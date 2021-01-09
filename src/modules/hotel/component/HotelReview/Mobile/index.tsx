import React from 'react';
import styled from "styled-components";
import HotelReviewScrollSummary from '../ScrollSummary';
import HotelReviewScrollLine from '../ScrollLine';
import HotelReviewMessage from '../Message';
import _ from 'lodash';

    

export default function index(props: any) {
    
    return (
        <>
            <HotelReviewScrollSummary />
            <HotelReviewScrollLine displaytype="1" />
            <HotelReviewScrollLine displaytype="2" />
            <HotelReviewMessage isMobile={true} />
        </>
    );
}