import React from 'react'
import { Grid, Box, styles, useStyles, FontManager, ColorManager } from './styles';
import { inject, observer } from 'mobx-react';
import RoomListInterface from 'modules/hotel/pages/room_list/RoomListInterface';
import HotelInfoModel from 'modules/hotel/models/HotelInfoModel';
import NearByLocationInside from 'modules/hotel/models/NearByLocationInside';
import HotelDetailAccordion from 'modules/hotel/component/HotelDetailAccordion';
import _ from 'lodash';
import i18n from 'utilities/I18n';

const Around = inject('stores')(
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

    const [expandedAround, setExpandedAround] = React.useState<string | false>(around[0].id);
    const handleAroundChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpandedAround(isExpanded ? panel : false);
    };
    const aroundComponent = () => {
        let aroundRes:any[] = [];
        _.forEach(around, function(aroundItem) {
            aroundRes.push(                
                <HotelDetailAccordion data={aroundItem} expanded={expandedAround == aroundItem.id} onChange={handleAroundChange} isMobile={true}></HotelDetailAccordion>
            )
          });
        return aroundRes;
    }

    return (
        <styles.MBox component="div" p={6}>
            <styles.AccordionHeading>
                {i18n.t('hotel.pages.roomlist.desktop.facilities.hdnearby')}
            </styles.AccordionHeading>
                <div>
                    {aroundComponent()}
                </div>
            <styles.TextRemark>
                *** {i18n.t('hotel.pages.roomlist.desktop.nearby.remark')}
            </styles.TextRemark>
        </styles.MBox>
    );
}));

export default Around;