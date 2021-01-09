import React from 'react';
import { Grid , Box } from '@material-ui/core';
import _ from 'lodash';
import WifiIcon from '@material-ui/icons/Wifi';
import WcIcon from '@material-ui/icons/Wc';
import BathtubIcon from '@material-ui/icons/Bathtub';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import HotelFacilitiesModel from 'modules/hotel/models/HotelFacilitiesModel';
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
} from '../Style';
import i18n from 'utilities/I18n';

const Facility = (props: any) => {

    const {
        roomFacilities 
    } = props.parent_props;

    const filter = (v: any) => {
        return v.facilitiesGroup.icon !== null;
    };

    const mapData = (): any[] => {
        const ele: any = [];
        _.each((roomFacilities || []).filter(filter) , (v: any, k: number) => {
            if (k < 5) {
                ele.push(v);
            }
        });
        return ele;
    };
    
    const FacilityArray = mapData();
    //console.log("🚀 ~ file: index.tsx ~ line 46 ~ Facility ~ FacilityArray", props.parent_props)

    const mapEle = (v: any, k: number) => {
        return (
            <BootstrapTooltip arrow={true} title={v.facilitiesGroup.name}>
                <ViewButton >
                    <RenderIconFacility {...box} key={k} src={v.facilitiesGroup.icon} />
                </ViewButton>
            </BootstrapTooltip>
        );
    };

    const mapEleMobile = (v: any, k: number) => {
        return (
            <BootstrapTooltip arrow={true} title={v.facilitiesGroup.name}>
                <ViewButton >
                    <RenderIconFacility {...boxMobile} key={k} src={v.facilitiesGroup.icon} />
                </ViewButton>
            </BootstrapTooltip>
        );
    };

    if (props.isMobile) {
     
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
                    style={divMobile} 
                    display={'flex'}
                >
                    {FacilityArray.map(mapEleMobile)} 
                </Box>
            </Grid>
        );
    }
    
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
                style={boxDesktop} 
                display={'flex'}
            >
                {FacilityArray.map(mapEle)} 
            </Box>
        </Grid>
    );
};

export default Facility;