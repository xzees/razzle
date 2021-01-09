import React from 'react';
import {
    Boxs,
    BoxMain,
    Containers,
    SectionMobile,
    BoxMainMobile
} from './Style';
import { Grid } from '@material-ui/core';
import _ from 'lodash';

interface ILayout {
    isMobile: boolean;
    [key: string]: any;
}

const index = (props: ILayout) => {
    
    if(props.isMobile)
    {
        return (<Containers>
            <SectionMobile>
                <BoxMainMobile>
                    {props.children}
                </BoxMainMobile>
            </SectionMobile>
        </Containers>)
    }
    
    return (
            <Boxs>
                <Grid container={true} >
                    {props.children}
                </Grid>
            </Boxs>
    )
}

export default index