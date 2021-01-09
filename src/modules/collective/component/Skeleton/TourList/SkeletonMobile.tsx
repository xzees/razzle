import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';

export const BoxMainSkelton = styled.div`
  background-color: #fff;
  margin-bottom: 10px;
  margin-left: -15px;
  margin-right: -15px;
  padding: 15px;
  .tour-period {
    display: none;
  }
  .tour-period.open {
    display: flex;
  }
`

const SkeletonMobile = () => {
  return (
    <BoxMainSkelton>
      <Box>
        <Skeleton variant="rect" height={249} style={{ borderRadius: 6, marginBottom: 10 }} animation="wave" />
        <Skeleton variant="rect" height={20} style={{ borderRadius: 4, marginBottom: 10 }} animation="wave" />
        <Skeleton variant="rect" width="80%" height={20} style={{ borderRadius: 4, marginBottom: 10 }} animation="wave" />
        <Skeleton variant="rect" height={53} style={{ borderRadius: 4, marginBottom: 10 }} animation="wave" />
        <Skeleton variant="rect" width="60%" height={27} style={{ borderRadius: 4, margin: '10px 0' }} animation="wave" />
        <Skeleton variant="rect" height={53} style={{ borderRadius: 4 }} animation="wave" />
      </Box>
    </BoxMainSkelton>
  );
}

export default SkeletonMobile;