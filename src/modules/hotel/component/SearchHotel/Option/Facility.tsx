import React from 'react';
import { Grid , Box } from '@material-ui/core';
import _ from 'lodash';
import WifiIcon from '@material-ui/icons/Wifi';
import WcIcon from '@material-ui/icons/Wc';
import BathtubIcon from '@material-ui/icons/Bathtub';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import SearchHotelInterface from 'modules/hotel/component/SearchHotel/SearchHotelInterface';
import {
    RenderIconFacility
} from 'modules/hotel/component/Icon';
import BootstrapTooltip from 'modules/hotel/component/ToolTip/Icon';

import {
    ViewButton,
    divMobile,
    boxMobile,
    boxDesktop,
    box,
    removePadding
} from './Style';

const Facility = (props: SearchHotelInterface) => {

    const {
        hotelListModel
    } = props;
    
    const filter = (v: any) => {
        return v.facilitiesGroup.icon !== null;
    };

    const mapData = (): any[] => {
        const ele: any = [];
        _.each(hotelListModel.blockDetail.hotelFacilities.filter(filter) , (v: any, k: number) => {
            if (k < 5) {
                ele.push(v);
            }
        });
        return ele;
    };
    
    const FacilityArray = mapData();
    
    let boxDivElement: any = boxDesktop;
    let IconFacility: any = box;
    if (props.isMobile) {
        boxDivElement = divMobile;
        IconFacility = boxMobile;
    }

    const mapElement = (v: any, k: number) => {
        return (
            <BootstrapTooltip arrow={true} title={v.facilitiesGroup.name} key={k}>
                <ViewButton >
                    <RenderIconFacility {...IconFacility} key={k} src={v.facilitiesGroup.icon} />
                </ViewButton>
            </BootstrapTooltip>
        );
    };

    return (
        <Grid 
            className={'Facility'}
            style={removePadding}
            item={true} 
            xs={12} 
            sm={12} 
            md={12} 
            lg={12}
        >
            <Box 
                className={'FacilityBox'}
                style={boxDivElement} 
                display={'flex'}
            >
                {FacilityArray.map(mapElement)} 
            </Box>
        </Grid>
    );
};

export default Facility;