import React, { useState } from 'react';

const useModel = (props: any) => {
  const [stateModel, setStateModel] = useState(false); 
  const [value, setValue] = useState(''); 
  
  const handleClickOpen = () => {
    setStateModel(true); 
  }; 

  const handleClose = () => {
    setStateModel(false); 
  }; 
  
  return {
    handleClickOpen,
    handleClose,
    stateModel,
    setStateModel
  };
};

export default useModel;