import React from 'react';
import { Box } from '@material-ui/core';
import _ from 'lodash';
import {
    BoxContent
} from './Style';

const boxStyle = {
    paddingTop: '0',
    paddingBottom: '0'
};

const boxContentContainerStyle = {
    flexGrow: 0,
    maxWidth: '100%',
    flexBasis: '100%',
}

export const Coin = (props: any) => {
    return (
        <Box style={boxContentContainerStyle}>
            <BoxContent 
                style={boxStyle}
            >
                {props.children}

            </BoxContent>
        </Box>
    );
};

export const Bottom = (props: any) => {
    
    const boxStyleBottom = {
        paddingTop: '0',
        paddingBottom: '15px'
    };

    const boxBottomStyle = {
        flexGrow: 0,
        maxWidth: '80%',
        flexBasis: '80%',
    }

    return (
        <Box style={boxBottomStyle}>
            <BoxContent 
                style={boxStyleBottom}
            >
                {props.children}

            </BoxContent>
        </Box>
    );
};

const Desktop = (props: any) => {
    
    const boxDesktopStyle = {
        flexGrow: 0,
        maxWidth: '50%',
        flexBasis: '80%',
    }

    return (
        <Box style={boxDesktopStyle}>
            <BoxContent 
                style={boxStyle}
            >   
                {props.children}
            </BoxContent>
        </Box>
    );
};

export default Desktop;