import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface InputSearchProps {
  isOpacity?: boolean;
}

const hexToRGBA = (hex: string, alpha?: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  if (alpha) return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  return `rgb(${r}, ${g}, ${b})`;
};

export const InputSearch = styled(TextField)<InputSearchProps>`
  padding: 7px 15px 13px !important;
  background-color: ${(props: InputSearchProps) =>
    props.isOpacity
      ? hexToRGBA(ColorManager.default.white, 0.1)
      : ColorManager.default.white};
  border-radius: 4px;
  border: ${(props: InputSearchProps) =>
    `1px solid ${
      props.isOpacity
        ? hexToRGBA(ColorManager.default.secondaryColor, 0.1)
        : ColorManager.default.white
    }`}!important;
  height: 58px;
  max-height: 58px;
  & .MuiFormLabel-root {
    position: relative;
    color: ${ColorManager.default.secondaryColor}!important;
    font-family: '${FontManager.default.primaryFont}';
    font-size: ${FontManager.default.small};
    padding-left: 0px;
    padding-right: 0px;
  }
  & label + .MuiInput-formControl {
    margin-top: 0px;
  }
  & .MuiInputBase-input {
    padding: 0px;
    color: ${(props: InputSearchProps) =>
      props.isOpacity
        ? ColorManager.default.white
        : ColorManager.default.thirdColor};
    font-family: '${FontManager.default.primaryFont}';
    font-size: ${FontManager.default.header};
    &::placeholder {
      color: ${ColorManager.default.fourthColor};
    }
  }
  & .MuiInputLabel-shrink {
    transform: inherit;
  }
  & .MuiInput-underline {
    &:before,
    &:after,
    &:hover:not(.Mui-disabled):before {
      border-bottom: 0px;
    }
  }
  &:hover {
    border-color: ${(props: InputSearchProps) =>
      props.isOpacity
        ? ColorManager.default.secondaryColor
        : ColorManager.default.white}!important;
  }
`;
