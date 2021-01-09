import React from 'react';
import { Box } from '@material-ui/core';
import _ from 'lodash';
import styled from 'styled-components';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';
import FontManager from 'modules/hotel/Manager/FontManager';
import i18n from 'utilities/I18n';
import { AppImageResponsive } from 'common/components';

interface IMText {
    color?: string;
    lineHeight?: string;
}

export const MText = styled.div`
  
    font-family: ${FontManager.default.secondaryFont};
    position: relative;
    display: inline-block;
    font-size: ${FontManager.default.TEXT_TINY_18} !important;

    a {
        color: #d60c0c !important;
    }
    width: 100%;
    margin-bottom: 10px;
    .tooltiptext {
        background-color: #ffeaea;
        color: #d60c0c !important;
        color: #fff;
        border: 1px solid #e8e8e8;
        text-align: left;
        padding: 2px 5px;
        border-radius: 5px;
        position: inherit;
        font-size: ${FontManager.default.TEXT_TINY_18} !important;
    }
    
    .tooltiptext::after {
        content: "";
        position: absolute;
        top: 80%;
        left: 88%;
        margin-left: -4px;
        border-width: 4px;
        border-style: solid;
        border-color: #ffeaea00 #ffeaea #ffeaea #ffeaea00 ;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        box-shadow: 1px 1px 0px 0px #e8e8e8;
    }
`;

const index = (props: any) => {
    if(props.isMobile) {
        return (
            <Box style={{
                textAlign: 'right',
                width: '100%'
            }}>
                <MText >
                        <span > 
                            {props.identifier == 'Booking.com' && <AppImageResponsive src={'https%3A%2F%2Fwww.amazon.com%2FBooking-com-Online-Hotel-Reservations%2Fdp%2FB008LG6SXS&psig=AOvVaw2tkqIdXi8GDgzf10PH4rBt&ust=1608371910051000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNj5__Sh1-0CFQAAAAAdAAAAABAF'}></AppImageResponsive>}
                            {props.identifier == 'hotelbeds' && <AppImageResponsive width={'27px'} src={'https://pbs.twimg.com/profile_images/1057540452755345410/JszpKoAp.jpg'}></AppImageResponsive>}

                            {/* {i18n.t('hotel.components.roomlist.sale.lblsavemore')} 10%  */}
                            <ErrorRoundedIcon 
                                style={{
                                    width: '19px',
                                    verticalAlign: 'middle',
                                    marginRight: '2px',
                                }}
                            />
                        </span>
                </MText>
            </Box>
        )
    }
    return (
        <Box style={{
            textAlign: 'right',
            width: '100%'
        }}>
            <MText >
            {/* <span className="tooltiptext"> */}
                    <span > 
                        <a href={'test'}> 
                        {props.identifier == 'Booking.com' && <AppImageResponsive width={'27px'} src={'https://images-na.ssl-images-amazon.com/images/I/51jqKKnVcVL.png'}></AppImageResponsive>}
                        {props.identifier == 'hotelbeds' && <AppImageResponsive width={'27px'} src={'https://pbs.twimg.com/profile_images/1057540452755345410/JszpKoAp.jpg'}></AppImageResponsive>}
                        {/* {i18n.t('hotel.components.roomlist.sale.lblsavemore')} 10%  */}
                        {/* <ErrorRoundedIcon 
                            style={{
                                width: '19px',
                                verticalAlign: 'middle',
                                marginRight: '2px',
                            }}
                        /> */}
                        </a>
                    </span>
            </MText>
        </Box>
    )
}

export default index