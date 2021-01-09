import React from 'react'
import { Grid, Box, styles, backgroungWhiteStyle, useStyles, FontManager, ColorManager } from './styles';
import { inject, observer } from 'mobx-react';
import RoomListInterface from 'modules/hotel/pages/room_list/RoomListInterface';
import { Link, Element, Events} from "react-scroll";
import HotelInfoModel from 'modules/hotel/models/HotelInfoModel';
import NearByLocationInside from 'modules/hotel/models/NearByLocationInside';
import HotelDetailAccordion from 'modules/hotel/component/HotelDetailAccordion';
import HotelFacilityDesktop from 'modules/hotel/component/HotelFacilityDesktop';
import _ from 'lodash';
import i18n from 'utilities/I18n';

const FacilityAll = inject('stores')(
    observer((props: RoomListInterface) => {
    const classes = useStyles();
    const uiStore = props.stores!.HotelRootStore;
    const hotelInfo: HotelInfoModel = uiStore.RoomlistStore.returnData.hotelInfo;

    const restuarantCafeAPI:any[] = _.orderBy(hotelInfo.nearByLocation.restuarantCafe, ['distance', 'age']);
    const restuarantCafeList:any[] = _.take(restuarantCafeAPI, 10).map((item:NearByLocationInside) => {
        return {title: item.name, subtitle: item.distance.toFixed(1)+' '+i18n.t('hotel.components.nearbyacc.km'), userRatingsTotal: item.userRatingsTotal}
    });

    const supermarketAPI: any[] = _.orderBy(hotelInfo.nearByLocation.supermarket, ['distance', 'age']);
    const supermarketList:any[] = _.take(supermarketAPI, 10).map((item:NearByLocationInside) => {
        return {title: item.name, subtitle: item.distance.toFixed(1)+' '+i18n.t('hotel.components.nearbyacc.km'), userRatingsTotal: item.userRatingsTotal}
    });

    const naturalAPI: any[] = _.orderBy(hotelInfo.nearByLocation.natural, ['distance', 'age']);
    const naturalList:any[] = _.take(naturalAPI, 10).map((item:NearByLocationInside) => {
        return {title: item.name, subtitle: item.distance.toFixed(1)+' '+i18n.t('hotel.components.nearbyacc.km'), userRatingsTotal: item.userRatingsTotal}
    });

    const airportAndTransmitAPI: any[] = _.concat(hotelInfo.nearByLocation.airport, hotelInfo.nearByLocation.transmit);
    const airport = _.orderBy(airportAndTransmitAPI, ['distance', 'age']);
    const airportAndTransmitList:any[] = _.take(airport, 10).map((item:NearByLocationInside) => {
        return {title: item.name, subtitle: item.distance.toFixed(1)+' '+i18n.t('hotel.components.nearbyacc.km'), userRatingsTotal: item.userRatingsTotal}
    });

    const around = [
        { heading: i18n.t('hotel.pages.roomlist.desktop.facilities.hdcafe'), id: 'cafe', listType:'listicon', lists: restuarantCafeList},
        { heading: i18n.t('hotel.pages.roomlist.desktop.facilities.supermarket'), id: 'supermarket', listType:'listicon', lists: supermarketList},
        { heading: i18n.t('hotel.pages.roomlist.desktop.facilities.natural'), id: 'natural', listType:'listicon', lists: naturalList},
        { heading: i18n.t('hotel.pages.roomlist.desktop.facilities.airport'), id: 'airport', listType:'listicon', lists: airportAndTransmitList}
    ];

    const aroundComponent = () => {
        let aroundRes:any[] = [];
        _.forEach(around, function(aroundItem) {
            aroundRes.push(                
                <HotelDetailAccordion data={aroundItem} expanded={true} onChange={() => {}} isMobile={false}></HotelDetailAccordion>
            )
          });
        return aroundRes;
    }

    return (
        <>
            <Element name={props.refName}></Element>
            <Box component="div" p={6} style={backgroungWhiteStyle}>
            <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <styles.AccordionHeading ref={props.refComp}>{i18n.t('hotel.pages.roomlist.desktop.facilities.hdservices')}</styles.AccordionHeading>
                        <div>
                            <HotelFacilityDesktop data={hotelInfo?.hotelFacilities}/>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <styles.AccordionHeading>{i18n.t('hotel.pages.roomlist.desktop.facilities.hdnearby')}</styles.AccordionHeading>
                        <div>
                            {aroundComponent()}
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}));

export default FacilityAll;