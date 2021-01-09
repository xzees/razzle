import React, { useState } from 'react';
import LoadableComponents from 'common/components/LoadableComponents';
import Skeleton from '@material-ui/lab/Skeleton';
import Datepickers from './Datepickers';

const Loading = () => {
  const cssDiv = { 
    borderRadius: 4,
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: '1',
    paddingLeft: '30px',
    paddingRight: '30px',
  };
  return  ( 
    <Skeleton 
      variant={'rect'} 
      width={'100%'}
      height={50} 
      style={cssDiv}
      animation={'wave'} 
    />
  );
};

function index() {

  // const Datepickers = LoadableComponents(import('./Datepickers'),<Loading />);

  return (
    <Datepickers />
  );
}

export default index;