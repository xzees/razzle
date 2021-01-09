import React from 'react';
import { Grid, Box } from '@material-ui/core';
import ColorManager from 'common/Manager/ColorManager';
import _ from 'lodash';
import { 
    Coin,
    Verified
} from 'modules/hotel/component/Icon';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
    TextAndIcon,
} from 'modules/hotel/component/SearchHotel/Option/Style';
import FontManager from 'modules/hotel/Manager/FontManager';
import Facility from 'modules/hotel/component/SearchHotel/Option/Facility';
import i18n from 'utilities/I18n';

const index = (props: any) => {

    const isLarge = useMediaQuery('(min-width: 1280px)'); 
    const isMedium = useMediaQuery('(min-width: 1220px)'); 
    const isSmall = useMediaQuery('(min-width: 992px)'); 

    if (props.isMobile) {
        return (
            <>
                <Box mt={2} >
                    <Grid container={true} spacing={0} >
                        
                        {props.randomMock == "G" && <> <Grid className={'option2'}
                            style={{padding:0}}
                            item={true} xs={12} sm={12} md={12} lg={5}
                        > 
                            <TextAndIcon 
                                fontSize={FontManager.default.TEXT_TINY_18}
                                className={'BoxOption1'}
                                color={ColorManager.default.greenColor}
                            >
                                <Verified />
                                {i18n.t('hotel.components.desktop.breakfastincluded')}
                            </TextAndIcon>
                            <TextAndIcon 
                                className={'BoxOption2'}
                                fontSize={FontManager.default.TEXT_TINY_18}
                                color={ColorManager.default.greenColor} 
                            >
                                <Verified />
                                {i18n.t('hotel.components.desktop.freecancel')}
                            </TextAndIcon>
                        </Grid>
                            
                        <Grid
                            className={'option2'} 
                            style={{padding:0}}
                            item={true} xs={12} sm={12} md={12} lg={7}
                        >  
                            <TextAndIcon 
                                className={'BoxOption4'}
                                fontSize={FontManager.default.TEXT_TINY_18}
                                color={ColorManager.default.greenColor}
                            >
                                <Verified />
                                {i18n.t('hotel.components.desktop.payathotel')}
                            </TextAndIcon>
                            <TextAndIcon 
                                className={'BoxOption5'}
                                fontSize={FontManager.default.TEXT_TINY_18}
                                color={ColorManager.default.brown}
                            >
                                <Coin />
                                {i18n.t('hotel.components.searchhotel.option.member.receivebigbonus')} 
                            </TextAndIcon>
                        </Grid> </>}
    
    
                        {props.randomMock == "N" && <> <Grid  className={'option2'}
                            style={{padding:0}}
                            item={true} xs={12} sm={12} md={12} lg={5}
                        > 
                            <TextAndIcon 
                                className={'BoxOption6'}
                                color={ColorManager.default.greenColor}
                                fontSize={FontManager.default.TEXT_TINY_18}
                            >
                                <Verified />
                                {i18n.t('hotel.components.desktop.breakfastincluded')}
                            </TextAndIcon>
                            <TextAndIcon 
                                className={'BoxOption7'}
                                color={ColorManager.default.greenColor} 
                                fontSize={FontManager.default.TEXT_TINY_18}
                            >
                                <Verified />
                                {i18n.t('hotel.components.desktop.freecancel')}
                            </TextAndIcon>
                        </Grid>
                            
                        <Grid  className={'option2'}
                            style={{padding:0}}
                            item={true} xs={12} sm={12} md={12} lg={7}
                        >  
                            <TextAndIcon 
                                className={'BoxOption8'}
                                color={ColorManager.default.greenColor}
                                fontSize={FontManager.default.TEXT_TINY_18}
                            >
                                <Verified />
                                {i18n.t('hotel.components.desktop.payathotel')}
                            </TextAndIcon>
                        
                        </Grid> </>}
    
                        {props.randomMock == "S" && <> <Grid  className={'option2'}
                            style={{padding:0}}
                            item={true} xs={12} sm={12} md={12} lg={5}
                        > 
                            <TextAndIcon 
                                className={'BoxOption9'}
                                color={ColorManager.default.greenColor}
                                fontSize={FontManager.default.TEXT_TINY_18}
                            >
                                <Verified />
                                {i18n.t('hotel.components.desktop.breakfastincluded')}
                            </TextAndIcon>
                        
                        </Grid>
                            
                        <Grid  className={'option2'}
                            style={{padding:0}}
                            item={true} xs={12} sm={12} md={12} lg={7}
                        >  
                            <TextAndIcon 
                                className={'BoxOption10'}
                                fontSize={FontManager.default.TEXT_TINY_18}
                                color={ColorManager.default.greenColor}
                            >
                                <Verified />
                                {i18n.t('hotel.components.desktop.payathotel')}
                            </TextAndIcon>
                        
                        </Grid> </>}                    
                        
                    </Grid>
                </Box>
    
                <Box mt={2} >
                    <Grid container={true} spacing={0} >
                            <Facility 
                                isLarge={isLarge}
                                isMedium={isMedium}
                                isSmall={isSmall}
                                {...props} 
                            />
                    </Grid>
                </Box>
            </>
        );
    }
      
    return (
        <Grid  className={'option2'}
            style={{
                padding:0,
                paddingBottom: '10px'
            }}
            item={true} xs={12} sm={12} md={12} lg={12}
        >  
            <TextAndIcon
                className={'BoxOption11'}
                fontSize={FontManager.default.TEXT_TINY_18}
                color={ColorManager.default.brown}
            >
                <Coin />
                {i18n.t('hotel.components.roomlist.option.coin.lblregister')}
            </TextAndIcon>
        </Grid>
    )
}

export default index;