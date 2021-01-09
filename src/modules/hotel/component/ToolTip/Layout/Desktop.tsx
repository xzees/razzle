import React from 'react';
import {
    DivOutSide,
    DivInSide,
    Ul,
    UlMobile,
    DivInSideMobile
} from 'modules/hotel/component/ToolTip/Style';
import { Grid } from '@material-ui/core';

const Desktop = (props: any) => {
    return (
        <Ul {...props}>
            <DivInSide {...props}>
                <Grid item={true} xs={12}>
                    {props.children}
                </Grid>
            </DivInSide>
        </Ul>
    );
};

export default Desktop;