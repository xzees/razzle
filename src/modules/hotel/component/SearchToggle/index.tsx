import React from 'react';
import {
    Containers,
    ResultBarH3Mobile,
    Headings,
} from 'modules/hotel/component/SearchToggle/Style'
import Heading from 'common/src/components/Heading';
import { Grid, Box } from '@material-ui/core';
import ImageManager from 'common/Manager/ImageManager';
import { AppImageResponsive } from 'common/components';
import BtnSearchForm from './Modal';
import { RenderExpandMoreIcon } from 'modules/hotel/component/Icon';
import { inject, observer } from 'mobx-react';
import qs from 'query-string';
import HotelListInterface from 'modules/hotel/pages/hotel_list/HotelListInterface';

const index = inject('stores')(
    observer((props: HotelListInterface) => {

    const param: any = qs.parse(props.location.search);
    const uiStore = props.stores!.HotelRootStore.ListStore;
    const label = uiStore.getBookingDateText();
    const labelTwo = uiStore.getAdultText() + ' ' + uiStore.getChildText() + ' / ' + uiStore.getRoomText();

    return (
        <>
            <Containers>
                <Grid container={true} alignItems={'center'} > 
                    <Grid item={true} xs={6} sm={6} md={6} >
                        <Box mt={1} mb={1}  >
                            <Box m={0}>
                                <Headings>{param.name}</Headings>
                                <Heading content={label} {...ResultBarH3Mobile} />
                                <Heading content={labelTwo} {...ResultBarH3Mobile} />
                            </Box>
                            <Box m={0} mt={10}>
                                <BtnSearchForm 
                                    setOpen={uiStore.setOpen}
                                    closeBtnIcon={<RenderExpandMoreIcon />}
                                    open={uiStore.open} 
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item={true} xs={6} sm={6} md={6}>
                        <Box mt={1} mb={1} paddingTop={5} paddingBottom={5}>
                            <AppImageResponsive src={ImageManager.default.images.hotel.fontHotel} />
                        </Box>
                    </Grid>
                </Grid>
            </Containers>
        </>
    );
}));

export default index;