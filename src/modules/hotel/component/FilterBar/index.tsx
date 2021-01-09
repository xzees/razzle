import React, { useState, useEffect } from 'react';
import {
    Bar,
    FilterBox,
    BarLeft,
    SectionMobile,
    Containers,
    ButtonFilter,
    GridBar,
    FilterBoxForFilter,
    Theme,
    TitleMobile,
    DivSticky,
    styleAccordionSummary,
    AccordionSummarys,
    HeadingDiv,
    Style
} from './Style';
import { Grid, Box, Divider } from '@material-ui/core';
import SearchForm from '../SearchForm';
import Heading from 'common/src/components/Heading';
import i18n from 'utilities/I18n';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import RadioFilter from './Radio';
import TextTotalSeacrh from './TextTotalSeacrh';
import RatingFilterMobile from './Rating/Mobile';
import RatingFilterDesktop from './Rating/Desktop';
import PriceRangeFilter from './PriceRange';
import GuestScrollFilter from './GuestScroll/Desktop';
import ModalScreen from './ModalScreen';
import PriceSelect from './Price/Desktop'
import PaymentFilter from './Payment/Desktop'
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/hotel/Manager/FontManager';
import _ from 'lodash';
import useModel from 'modules/hotel/Hook/useModel';
import styled from "styled-components";
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ModalScreensMobile from 'modules/hotel/component/ModelMap/ModalSceensMobile';
import qs from 'query-string';

const styles = {
    MyDividerStyle: styled<any>(Divider)`
        &.MuiDivider-root{
            background-color: ${ColorManager.default.greyColor};
            margin: 0 0.5rem;
        },
    `,
    MyAccordionSummaryStyle: styled<any>(AccordionSummary)`
        &.MuiAccordionSummary-root.Mui-focused {
            background-color: transparent;
        },
        .MuiAccordionSummary-content {
            margin-top : 0;
            margin-bottom : 0;
            flex-direction: column;
            width: 100%;
        },
        .MuiAccordionSummary-content.Mui-expanded{
            margin: 0;
        },
    `,
    MyAccordionStyle: styled<any>(Accordion)`
        box-shadow: 1px 1px 3px 0px #e0e0e0b3 !important;
        border-radius: 6;
        &.MuiAccordion-rounded: {
            border-radius: 6px !important;
        },
        &.MuiAccordionSummary-root: {
            padding-left: 20;
        },
    `,
}

const MyTextHeaderStyle = { fontSize: FontManager.default.TEXT_MEDIUM_22, color: ColorManager.default.thirdColor, padding: 0, margin: 0 };

export const HiddenFormSearch = (props: any) => {
    return (
        <>
            {props.open && <FilterBox container={true}>
                <Box width={'100%'} mt={2} >
                    <SearchForm Theme={Theme} btnSearch={props.btnSearch} />
                </Box>
            </FilterBox>}
        </>
    );
};

const BoxItem = (props: any) => {
    return (
        <AccordionSummarys {...styleAccordionSummary}>
            <HeadingDiv>
                <div>
                    {props.children}
                </div>
            </HeadingDiv>
        </AccordionSummarys>
    )
}
interface IRating {
    label: string, 
    star: number
    isChecked: boolean,
    count: number
}
interface Iprops {
    location: any;
    isMobile: boolean;
    latitude: number;
    longitude: number;
}

const index = (props: Iprops) => {
    const param: any = qs.parse(props.location.search);
    const {
        handleClickOpen,
        stateModel,
        setStateModel,
        handleClose 
    } = useModel({});
    const isClient = typeof window === 'object';
    const {latitude, longitude} = props;
    const center = {
      lat: _.round(latitude, 7),
      lng: _.round(longitude, 7)
    };
    const defaultProps = {
      center: center,
      zoom: 8
    };
    const [ mapProps, setMapProps ] = useState<any>(defaultProps);
    const [onReset, setOnReset] =  React.useState(false);

    const buttonOpenModel = (props: any) => {
        return (
            <ButtonFilter onClick={props.onClick} >
                {i18n.t('button.form.filter.submit.text')}
            </ButtonFilter>
        )
    }

    const resetClick = () => {
        setOnReset(true);
    }  
    
    const submitClick = () => {
        handleClose();
    }

    if (props.isMobile) {
        return (
            <>
                <SectionMobile>
                    <Containers>
                        <Grid item={true} xs={12}>
                            <FilterBoxForFilter container={true}>
                                <Grid item={true} xs={5}>
                                    <BarLeft>
                                        <ModalScreen
                                            fullscreen={true}
                                            label={'filter'}
                                            buttonOpenModel={buttonOpenModel}
                                            title={i18n.t('button.form.filter.submit.text')}
                                            handleClickOpen={handleClickOpen}
                                            stateModel={stateModel}
                                            setStateModel={setStateModel}
                                            handleClose={handleClose} 
                                        > 
                                        <Style.CalendarScrollContainer windowinnerheight={isClient ? window.innerHeight : 0} style={{ position: 'relative', overflow: 'scroll' }}>
                                            <styles.MyAccordionSummaryStyle >
                                                <BoxItem>
                                                    <Heading content={i18n.t('hotel.desktop.search.filter.price.detail')} {...TitleMobile} style={MyTextHeaderStyle}/>
                                                </BoxItem>
                                                <RadioFilter onReset={onReset}/>
                                            </styles.MyAccordionSummaryStyle>
                                            <styles.MyDividerStyle />

                                            <styles.MyAccordionSummaryStyle >
                                                <BoxItem>
                                                    <Heading content={i18n.t('hotel.desktop.search.filter.rating.title')} {...TitleMobile} style={MyTextHeaderStyle}/>
                                                </BoxItem>
                                                <RatingFilterMobile onReset={onReset} />
                                            </styles.MyAccordionSummaryStyle>
                                            <styles.MyDividerStyle />

                                            <styles.MyAccordionSummaryStyle >
                                                <BoxItem>
                                                    <Heading content={i18n.t('hotel.desktop.search.filter.pricerange')} {...TitleMobile} style={MyTextHeaderStyle}/>
                                                </BoxItem>
                                                <PriceRangeFilter onReset={onReset}/>
                                            </styles.MyAccordionSummaryStyle>
                                            <styles.MyDividerStyle />
                                            <Style.Box85SpaceHeight></Style.Box85SpaceHeight>
                                            </Style.CalendarScrollContainer>
                                            <Style.FooterButtonContainer>
                                                <Style.FooterButton buttontype="reset" onClick={resetClick} >{i18n.t('button.form.reset.text')}</Style.FooterButton>
                                                <Style.FooterButton buttontype="submit"onClick={submitClick}>{i18n.t('button.form.filter.submit.text')}</Style.FooterButton>
                                            </Style.FooterButtonContainer>
                                        </ModalScreen>
                                    </BarLeft>
                                </Grid>
                                <Grid item xs={2} style={{alignSelf: 'center'}}>
                                    <ModalScreensMobile {...props} latitude={param.latitude} longitude={param.longitude}>
                                        <div style={{width:'100%', height:'40px', boxShadow: '0px 1px 1px 0px #7b7b7b52', borderRadius: '4px',}}>
                                            <GoogleMapReact
                                                bootstrapURLKeys={{ key: 'AIzaSyDMCTfemEKm_49XKN2jllS5iocsEEmCBhw' }}
                                                defaultCenter={mapProps.center}
                                                defaultZoom={mapProps.zoom}
                                                options={{
                                                    fullscreenControl: false
                                                }}
                                                >
                                            </GoogleMapReact>
                                            <LocationOnIcon fontSize="small" style={{color: ColorManager.default.redColor, position: 'absolute', top: '50%', left: '50%', marginLeft: '-10px', marginTop: '-10px'}}></LocationOnIcon>
                                        </div>
                                    </ModalScreensMobile>
                                </Grid>
                                <GridBar item={true} xs={5} >
                                    <Bar>
                                        <TextTotalSeacrh/>
                                    </Bar>
                                </GridBar>
                            </FilterBoxForFilter>
                        </Grid>
                    </Containers>
                </SectionMobile>
            </>
        );
    }

    return (
        <>
            <DivSticky>
                <styles.MyAccordionStyle expanded={true}>
                    <styles.MyAccordionSummaryStyle >
                        <BoxItem>
                            <Heading content={i18n.t('hotel.desktop.search.filter.rating.title')} {...TitleMobile} style={MyTextHeaderStyle}/>
                        </BoxItem>
                        <RatingFilterDesktop onReset={onReset}/>
                        <styles.MyDividerStyle />
                    </styles.MyAccordionSummaryStyle>
                    <styles.MyAccordionSummaryStyle >
                        <BoxItem>
                            <Heading content={i18n.t('hotel.desktop.search.filter.pricing.title')} {...TitleMobile} style={MyTextHeaderStyle}/>
                        </BoxItem>
                        <PriceSelect onReset={onReset} />
                        <styles.MyDividerStyle />
                    </styles.MyAccordionSummaryStyle>
                    <styles.MyAccordionSummaryStyle >
                        <BoxItem>
                            <Heading content={i18n.t('hotel.desktop.search.filter.pricerange')} {...TitleMobile} style={MyTextHeaderStyle}/>
                        </BoxItem>
                        <PriceRangeFilter onReset={onReset} />
                        <styles.MyDividerStyle />
                    </styles.MyAccordionSummaryStyle>
                    <styles.MyAccordionSummaryStyle >
                        <BoxItem>
                            <Heading content={i18n.t('hotel.desktop.search.filter.guestscroll')} {...TitleMobile} style={MyTextHeaderStyle}/>
                        </BoxItem>
                        <GuestScrollFilter onReset={onReset} />
                        <styles.MyDividerStyle />
                    </styles.MyAccordionSummaryStyle>
                    <styles.MyAccordionSummaryStyle >   
                        <BoxItem>
                            <Heading content={i18n.t('hotel.desktop.search.filter.paymentoption')} {...TitleMobile} style={MyTextHeaderStyle}/>
                        </BoxItem>
                        <PaymentFilter onReset={onReset} />
                        <styles.MyDividerStyle />
                    </styles.MyAccordionSummaryStyle>
                </styles.MyAccordionStyle>
            </DivSticky>
        </>
    );
};

export default index;