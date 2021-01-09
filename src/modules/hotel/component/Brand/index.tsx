import React from 'react';
import { Grid } from '@material-ui/core';
import Box from "@material-ui/core/Box";
import Heading from 'common/src/components/Heading';
import Style from './Style';
import Container from "common/src/components/UI/Container";
import { AppImageResponsive , AppImage } from 'common/components'
import ColorManager from 'common/Manager/ColorManager';
import 'react-lazy-load-image-component/src/effects/blur.css';
import i18n from 'utilities/I18n';

const index = () => {
    
    const [url] = React.useState([
        {
            path:'https://www.travizgo.com/hotel/src/img/logo/amari.png',
            title:'Amari Hotels & Resorts'
        },
        {
            path:'https://www.travizgo.com/hotel/src/img/logo/centara.png',
            title:'Centara Hotels & Resorts'
        },
        {
            path:'https://www.travizgo.com/hotel/src/img/logo/accor.png',
            title:'Accor Hotels'
        },
        {
            path:'https://www.travizgo.com/hotel/src/img/logo/Ibis.png',
            title:'Ibis Hotels'
        },
        {
            path:'https://www.travizgo.com/hotel/src/img/logo/novotel.png',
            title:'Novotel'
        },
        {
            path:'https://www.travizgo.com/hotel/src/img/logo/bwp.png',
            title:'Best Western  Western'
        },
        {
            path:'https://www.travizgo.com/hotel/src/img/logo/anantara.png',
            title:'Anantara'
        },
        {
            path:'https://www.travizgo.com/hotel/src/img/logo/hotusa.png',
            title:'Hotusa Hotels'
        },
        {
            path:'https://www.travizgo.com/hotel/src/img/logo/avani.png',
            title:'AVANI Hotels & Resorts'
        },
        {
            path:'https://www.travizgo.com/hotel/src/img/logo/ramada.png',
            title:'Ramada Worldwide'
        },
        {
            path:'https://www.travizgo.com/hotel/src/img/logo/como.png',
            title:'COMO Metropolitan'
        },
        {
            path:'https://www.travizgo.com/hotel/src/img/logo/regent.png',
            title:'Regent Hotels & Resorts'
        },
        {
            path:'https://www.travizgo.com/hotel/src/img/logo/sheraton.png',
            title:'Sheraton Hotels and Resorts'
        },
        {
            path:'https://www.travizgo.com/hotel/src/img/logo/rancho.png',
            title:'Rancho Valencia Resort'
        },
        {
            path:'https://www.travizgo.com/hotel/src/img/logo/plaza.png',
            title:'The Plaza'
        },
        {
            path:'https://www.travizgo.com/hotel/src/img/logo/mandarin_oriental.png',
            title:'Mandarin Oriental'
        },
        {
            path:'https://www.travizgo.com/hotel/src/img/logo/sripanwa.png',
            title:'Sri Panwa'
        },
        {
            path:'https://www.travizgo.com/hotel/src/img/logo/belmond.png',
            title:'Belmond Gran Hotel Timeo'
        }
    ]);

    return (
        <Container>
            <Box pt={6} pb={6}>
                <Grid container={true} >
                    <Grid item={true} xs={12} md={12} lg={12}>
                        <Box mt="2rem" mb="2rem">
                            <Heading content={i18n.t('hotel.components.brand.header.content')} {...propsBannerHotel.h1Style} />
                        </Box>
                    </Grid>
                    {url.map((v: any, index: any)=>{
                       return (
                            <Grid key={index} style={{...propsBannerHotel.gridImage}} item={true} xs={6} sm={6} md={2} lg={2} >
                                <AppImageResponsive effect="blur" src={v.path} alt={v.title} />
                            </Grid>
                       )
                    })}
                </Grid>
            </Box>
        </Container>
    );
};
const propsBannerHotel = {
    boxStyle: {
      margin: '0 auto',
    },
    h1Style: {
      as: 'h1',
      color: ColorManager.default.primaryColor,
      fontSize: ['25px', '29px', '31px', '35px', '45px'],
      fontFamily: 'DBHeaventRoundedMedv32',
      fontWeight: 'normal',
      lineHeight: 1,
      mb: '2px',
      textAlign: 'center',
    },
    gridImage: {
        padding: 20,
        justify: 'center'
    },
    gridHeading: {
        marginTop: '3rem',
    },
}

export default index;