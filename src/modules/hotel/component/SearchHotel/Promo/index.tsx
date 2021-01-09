import React from 'react';
import {
    BoxMain,
    BoxPromo,
    CircleImage,
    Containers,
    BoxMainMobile,
    TitleDesktop,
    TitleMobile,
    PromoStyle,
} from 'modules/hotel/component/SearchHotel/Promo/Style';
import { Grid, Box } from '@material-ui/core';
import _ from 'lodash';
import { RenderTagIcon } from 'modules/hotel/component/Icon';
import Heading from 'common/src/components/Heading';
import ColorManager from 'common/Manager/ColorManager';
import FillFull from 'modules/hotel/component/Button/FillFull';
import i18n from 'utilities/I18n';
import ItemInterface from 'modules/hotel/pages/hotel_list/Layout/Items/ItemInterface';

type ItemInterfaces = Omit<ItemInterface, 'stores'>

const index = (props: ItemInterfaces) => {

    if (props.isMobile) {
        return (
            <Containers>
                <section>
                    <BoxMainMobile>
                        <BoxMain>
                            <BoxPromo>
                                <Grid container={true} >
                                    <Grid item={true} xs={2}>
                                        <Box style={PromoStyle.mobile.box}>
                                            <CircleImage 
                                                width={'37px'}
                                                height={'37px'}
                                            >
                                                <RenderTagIcon />
                                            </CircleImage>
                                        </Box>
                                    </Grid>
                                    <Grid item={true} xs={10}>
                                        <Box
                                            style={PromoStyle.mobile.boxSecond}
                                        >
                                            <Heading 
                                                content={i18n.t('hotel.desktop.promo.title')} 
                                                {...TitleMobile} 
                                            />
                                            <div style={PromoStyle.mobile.div}>
                                                {i18n.t('hotel.desktop.promo.coupon')}
                                            </div>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </BoxPromo>
                        </BoxMain>
                    </BoxMainMobile>
                </section>
            </Containers>
        );
    }

    return (
        <BoxMain>
            <BoxPromo>
                <Grid container={true} >
                    <Grid item={true} xs={1}>
                        <Box style={PromoStyle.desktop.box}>
                            <CircleImage 
                                width={'45px'}
                                height={'45px'}
                            >
                                <RenderTagIcon />
                            </CircleImage>
                        </Box>
                    </Grid>
                    <Grid item={true} xs={8}>
                        <Box
                            style={PromoStyle.mobile.boxSecond}
                        >
                            <Heading 
                                content={i18n.t('hotel.desktop.promo.title')} 
                                {...TitleDesktop} 
                            />
                            <div style={PromoStyle.desktop.div}>{i18n.t('hotel.desktop.promo.coupon')}</div>
                        </Box>
                    </Grid>
                    <Grid 
                        item={true} 
                        xs={3}
                        style={PromoStyle.desktop.grid}
                    >
                        <Box 
                            style={PromoStyle.desktop.boxThree}
                        >
                        <FillFull 
                            backgroundColor={ColorManager.default.orange2Color}
                            style={PromoStyle.desktop.fullfill}
                        >
                            {i18n.t('hotel.desktop.btn.item.detail')}
                        </FillFull>
                        </Box>
                    </Grid>
                </Grid>
            </BoxPromo>
        </BoxMain>
    );
};

export default index;