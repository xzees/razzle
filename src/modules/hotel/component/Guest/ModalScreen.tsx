import React from 'react'; 
import ModalScreens from 'modules/hotel/component/ModalScreen'
import Input from './Input';
import Content from './Content'
import useModel from 'modules/hotel/Hook/useModel';

const ModalScreen = (props: any) => {

  const {
      handleClickOpen,
      setStateModel,
      stateModel,
      handleClose 
  } = useModel({});

  const propsInput = {
      ...props,
      handleClick: handleClickOpen,
  } as any;
  
  return (
    <>
        <Input {...propsInput} />
        <ModalScreens 
          closeBtnIcon={props.closeBtnIcon}
          title={props.title}
          open={stateModel}
          setOpen={setStateModel}
          handleClose={handleClose}
        >
          <Content handleClose={handleClose} {...props} />
        </ModalScreens>
    </>
  ); 
};

export default ModalScreen;
