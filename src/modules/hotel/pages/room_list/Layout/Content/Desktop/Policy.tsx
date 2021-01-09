import React from 'react'
import { Grid, Box, styles, backgroungWhiteStyle, useStyles, FontManager, ColorManager } from './styles';
import { inject, observer } from 'mobx-react';
import RoomListInterface from 'modules/hotel/pages/room_list/RoomListInterface';
import { Link, Element, Events} from "react-scroll";
import HotelInfoModel from 'modules/hotel/models/HotelInfoModel';
import HotelPolicyDesktop from 'modules/hotel/component/HotelPolicyDesktop';
import DomainIcon from '@material-ui/icons/Domain';
import ErrorOutlinedIcon from '@material-ui/icons/ErrorOutlined';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
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

    return (
        <>
            <Element name={props.refName}></Element>
            <Box component="div" p={6} style={backgroungWhiteStyle}>
                <styles.AccordionHeading ref={props.refComp}>{i18n.t('hotel.pages.roomlist.desktop.policy.header')}</styles.AccordionHeading>
                <div>
                    <HotelPolicyDesktop data={policy}/>
                </div>
            </Box>
        </>
    );
}));

export default Policy;
