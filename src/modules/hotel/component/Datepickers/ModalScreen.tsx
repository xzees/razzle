import React from 'react'; 
import ModalScreens from 'modules/hotel/component/ModalScreen'
import Input from './Input';
import Dayp from '../DatepickerMobile'
import useModel from 'modules/hotel/Hook/useModel';

const ModalScreen = (props: any) => {
  const [value, setValue] = React.useState(''); 
  
  const {
      handleClickOpen,
      stateModel,
      setStateModel,
      handleClose 
  } = useModel({});
  
  const propsForInput: any = {
    ...props,
    handleClickLeft: handleClickOpen,
    handleClickRight: handleClickOpen
  };
  return (
    <>
        <Input {...propsForInput} />
        <ModalScreens 
          closeBtnIcon={props.closeBtnIcon}
          title={props.title}
          open={stateModel}
          setOpen={setStateModel}
          handleClose={handleClose}
        >
          <div>
              <Dayp {...props} handleClose={handleClose} />
          </div>
        </ModalScreens>
    </>
  ); 
};

export default ModalScreen; 
