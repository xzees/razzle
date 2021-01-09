import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';

const SkelMobSBar = () => {
  return (
    <Box>
      <Skeleton variant="rect" width='60%' height={20} style={{ borderRadius: 4 }} animation="wave" />
    </Box>
  );
}

export default SkelMobSBar;