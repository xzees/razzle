import React from 'react';
import { Box } from '@material-ui/core';
import _ from 'lodash';
import {BoxContent} from './Style';


const Desktop = (props: any) => {
    
    return (
        <Box flexBasis={'100%'} maxWidth={'100%'} flexGrow={0} >
            <BoxContent style={{
                paddingBottom: '0'
            }} > 
                {props.children}
            </BoxContent>
        </Box>
    )
}

export default Desktop