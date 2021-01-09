import React from 'react'
import { Grid, Box, styles, useStyles, FontManager, ColorManager } from './styles';
import { inject, observer } from 'mobx-react';
import RoomListInterface from 'modules/hotel/pages/room_list/RoomListInterface';
import { Link, Element, Events} from "react-scroll";
import HotelInfoModel from 'modules/hotel/models/HotelInfoModel';
import HotelPolicyDesktop from 'modules/hotel/component/HotelPolicyDesktop';
import DomainIcon from '@material-ui/icons/Domain';
import ErrorOutlinedIcon from '@material-ui/icons/ErrorOutlined';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import HotelDetailAccordion from 'modules/hotel/component/HotelDetailAccordion';
import _ from 'lodash';
import i18n from 'utilities/I18n';

const Policy = inject('stores')(
    observer((props: RoomListInterface) => {
    const classes = useStyles();
    const uiStore = props.stores!.HotelRootStore;
    const hotelInfo: HotelInfoModel = uiStore.RoomlistStore.returnData.hotelInfo;

    const policy:any[] = [{ 
        heading: i18n.t('hotel.pages.roomlist.desktop.policy.chkinchkout'), id: 'checkincheckout', icon:'https://assets.travizgo.com/development/api/hotel/121-information.svg', iconType: 'url', listType:'listtime', lists: [ 
        { title: i18n.t('hotel.pages.roomlist.desktop.policy.chkintime'), subtitle: hotelInfo?.checkinCheckoutTimes.checkinFrom, icon:<ErrorOutlinedIcon style={{color: ColorManager.default.fifthColor}} fontSize="small"/> },
        { title: i18n.t('hotel.pages.roomlist.desktop.policy.earlychkout'), subtitle: hotelInfo?.checkinCheckoutTimes.checkoutTo, icon:<ErrorOutlinedIcon style={{color: ColorManager.default.fifthColor}} fontSize="small"/> }]
    }];
    hotelInfo?.hotelPolicies.map((p:any, index:number) => {
        policy.push( { heading: p.name, id: p.name, icon:p.icon, iconType: 'url', listType:'listicon', lists: [ 
            { title: p.content, icon:<ErrorOutlinedIcon style={{color: ColorManager.default.fifthColor}} fontSize="small"/> }]
        });
    });

    const [expandedPolicy, setExpandedPolicy] = React.useState<string | false>('checkin');
    const handlePolicyChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpandedPolicy(isExpanded ? panel : false);
    };
    const policyComponent = (policy:any) => {
        let policyRes:any[] = [];
        _.forEach(policy, function(policyItem) {
            policyRes.push(                
                <HotelDetailAccordion data={policyItem} expanded={expandedPolicy == policyItem.id} onChange={handlePolicyChange} isMobile={true}></HotelDetailAccordion>
            )
          });
        return policyRes;
    }

    return (
        <styles.MBox component="div" p={6}>
            <styles.AccordionHeading ref={props.refComp}>{i18n.t('hotel.pages.roomlist.desktop.policy.header')}</styles.AccordionHeading>
            <div>
                {policyComponent(policy)}
            </div>
        </styles.MBox>
    );
}));

export default Policy;