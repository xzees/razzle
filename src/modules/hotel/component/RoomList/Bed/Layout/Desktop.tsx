import React from 'react';
import { Box } from '@material-ui/core';
import _ from 'lodash';


const Desktop = (props: any) => {
    
    return (
        <Box flexBasis={'60%'} maxWidth={'50%'} flexGrow={0}
            style={{
                marginTop: '12px',
                marginLeft: '0px',
                paddingLeft: '0px',
                textIndent: '0px',
                justifyContent: 'center',
                display: 'grid'
            }} 
        >
            {props.children}
        </Box>
    )
}

export default Desktop