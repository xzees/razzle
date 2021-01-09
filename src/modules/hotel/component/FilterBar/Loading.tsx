import React from 'react';

import {
    Bar,
    Containers,
    GridBar,
    FilterBoxForFilter,
    Theme,
    SectionDesktop
} from './Style';
import { Grid, Box } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import RootStore from 'stores';
import SearchForm from '../SearchForm';
import Heading from 'common/src/components/Heading';
import Skeleton from '@material-ui/lab/Skeleton';

interface Iprop {
    isMobile?: boolean;
    title?: string;
    detail?: string;
}

const Loading = () => {
    return  ( 
      <Skeleton variant="text" width='100%' height={70} style={{ 
        borderRadius: 4,
        marginRight: 'auto',
        lineHeight: '1',
        paddingLeft: '30px',
        paddingRight: '30px',
        
      }} animation="wave"  />
    )
}

const LoadingLeft = () => {
    return  ( 
      <Skeleton variant="text" width='100%' height={70} style={{ 
        borderRadius: 4,

        marginRight: '5%',
        lineHeight: '1',
        paddingLeft: '30px',
        paddingRight: '30px',
        
      }} animation="wave"  />
    )
}

const LoadingRight = () => {
    return  ( 
      <Skeleton variant="text"  height={70} style={{ 
        borderRadius: 4,
        marginLeft: '5%',
        marginRight: 'auto',
        lineHeight: '1',
        paddingLeft: '30px',
        paddingRight: '30px',
        
      }} animation="wave"  />
    )
}

const index = (props: Iprop) => {

    const {  } = props;

    const style: React.CSSProperties = { 
        background: 'white', 
        border: '1px solid #ddd', 
        borderRadius: 4, 
        float: 'right', 
        fontSize: 23, 
        height: 40, 
        padding: '0 20px' 
    };
    return (
        <>
                <Containers>
                    <FilterBoxForFilter container={true}>
                        <Grid item={true} xs={12}>
                            <Loading />    
                        </Grid>
                    </FilterBoxForFilter>
                    <FilterBoxForFilter container={true}>
                        <Grid item={true} xs={6}>
                            <LoadingLeft />    
                        </Grid>
                        <GridBar item={true} xs={6}  >
                            <LoadingRight />    
                        </GridBar>
                    </FilterBoxForFilter>
                </Containers>
        </>
    );
}

export default index;