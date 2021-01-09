import React from 'react';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import WifiIcon from '@material-ui/icons/Wifi';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styled from "styled-components";
import _ from 'lodash';
import Slider from "react-slick";
import HotelFacilitiesModel from 'modules/hotel/models/HotelFacilitiesModel';
import { ReactSVG } from 'react-svg';

const styles = {
    TopFacilityPaper: styled<any>(Paper)`
        &.MuiPaper-root{
            text-align: center;
            border-color: ${ColorManager.default.fourthColor};
            padding: ${props => (props.isMobile ? '.6rem' : '1rem .6rem')};
            box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.5);
            overflow: hidden;
            white-space: nowrap;
            width: 100%;
        },
    `,
    HotelFacilityIcon: styled<any>(WifiIcon)`
        &.MuiSvgIcon-root {
            color: ${ColorManager.default.fourthColor};
        },
    `,
    HotelFacilityText: styled<any>(Typography)`
        &.MuiTypography-body1{
            font-size: ${props => (props.isMobile ? FontManager.default.TEXT_TINY_EXTRA_17 : FontManager.default.TEXT_20)};
            line-height: ${props => (props.isMobile ? FontManager.default.TEXT_TINY_EXTRA_17 : FontManager.default.TEXT_20)};
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        },
    `,
    MyChevronRightIcon: styled<any>(ChevronRightIcon)`
        &.MuiSvgIcon-root{
            color: ${ColorManager.default.fifthColor} !important;
        }
    `,
    MyChevronLeftIcon: styled<any>(ChevronLeftIcon)`
        &.MuiSvgIcon-root{
            color: ${ColorManager.default.fifthColor} !important;
        }
    `,
    MyReactSVG: styled<any>(ReactSVG)`
        height: ${props => (props.isMobile ? '21px' : '27.5px')};
        width: ${props => (props.isMobile ? '21px' : '27.5px')};
        margin: auto;
        svg {
            height: ${props => (props.isMobile ? '21px' : '27.5px')};
            width: ${props => (props.isMobile ? '21px' : '27.5px')}; 
        }
        path {
            fill: ${ColorManager.default.fourthColor};
        }
    `,
}

interface HotelFacilitySlickInterface {
    data: HotelFacilitiesModel[];
    isMobile: boolean;
}

export default function index(props: HotelFacilitySlickInterface) {
    const data:HotelFacilitiesModel[] = props.data;
    const showLimit:number = (props.isMobile ? 3 : 6);
    const gridItemRow = (props.isMobile ? 4 : 2);
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: showLimit,
        slidesToScroll: showLimit,
        nextArrow: <styles.MyChevronRightIcon fontSize="large"/>,
        prevArrow: <styles.MyChevronLeftIcon fontSize="large"/>,
      };
    const hotelFacilityComponent = (hotelFacility:HotelFacilitiesModel[]) => {
        let facilityRes:any[] = [];
        _.forEach(hotelFacility, function(facilityItem) {
            const label = facilityItem.facilitiesGroup.facilities[0].translationNameTh;
            const iconUrl = facilityItem.facilitiesGroup.icon;
            if(hotelFacility.length > showLimit){ 
                facilityRes.push(
                    <div>
                        <div style={{padding: '5px'}}>
                            <styles.TopFacilityPaper variant="outlined" {...props}>
                                <styles.MyReactSVG src={iconUrl}/>
                                <styles.HotelFacilityText component="p" {...props}>
                                    {label}
                                </styles.HotelFacilityText>
                            </styles.TopFacilityPaper>
                        </div>
                    </div>
                );
            }else{
                facilityRes.push(
                    <Grid item xs={gridItemRow}>
                        <div style={{padding: '5px'}}>
                            <styles.TopFacilityPaper variant="outlined" {...props}>
                                <styles.MyReactSVG src={iconUrl}/>
                                <styles.HotelFacilityText component="p" {...props}>
                                    {label}
                                </styles.HotelFacilityText>
                            </styles.TopFacilityPaper>
                        </div>
                    </Grid>
                );
            }
          });
        return facilityRes;
    }

    return (
        <div>
            {(data.length > showLimit) ? 
            <Slider {...sliderSettings}>
                {hotelFacilityComponent(data)}
            </Slider>
            :
            <Grid container justify="center">{hotelFacilityComponent(data)}</Grid>
            }
        </div>
    );
}