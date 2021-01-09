import React from 'react';
import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';

const SkelDeskFBar = () => {
  return (
    <SkeletonBar variant="rect" width={146} height={40} style={{ borderRadius: 4 }} animation="wave" />
  );
}

const SkeletonBar = styled(Skeleton)`
  float: right;
  font-size: 23px;
  padding: 0px 20px;
`

export default SkelDeskFBar;