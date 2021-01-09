import styled from 'styled-components';
import {
  FormControlLabel as MuiFormControlLabel,
  Checkbox as MuiCheckbox,
  withStyles,
} from '@material-ui/core';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface FormControlLabelProps {
  labelColor?: 'primary' | 'fifth' | 'yellow' | 'green';
}

interface CheckboxProps {
  checkedColor?: 'primary' | 'fifth' | 'yellow' | 'green';
}

// export const FormControlLabel = withStyles(() => ({
//   root: {
//     height: 10,
//     marginRight: 0,
//     "& > .MuiTypography-body1": {
//       display: 'flex',
//       color: (props: any) => props.labelColor ? ColorManager.default[`${props.labelColor}Color`] : ColorManager.default.black,
//       fontSize: FontManager.default.small
//     }
//   }
// }))(MuiFormControlLabel);

export const FormControlLabel = styled(
  MuiFormControlLabel
)<FormControlLabelProps>`
  &.MuiFormControlLabel-root {
    height: 13px;
    margin-left: -2px;
    margin-right: 0px;
    & > .MuiTypography-body1 {
      display: flex;
      padding-left: 7px;
      color: ${(props: FormControlLabelProps) =>
        props.labelColor
          ? ColorManager.default[`${props.labelColor}Color`]
          : ColorManager.default.text};
      font-family: '${FontManager.default.primaryFont}';
      font-size: ${FontManager.default.text};
      line-height: 1.3;
    }
  }
`;

export const Checkbox = styled(MuiCheckbox)<CheckboxProps>`
  &.MuiCheckbox {
    &-root {
      color: ${ColorManager.default.fourthColor};
      padding: 0px;
    }
    &-colorSecondary.Mui-checked {
      color: ${(props: any) =>
        props.checkedColor
          ? ColorManager.default[`${props.checkedColor}Color`]
          : ColorManager.default.primaryColor};
    }
  }
`;

// export const Checkbox = withStyles(() => ({
//   colorSecondary: {
//     "&.Mui-checked": {
//       color: (props: any) => props.checkedColor ? ColorManager.default[`${props.checkedColor}Color`] : ColorManager.default.primaryColor
//     }
//   }
// }))(MuiCheckbox);
