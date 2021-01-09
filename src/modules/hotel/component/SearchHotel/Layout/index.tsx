import React from 'react';
import {
    Boxs,
    BoxMain,
    Containers,
    SectionMobile,
    BoxMainMobile
} from 'modules/hotel/component/SearchHotel/Layout/Style';
import { Grid } from '@material-ui/core';
import _ from 'lodash';
import LayoutInterface from 'modules/hotel/component/SearchHotel/Layout/LayoutInterface';

const index = (props: LayoutInterface) => {
    
    if (props.isMobile) {
        return (<Containers>
            <SectionMobile>
                <BoxMainMobile>
                    {props.children}
                </BoxMainMobile>
            </SectionMobile>
        </Containers>);
    }
    
    return (
        <BoxMain>
            <Boxs>
                <Grid container={true} >
                    {props.children}
                </Grid>
            </Boxs>
        </BoxMain>
    );
};

export default index;