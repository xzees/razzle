import React from 'react'
import { Grid, Box, styles, useStyles, FontManager, ColorManager } from './styles';
import { inject, observer } from 'mobx-react';
import RoomListInterface from 'modules/hotel/pages/room_list/RoomListInterface';
import HotelInfoModel from 'modules/hotel/models/HotelInfoModel';
import NearByLocationInside from 'modules/hotel/models/NearByLocationInside';
import HotelDetailAccordion from 'modules/hotel/component/HotelDetailAccordion';
import ProminentPoint from 'modules/hotel/component/ProminentPoint'
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CheckIcon from '@material-ui/icons/Check';
import _ from 'lodash';
import i18n from 'utilities/I18n';

const NearBy = inject('stores')(
    observer((props: RoomListInterface) => {
    const classes = useStyles();
    const uiStore = props.stores!.HotelRootStore;
    const hotelInfo: HotelInfoModel = uiStore.RoomlistStore.returnData.hotelInfo;

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    let popularAPI:NearByLocationInside[] = [];
    _.mapValues(hotelInfo.nearByLocation, (group: NearByLocationInside[]) => {
        popularAPI = _.concat(popularAPI, _.flattenDeep(group));
    });
    popularAPI = _.take(_.orderBy(popularAPI, ['user_ratings_total', 'desc']), 10);
    popularAPI = _.orderBy(popularAPI, ['distance', 'asc'])
    const popularList:any[] = popularAPI.map((item:NearByLocationInside) => {
        return {title: item.name, subtitle: item.distance.toFixed(1)+' '+i18n.t('hotel.components.nearbyacc.km'), userRatingsTotal: item.userRatingsTotal}
    });

    const nearByAPI:any[] = _.take(_.orderBy(hotelInfo.nearByLocation.nearby, ['distance', 'age']), 10);
    const nearByList:any[] = nearByAPI.map((item:NearByLocationInside) => {
        return {title: item.name, subtitle: item.distance.toFixed(1)+' '+i18n.t('hotel.components.nearbyacc.km'), userRatingsTotal: item.userRatingsTotal}
    });

    const nearby = [
        { heading: i18n.t('hotel.pages.roomlist.desktop.nearby.interest'), id: 'interest', listType:'listicon', lists: popularList},
        { heading: i18n.t('hotel.pages.roomlist.desktop.nearby.near'), id: 'near',listType:'listicon', lists: nearByList}
    ];   

    const [expanded, setExpanded] = React.useState<string | false>(nearby[0].id);

    const nearbyComponent = () => {
        let nearbyRes:any[] = [];
        _.forEach(nearby, function(nearbyItem, index) {
            nearbyRes.push(                
                <HotelDetailAccordion data={nearbyItem} expanded={expanded == nearbyItem.id} onChange={handleChange} isMobile={true}></HotelDetailAccordion>
            );
        });
        return nearbyRes;
    }

    const btnProminentPoint = [ {title:i18n.t('hotel.desktop.search.filter.paymentoption.notrequirecreditcard'), icon: <CreditCardIcon  />, isShow: hotelInfo.hotelPopularPolicies.cardRequired},
        {title:i18n.t('hotel.desktop.search.filter.paymentoption.athotel'), icon: <AttachMoneyIcon/>, isShow: hotelInfo.hotelPopularPolicies.payAtProperty },
        {title:i18n.t('hotel.components.desktop.freecancelwithlimitime'), icon: <CheckIcon/>, isShow: hotelInfo.hotelPopularPolicies.freeCancel }
    ];

    return (
        <>
            <styles.MBox component="div" m={6}>
                <styles.AccordionHeading ref={props.refComp}>
                    {i18n.t('hotel.pages.roomlist.desktop.nearby.nearby')}
                </styles.AccordionHeading>
                <div>
                    {nearbyComponent()}
                </div>
                <styles.TextRemark>
                    *** {i18n.t('hotel.pages.roomlist.desktop.nearby.remark')}
                </styles.TextRemark>
            </styles.MBox>
            <styles.MBox component="div" m={6}>
                <styles.AccordionHeading>
                    {i18n.t('hotel.pages.roomlist.desktop.nearby.outstanding')}
                </styles.AccordionHeading>
                <div>
                    <ProminentPoint data={btnProminentPoint}/>
                </div>
            </styles.MBox>
        </>
    );
}));

export default NearBy;
