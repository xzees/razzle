import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';

const SkelMobFBar = () => {
  return (
    <Box style={{ marginBottom: 8 }}>
      <Skeleton variant="rect" width='80%' height={20} style={{ borderRadius: 4 }} animation="wave" />
    </Box>
  );
}

export default SkelMobFBar;