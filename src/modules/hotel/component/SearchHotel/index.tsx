import React from 'react';
import {
    BoxContent,
    GridForPrice,
    Smooth,
    BoxContentRight
} from 'modules/hotel/component/SearchHotel/Style';
import { Grid, Box } from '@material-ui/core';
import qs from 'query-string';
import Image from 'modules/hotel/component/SearchHotel/Image';
import Price from 'modules/hotel/component/SearchHotel/Price';
import Rating from 'modules/hotel/component/SearchHotel/Rating';
import Layout from 'modules/hotel/component/SearchHotel/Layout';
import Title from 'modules/hotel/component/SearchHotel/Title';
import Location from 'modules/hotel/component/SearchHotel/Location';
import Review from 'modules/hotel/component/SearchHotel/Review';
import Option from 'modules/hotel/component/SearchHotel/Option';
import Resv from 'modules/hotel/component/SearchHotel/Resv';
import _ from 'lodash';
import NavigationManager from 'common/Manager/NavigationManager';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SearchHotelInterface from 'modules/hotel/component/SearchHotel/SearchHotelInterface';
import { animateScroll } from 'react-scroll';

const styleCss = {
    styleGrid: {
        position: 'relative'
    } as any,
    styleBoxContent: {
        paddingBottom: 0
    } as any,
    BoxContentRight: {
        height: '100% !important'
    },
    BoxContentRightBeforeLeft: {
        height: '100% !important',
        paddingLeft: '50px'
    },
};


const index = (props: SearchHotelInterface) => {
    const {
        hotelListModel
    } = props;
    
    const propImage = hotelListModel.hotelMainPhoto.urlOriginal;
    const propCheck = props.index;
    const propName = hotelListModel.name;
    const locationSearch = props.location.search;

    const isLarge = useMediaQuery('(max-width: 959px)');     
    const LinkRoomlist = () => {
        animateScroll.scrollToTop();
        NavigationManager.goTo(
            NavigationManager.ROUTES.ROOM_LIST,
            {
                ...qs.parse(locationSearch), 
                hotelId: hotelListModel.hotelId,
            }
        );
    }
    if (props.isMobile) {
        return (
            <Smooth className={'reveal'} timing={250} >
                <Layout isMobile={props.isMobile}>
                    <Grid container={true}>
                        <Grid item={true} xs={3} >
                            <Image  
                                check={propCheck}
                                onClick={LinkRoomlist}
                                title={propName}
                                isMobile={props.isMobile}
                                coverImage={propImage}
                            />
                        </Grid>
                        <Grid item={true} xs={9} >
                            <BoxContent>
                                <Grid item={true} xs={12}>
                                    <Title 
                                        isMobile={props.isMobile}
                                        LinkRoomlist={LinkRoomlist}
                                        propName={propName}
                                    />
                                </Grid>
                                <Grid item={true} xs={12}>
                                    <Rating 
                                        rating={(hotelListModel.class)}
                                        isMobile={props.isMobile}
                                    />
                                </Grid>
                                <Grid item={true} xs={12}  >
                                    <Location {...props} />
                                    <Review {...props} />
                                    <Option {...props} />
                                </Grid>
                                <GridForPrice item={true} xs={12}>
                                    <Price
                                        identifier={hotelListModel.identifier}
                                        isMobile={props.isMobile}
                                        onClick={LinkRoomlist}
                                        title={hotelListModel.address}
                                        price={hotelListModel.price}
                                    />
                                </GridForPrice>
                            </BoxContent>
                        </Grid>
                    </Grid>
                </Layout>
            </Smooth>
        );
    }
    
    const IsLargeDesktop = () => {
        return (
            <Grid item={true} xs={12} >
                <BoxContent style={styleCss.styleBoxContent}>
                    <Title 
                        LinkRoomlist={LinkRoomlist}
                        isMobile={props.isMobile}
                        propName={propName}

                    />
                    <Rating 
                        rating={(hotelListModel.class)}
                        isMobile={props.isMobile}
                    />
                </BoxContent>
            </Grid>
        );
    };
    const IsLargeDesktopRerv = () => {
        return (
            <Grid item={true} xs={12}  >
                <BoxContentRight style={styleCss.BoxContentRight}>
                    <RervEle /> 
                </BoxContentRight>
            </Grid>
        );
    };
    const IsLargeDesktopTitle = () => {
        return (
            <>
                <Title 
                    LinkRoomlist={LinkRoomlist}
                    propName={propName}
                    isMobile={props.isMobile}
                />
                <Rating 
                    rating={(hotelListModel.class)}
                    isMobile={props.isMobile}
                />
            </>
        );
    };

    const RervEle = () => {
        const style = {
            width: '100%'
        };

        return (<Resv 
            onClick={LinkRoomlist}
            style={style}
        />);
    };

    const styleBoxContent = {
        paddingTop: isLarge && 0,
    };

    return (
        <Smooth className={'reveal'} timing={250} >
            <Layout isMobile={props.isMobile}>
                <Grid 
                    item={true} 
                    xs={12} 
                    md={3} 
                    style={styleCss.styleGrid}
                >
                    <Image  
                        parent_props={props.hotelListModel}
                        check={propCheck}
                        onClick={LinkRoomlist}
                        title={propName}
                        isMobile={props.isMobile}
                        coverImage={propImage}
                    />
                </Grid>
                {isLarge && <IsLargeDesktop />}
                <Grid item={true} xs={6} md={4} lg={5}>
                    <BoxContent 
                        style={styleBoxContent}
                    >
                        {!isLarge && <IsLargeDesktopTitle />}
                        
                        <Location {...props} />
                        <Review {...props} />
                        <Option {...props} />
                    </BoxContent>
                </Grid>
                <Grid item={true} xs={6}  md={5} lg={4}>
                    <BoxContentRight style={styleCss.BoxContentRightBeforeLeft}>
                        <Box className={'boxleft'}>
                            <Price
                                identifier={hotelListModel.identifier}
                                isMobile={props.isMobile}
                                onClick={LinkRoomlist}
                                title={hotelListModel.address}
                                price={hotelListModel.price}
                            />
                        </Box>
                    </BoxContentRight>
                </Grid>
                {isLarge && <IsLargeDesktopRerv />}
            </Layout>
        </Smooth>
    );
};

export default index;