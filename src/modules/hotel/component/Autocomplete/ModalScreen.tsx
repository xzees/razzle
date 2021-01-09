import React from 'react'; 
import ColorManager from 'common/Manager/ColorManager';
import ModalScreens from 'modules/hotel/component/ModalScreen';

import {
  CssTextField
} from 'modules/hotel/component/Autocomplete/Style';
import Component from 'modules/hotel/component/Autocomplete/Component';
import i18n from 'utilities/I18n';

interface Props {
  children?: any; 
  label: string; 
  fullscreen?: boolean;
  closeBtnAign?: 'left' | 'right';
  closeBtnIcon?: any;
  title?: any;
  onChange?: any;
  getOptionLabel: any;
  headerColor?: any;
  onKeyUp?: any;
  history?: any;
  value?: any;
  options?: any;
  setOption?: any;
  inputLabel?: any;
} 

const InputProps = {
  readOnly: true,
  style: {
    fontSize: 23,
    color: ColorManager.default.fourthColor
  },
};

export const useShowHistory = (props: any) => {
  const [state, setState] = React.useState(false);

  const handleClickOpen = () => {
    setState(true); 
  }; 

  const handleClose = () => {
    setState(false); 
  }; 

  return {
    state,
    setState,
    handleClickOpen,
    handleClose,
  };
};

const ModalScreen = (props: Props) => {
  const { label } = props; 
  const {
    state,
    setState,
    handleClickOpen,
    handleClose,
  } = useShowHistory(props);

  const inputChange = (e: any, values: any) => {
    if (values != null) {
      setState(false);
    } 
    props.onChange(e, values);
  };

  const inputLabelStyle = {
    shrink: true,
  };

  return (
    <>
      <CssTextField
        InputLabelProps={inputLabelStyle}  
        InputProps={InputProps}
        placeholder={label} 
        label={i18n.t('hotel.autocomplete.modalscreen.label')}
        value={props.value?.tag || ''}
        onClick={handleClickOpen} 
      />
      <ModalScreens 
        closeBtnIcon={props.closeBtnIcon}
        title={props.title}
        open={state}
        setOpen={setState}
        handleClose={handleClose}
      >
        <Component 
          isMobile={true} 
          {...props} 
          setOpen={setState}
          onChange={inputChange}
        />
      </ModalScreens>
    </>
  ); 
};

export default ModalScreen;