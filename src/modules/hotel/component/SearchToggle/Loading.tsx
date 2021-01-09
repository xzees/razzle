import React, { Component, Fragment } from 'react';

import {
    Containers,
    FilterBox,
    ResultBar,
    GridBar,
    Bar,
    Input,
    Theme,
    ResultBarH1Mobile,
    ResultBarH3Mobile,
} from './Style'
import Heading from 'common/src/components/Heading';
import { Grid, Box } from '@material-ui/core';
import SearchForm from 'modules/hotel/component/SearchForm';
import Skeleton from '@material-ui/lab/Skeleton';

interface Iprop {
    name: string;
    label: string;
    btnSearch: any;
    open: boolean;
    setOpen: any;
}

const SkeletonLoading = () => {
    return  ( 
      <Skeleton variant="text" width='70%' height={70} style={{ 
        borderRadius: 4,
        marginLeft: '30%',
        marginRight: 'auto',
        lineHeight: '1',
        paddingLeft: '30px',
        paddingRight: '30px',
        
      }} animation="wave"  />
    )
}

const Loading = (props: Iprop) => {
    
    const { 
        name,
        label,
        btnSearch,
        open,
        setOpen
    } = props;

    return (
        
        <Containers>
            {/* <FilterBox container={true}>
                <Grid item={true} xs={6}>
                    <ResultBar>
                        <Box style={{ marginBottom: 8 }}>
                            <Skeleton variant="rect" width='80%' height={20} style={{ borderRadius: 4 }} animation="wave" />
                        </Box>
                        <Skeleton variant="rect" width='60%' height={20} style={{ borderRadius: 4 }} animation="wave" />
                    </ResultBar>
                </Grid>
                <GridBar item={true} xs={6}  >
                    <SkeletonLoading />
                </GridBar>
            </FilterBox> */}
        </Containers>
    );
};

export default Loading;