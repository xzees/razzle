import React from 'react';
import { Box } from '@material-ui/core';
import _ from 'lodash';

const Desktop = (props: any) => {
    const boxContainerStyle = {
        flexGrow: 0,
        maxWidth: '21%',
        flexBasis: '21%',
    }
    return (
        <Box style={boxContainerStyle}>
            {props.children}
        </Box>
    );
};

export default Desktop;