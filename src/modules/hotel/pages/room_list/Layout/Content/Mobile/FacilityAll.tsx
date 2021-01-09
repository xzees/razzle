import React from 'react'
import { Grid, Box, styles, useStyles, FontManager, ColorManager } from './styles';
import { inject, observer } from 'mobx-react';
import RoomListInterface from 'modules/hotel/pages/room_list/RoomListInterface';
import HotelInfoModel from 'modules/hotel/models/HotelInfoModel';
import NearByLocationInside from 'modules/hotel/models/NearByLocationInside';
import HotelDetailAccordion from 'modules/hotel/component/HotelDetailAccordion';
import FacilityAccordion from 'modules/hotel/component/FacilityAccordion';
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

    const [expandedFacility, setExpandedFacility] = React.useState<number | false>(false);
    const handleFacilityChange = (panel: number) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpandedFacility(isExpanded ? panel : false);
    };


    const hotelAllFacilityComponent = (hotelInfo: HotelInfoModel) => {
        let hotelFacility = hotelInfo?.hotelFacilities;
        let facilityRes:any[] = [];
        _.forEach(hotelFacility, function(facilityItem) {
            facilityRes.push(
                <FacilityAccordion data={facilityItem} expanded={expandedFacility == facilityItem.facilitiesGroup.id} onChange={handleFacilityChange} isMobile={true}></FacilityAccordion>
            )
          });
        return facilityRes;
    }

    return (
        <styles.MBox component="div" p={6}>
            <styles.AccordionHeading>
                {i18n.t('hotel.pages.roomlist.desktop.facilities.hdservices')}
            </styles.AccordionHeading>
            <div>
                {hotelAllFacilityComponent(hotelInfo)}
            </div>
        </styles.MBox>
    );
}));

export default FacilityAll;
