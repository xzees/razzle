import React from 'react';
import {
    DivOutSide,
    DivInSide,
    Ul,
    UlMobile,
    DivInSideMobile
} from 'modules/hotel/component/ToolTip/Style';
import { Grid } from '@material-ui/core';

const Mobile = (props: any) => {
    return (
        <UlMobile {...props}>
            <DivInSideMobile {...props}>
                <Grid item={true} xs={12}>
                    {props.children}
                </Grid>
            </DivInSideMobile>
        </UlMobile>
    );
};

export default Mobile;