import React from 'react';
import { Grid ,Box } from '@material-ui/core';
import _ from 'lodash';
import { Skeleton } from '@material-ui/lab';

const styles = {
    style: {
        verticalAlign: 'middle',
        width: '18px'
    }
}

const Loading = (props: any) => {
    return (
        <>
            <Box mt={2} >
                <Grid container={true} spacing={0} >                    
                   <Grid className={'option2'}
                        style={{padding:0}}
                        item={true} xs={12} sm={12} md={12} lg={12}>                         
                        <Skeleton variant="text" width={'60%'} height={'30px'} />
                    </Grid>
                </Grid>
                <Grid container={true} spacing={0} >                    
                   <Grid className={'option2'}
                        style={{padding:0}}
                        item={true} xs={12} sm={12} md={12} lg={12}
                    >                         
                        <Skeleton variant="text" width={'70%'} height={'30px'} />
                    </Grid>
                </Grid>
                <Grid container={true} spacing={0} >
                    
                   <Grid className={'option2'}
                        style={{padding:0}}
                        item={true} xs={12} sm={12} md={12} lg={12}
                    >                         
                        <Skeleton variant="text" width={'70%'} height={'30px'} />
                    </Grid>
                </Grid>
                <Grid container={true} spacing={0} >
                    
                    <Grid className={'option2'}
                         style={{padding:0}}
                         item={true} xs={12} sm={12} md={12} lg={12}
                     >                          
                        <Skeleton variant="text" width={'70%'} height={'30px'} />
                     </Grid>
                 </Grid>
            </Box>
        </>
    )
}

export default Loading