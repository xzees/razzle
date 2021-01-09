import React from 'react';
import { Grid, Box } from '@material-ui/core';
import ColorManager from 'common/Manager/ColorManager';
import _ from 'lodash';
import { Verified } from 'modules/hotel/component/Icon';
import { TextAndIcon } from 'modules/hotel/component/SearchHotel/Option/Style';
import Facility from 'modules/hotel/component/SearchHotel/Option/Facility';
import NumRooms from 'modules/hotel/component/SearchHotel/Option/NumRooms';
import SearchHotelInterface from 'modules/hotel/component/SearchHotel/SearchHotelInterface';
import i18n from 'utilities/I18n';

export const Property = (props: {text: string}) => {
    return (
    <Grid item={true} lg={6} xs={12}>
        <TextAndIcon color={ColorManager.default.greenColor}>
            <Verified />
            {props.text}
        </TextAndIcon>
    </Grid>
    );
};

const index = (props: SearchHotelInterface) => {

    const { hotelListModel } = props;
    const { pocilities } = hotelListModel.blockDetail;  

    return (
        <>
            <Box mt={2} >
                <Grid container={true} spacing={0} >
                    {pocilities.breakFast ===  true && <Property text={i18n.t('hotel.components.desktop.breakfastincluded')} />}
                    {pocilities.freeCancel ===  true && <Property text={i18n.t('hotel.components.desktop.freecancel')} />}
                    {pocilities.payAtProperty ===  true && <Property text={i18n.t('hotel.components.desktop.payathotel')} />}
                </Grid>
            </Box>
            <Box mt={2} >
                <Grid container={true} spacing={0} >
                    <NumRooms {...props} />
                </Grid>
            </Box>
            <Box mt={2} >
                <Grid container={true} spacing={0} >
                    <Facility {...props} />
                </Grid>
            </Box>
        </>
    );
};

export default index;