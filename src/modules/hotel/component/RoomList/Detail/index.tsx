import React from 'react';
import _ from 'lodash';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import { Box, Grid } from '@material-ui/core';
import Title from '../Title'
import LayoutTitle from '../Title/Layout/Desktop'
import Ribbon from 'modules/hotel/component/RoomList/Ribbon/Desktop'
import FacilityAccordion from 'modules/hotel/component/RoomList/FacilityAccordion'
import {
    TextPrice,
    DiscountDiv,
    DiscountDesktop,
    BoxFlexRight
} from 'modules/hotel/component/RoomList/Price/Style'
import i18n from 'utilities/I18n';

const index = (props: any) => {
    const [expandedFacility, setExpandedFacility] = React.useState<string | false>(props.roomFacilities[0].facilitiesGroup.translationNameEn);

    const hotelAllFacilityComponent = () => {
        
        let hotelFacility = props.roomFacilities;
        let facilityRes:any[] = [];
        _.forEach(hotelFacility, function(facilityItem) {
            facilityRes.push(
                <FacilityAccordion data={facilityItem} expanded={expandedFacility == facilityItem.facilitiesGroup.translationNameEn} onChange={handleFacilityChange} isMobile={true}></FacilityAccordion>
            )
        });
        return facilityRes;
    }

    const handleFacilityChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpandedFacility(isExpanded ? panel : false);
    }

    return (
        <>
            <div 
                style={{
                    backgroundColor: ColorManager.default.white,
                    width: '100%',
                    height: '100%',
                }}
            >
                
                    <LayoutTitle>
                        <Title propName={props.roomName} />
                        
                    </LayoutTitle>
                    <LayoutTitle>
                        <Box style={{width:'100%', display:'flex', textAlign:'left'}}>
                            <DiscountDiv style={{
                                marginTop:0 
                            }}>
                                <DiscountDesktop>200</DiscountDesktop>
                                <div style={{
                                    backgroundColor: '#e12d2d',
                                    color: '#fff',
                                    verticalAlign: 'middle',
                                    fontSize: FontManager.default.TEXT_20,
                                    lineHeight: '1',
                                    maxWidth: '110px',
                                    textAlign: 'center',
                                    borderRadius: '2px',
                                    padding: '8px',
                                    marginRight: '-25px',
                                    float: 'right',
                                }}>
                                    {i18n.t('hotel.components.roomlist.detail.sale')} -200
                                </div>
                            </DiscountDiv>
                        </Box>

                        <BoxFlexRight style={{
                              textAlign: 'left'
                        }}>
                            <TextPrice>
                                {i18n.t('hotel.components.roomlist.detail.thb')} {props.incrementalPrice[0].price.toLocaleString()}
                            </TextPrice>
                        </BoxFlexRight>
                    </LayoutTitle>
                    <Box style={{
                        flexBasis:'100%',
                        maxWidth: '100%',
                        flexGrow: 0,
                        height:'280px',
                        overflowY: 'scroll'
                    }} >
                        {hotelAllFacilityComponent()}
                    </Box>
                   
            </div> 
        </>
    )
}

export default index;