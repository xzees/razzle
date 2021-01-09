import React from 'react';
import { Box } from '@material-ui/core';
import _ from 'lodash';
import { BoxContentRight } from './Style';

const Desktop = (props: any) => {

    const boxRightStyle = {
        paddingLeft: '0px',
        height: '100% !important',
    };

    const boxContainerStyle = {
        flexGrow: 0,
        maxWidth: '21%',
        flexBasis: '21%',
    }

    return (
        <Box style={boxContainerStyle}>
            <BoxContentRight style={boxRightStyle}>
                <Box className={'boxleft'}>
                    {props.children}
                </Box>
            </BoxContentRight>
        </Box>
    );
};

export default Desktop;