import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';
import {
  FormControl as MuiFormControl,
  Slider as MuiSlider,
  TextField as MuiTextField,
  withStyles,
} from '@material-ui/core';
import FontManager from 'modules/package/Manager/FontManager';

export const FormControl = withStyles({
  root: {
    width: '100%',
    padding: '0px',
    marginTop: '25px',
  },
})(MuiFormControl);

export const Slider = withStyles({
  root: {
    padding: '0px',
    color: ColorManager.default.thirdColor,
  },
  thumb: {
    height: '18px',
    width: '18px',
    backgroundColor: '#fff',
    border: `2px solid ${ColorManager.default.thirdColor}`,
    marginTop: -9,
    marginLeft: -9,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  valueLabel: {
    left: 'calc(-50% - 2px)',
  },
  track: {},
})(MuiSlider);

export const TextField = withStyles({
  root: {
    fontSize: FontManager.default.text,
    '& .MuiOutlinedInput-root': {
      '& .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${ColorManager.default.fourthColor}`,
        borderRadius: '4.4px',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${ColorManager.default.thirdColor}`,
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${ColorManager.default.thirdColor}`,
      },
      '&-input': {
        color: ColorManager.default.text,
        fontSize: FontManager.default.text,
        fontFamily: `'${FontManager.default.primaryFont}'`,
        lineHeight: 1.3,
        padding: '10px 10px 10px 0px',
        textAlign: 'right',
      },
      '&-adornedStart': {
        paddingLeft: '10px',
      },
    },
    '& .MuiTypography-colorTextSecondary': {
      color: ColorManager.default.fourthColor,
      fontSize: FontManager.default.text,
      fontFamily: `'${FontManager.default.primaryFont}'`,
      lineHeight: 1.3,
    },
  },
})(MuiTextField);

export const SliderContainer = styled.div`
  margin: 0rem 1rem;
`;
