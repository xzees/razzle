import React from 'react';
import {
    BoxContent,
    GridForPrice,
    BoxContentRight,
    Smooth
} from 'modules/hotel/component/SearchHotel/Style';
import { Grid, Box } from '@material-ui/core';

import Image from 'modules/hotel/component/SearchHotel/Image/Loading';
import Price from 'modules/hotel/component/SearchHotel/Price/Loading';
import Layout from 'modules/hotel/component/SearchHotel/Layout';
import Title from 'modules/hotel/component/SearchHotel/Title/Loading';
import Option from 'modules/hotel/component/SearchHotel/Option/Loading';
import _ from 'lodash';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Loading = (props: any) => {

    const isLarge = useMediaQuery('(max-width: 959px)');     
  
    if (props.isMobile) {
        return (
            <Layout isMobile={props.isMobile}>
                <Grid container={true}>
                    <Grid item={true} xs={3} >
                        <Image  
                            isMobile={props.isMobile}
                        /> 
                    </Grid>
                    <Grid item={true} xs={9} >
                        <BoxContent>
                            <Grid item={true} xs={12}>
                                <Title 
                                    isMobile={props.isMobile}
                                />
                            </Grid>
                            <Grid item={true} xs={12}>
                                <Option {...props} />
                            </Grid>
                            <GridForPrice item={true} xs={12}>
                                    <Price
                                        isMobile={props.isMobile}
                                    />
                            </GridForPrice>
                        </BoxContent>
                    </Grid>
                </Grid>
            </Layout>
        );
    }
    

    return (
        <Smooth className={'reveal'} timing={250}>
            <Layout isMobile={props.isMobile}>
                <Grid 
                item={true} 
                xs={12} 
                md={3} 
                style={{
                    position: 'relative'
                }}>
                    <Image  
                        isMobile={props.isMobile}
                    /> 
                </Grid>
                <Grid item={true} xs={6} md={4} lg={5}>
                    <BoxContent 
                        style={{paddingTop: isLarge && 0 }}
                    >
                        <Title/>

                        <Option {...props} /> 
                    </BoxContent>
                </Grid>
                <Grid item={true} xs={6}  md={5} lg={4}>
                    <BoxContentRight style={{
                        height: "100% !important"
                    }}>
                        <Box className={'boxleft'}>
                            <Price
                                isMobile={props.isMobile}
                            />
                        </Box>
                    </BoxContentRight>
                </Grid>
            </Layout>
        </Smooth>
    );
};

export default Loading;