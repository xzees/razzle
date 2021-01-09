import styled from 'styled-components';
import {
  withStyles,
} from '@material-ui/core/styles';
import ColorManager from 'common/Manager/ColorManager';
import { TextField } from "@material-ui/core";
import FontManager from 'common/Manager/FontManager';

export const InputFields = styled(TextField)`
    background:white;
    font-size: 21px !important;
    width:100%;
    border-radius: 5px !important;
    :focus {
      border-color: inherit !important;
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
      outline:none !important;
    }
    fieldset {
      border: none;
    }
    input {
      padding: 11px 25px 11px 25px;
      border: none;
    }
`;
export const InputAC = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      background: ColorManager.default.greyColor,
      border: 'none',
      '&:hover fieldset': {
        border: 'none'
      },
      '&.Mui-focused fieldset': {
        border: 'none'
      },
    },
  },
})(InputFields);

export const DivOutsideBtn = {
  position: 'relative',
  maxHeight: '100%',
  minHeight: '100px',
} as React.CSSProperties

export const ContainerBtn = {
  paddingLeft: 25,
  paddingRight: 25,
  paddingBottom: 14,
  paddingTop: 14, 
  width: '100%',
  borderBottom: '1px solid ' + ColorManager.default.greyColor,
  backgroundColor: ColorManager.default.secondaryColor,
  marginTop: 20,
  color: ColorManager.default.white,
  position: 'absolute',
  bottom: 0, 
}
export const BoxBtn = {
  fontSize: FontManager.default.text,
  textAlign: 'center',
  width: '100%'
} as React.CSSProperties

////////////////////////////////////////
