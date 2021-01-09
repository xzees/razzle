import React from 'react';
import { Box } from '@material-ui/core';
import Heading from 'common/src/components/Heading';
import _ from 'lodash';
import styled from 'styled-components';
import FontManager from 'modules/hotel/Manager/FontManager';
import { Skeleton } from '@material-ui/lab';

export const BoxTitle = styled(Box)`
  display: block;
  display: -webkit-box;
  max-height: 60px;
  line-height: 1;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const Loading = (props: any) => {
    
    if(props.isMobile) {
        return (
            <BoxTitle style={{
                alignSelf: 'center',
            }}>
            </BoxTitle>
        )
    }
    
    return (
        <BoxTitle style={{
            alignSelf: 'center',
        }}>
            <Skeleton variant="text" height={'40px'} />
        </BoxTitle>
    )
}

export default Loading