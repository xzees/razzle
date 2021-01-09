import React from 'react';
import { Box } from '@material-ui/core';
import _ from 'lodash';
import { 
    BoxContent,
    removePadding
} from './Style';

const Desktop = (props: any) => {
    const boxStyle = {
        flexGrow: 0,
        maxWidth: '20%',
        flexBasis: '20%',
    }
    return (
        <Box style={boxStyle}>
            <BoxContent 
                style={removePadding}
            >
                {props.children}
            </BoxContent>
        </Box>
    );
};

export default Desktop;