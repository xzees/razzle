import ColorManager from 'common/Manager/ColorManager';
import React from 'react';
import {
  CssTextField,
  MCssTextField
} from 'modules/hotel/component/Autocomplete/Style';
import { HooksAutocompleteProps } from 'modules/hotel/component/Autocomplete/withHooksHOC';
import i18n from 'utilities/I18n';
import ClearIcon from '@material-ui/icons/Clear';
import { IconButton } from '@material-ui/core';

const index = (props: HooksAutocompleteProps) => {

    const {
      autocompleteUI
    }: any = props;

    const inputProps = props.data.getInputProps();
    const optionProp = {
      ...inputProps
    };

    const endIcon = () => ( props.value && <IconButton
        aria-label="toggle visibility"
        onClick={() => props.setValue('')}
        style={{padding: 0}}
      >
        <ClearIcon />
      </IconButton>
    )

    const InputProps = {
      style: {
        ...autocompleteUI.input.InputProps.desktop.style
      },
      endAdornment: endIcon()
    };
    if (props.isMobile) {

      const MInputProps = {
        style: {
          ...autocompleteUI.input.InputProps.mobile.style
        },
        endAdornment: endIcon()
      };
      return (
        <>
          <div style={{...autocompleteUI.input.div.mobile}}>
            <MCssTextField
              {...optionProp}
              variant="outlined"
              placeholder={props.placeholder}
              InputProps={MInputProps}
              autoFocus={props.isMobile}
              onKeyUp={props.onKeyUp}
            />
          </div>
        </>
      );
    }
    
    const backgroundcolor =  !props.data.focused ? {
      backgroundcolor: autocompleteUI.input.TextField.backgroundColor
     } : {};

    const labelcolor =  !props.data.focused ? {
      labelcolor: autocompleteUI.input.TextField.labelColor
     } : {};
     
    const inputcolor =  !props.data.focused ? {
      inputcolor: autocompleteUI.input.TextField.inputColor
     } : {};

     return (
      <>
        <div style={{...autocompleteUI.input.div.desktop}}>
          <CssTextField
            {...optionProp}
            label={i18n.t('hotel.autocomplete.label')}
            InputLabelProps={{
              shrink: true,
            }}
            placeholder={props.placeholder}
            InputProps={InputProps}
            onKeyUp={props.onKeyUp}
            {...backgroundcolor}
            {...labelcolor}
            {...inputcolor}
            paddingtop={autocompleteUI.input.paddingTop}
            paddingbottom={autocompleteUI.input.paddingBottom}
            paddingleft={autocompleteUI.input.paddingLeft}
            paddingright={autocompleteUI.input.paddingRight}
          /> 
        </div>
      </>
    );
};

export default index;