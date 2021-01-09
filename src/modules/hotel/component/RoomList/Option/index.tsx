import React from 'react';
import { Grid, Box } from '@material-ui/core';
import ColorManager from 'common/Manager/ColorManager';
import _ from 'lodash';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FontManager from 'modules/hotel/Manager/FontManager';
import Facility from './Facility';
import {  Verified } from 'modules/hotel/component/Icon';
import { TextAndIcon } from './Style';
import PocilitiesModel from 'modules/hotel/models/PocilitiesModel';
import BlockModel from 'modules/hotel/models/BlockModel';
import i18n from 'utilities/I18n';
import {
    formatDate,
} from 'common/Manager/Helper';
interface ParentProps {
    parent_props: BlockModel;
    children?: any;
}

const BreakfastIncluded = (props: ParentProps) => {
    const gridStyle = {
        padding: 0,
        marginTop: '3px'
    };
    return (
        <Grid 
            className={'option2'}
            style={gridStyle}
            item={true} 
            xs={12} 
            sm={12} 
            md={12} 
            lg={12}
        > 
            <TextAndIcon 
                className={'BoxOption1'}
                fontSize={FontManager.default.TEXT_20}
                color={ColorManager.default.greenColor}
            >
                <Verified />
                {i18n.t('hotel.components.desktop.breakfastincluded')}
            </TextAndIcon>
        </Grid>
    );
};

const FreeCancel = (props: ParentProps) => {
    const {parent_props} = props;

    var refundableUntil = parent_props.refundableUntil.split(" ");

    const gridStyle = {
        padding: 0,
        marginTop: '3px'
    };

    const gtm = (tsp: string) => {
        return 'GTM'+tsp.charAt(0)+Number(tsp.substring(1,3));
    }

    return (
        <Grid 
            className={'option2'}
            style={gridStyle}
            item={true} 
            xs={12} 
            sm={12} 
            md={12} 
            lg={12}
        > 
            <TextAndIcon 
                className={'BoxOption1'}
                fontSize={FontManager.default.TEXT_20}
                color={ColorManager.default.greenColor}
            >
                <Verified />
                {i18n.t('hotel.components.desktop.freecancel')} ก่อนวันที่ {formatDate(new Date(refundableUntil[0]), true)} {refundableUntil[1]} ({gtm(refundableUntil[2])})
            </TextAndIcon>
        </Grid>
    );
};

const PayAtProperty = (props: ParentProps) => {
    const gridStyle = {
        padding: 0,
        marginTop: '3px'
    };
    return (
        <Grid 
            className={'option2'}
            style={gridStyle}
            item={true} 
            xs={12} 
            sm={12} 
            md={12} 
            lg={12}
        > 
            <TextAndIcon 
                className={'BoxOption1'}
                fontSize={FontManager.default.TEXT_20}
                color={ColorManager.default.greenColor}
            >
                <Verified />
                {i18n.t('hotel.components.desktop.payathotel')}
            </TextAndIcon>
        </Grid>
    );
};

const index = (props: ParentProps) => {

    const removePadding = {
        padding: 0
    };

    // const pocilities = new PocilitiesModel(props.parent_props.pocilities)

    return (
        <>
            <Box mt={2} >
                <Grid container={true} spacing={0} >
                        <Facility 
                            parent_props={props.parent_props} 
                        />
                </Grid>
            </Box>
            <Box mt={2} >
                <Grid container={true} spacing={0} >
                    {props.parent_props.pocilities.breakFast ? <BreakfastIncluded {...props} /> : <></>}
                    {props.parent_props.pocilities.payAtProperty ? <PayAtProperty {...props} /> : <></>}
                    {props.parent_props.pocilities.freeCancel ? <FreeCancel {...props} /> : <></>}
                </Grid>
            </Box>
        </>
    );
};

export default index;