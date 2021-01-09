import styled from 'styled-components';
import { TextField, TextFieldProps, withStyles } from '@material-ui/core';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface DateRangePickerWrapperProps {
  focused: boolean;
}

interface ValueWrapperProps {
  focused: boolean;
}

const hexToRGBA = (hex: string, alpha?: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  if (alpha) return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  return `rgb(${r}, ${g}, ${b})`;
};

export const HeaderSearchSection = styled.section`
  display: flex;
  background-color: ${ColorManager.default.packageTheme.headerColor};
`;

export const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const DateRangePickerWrapper = styled.div<DateRangePickerWrapperProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 58px;
  padding: 7px 18px 10px;
  max-height: 58px;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${(props: DateRangePickerWrapperProps) =>
    props.focused
      ? ColorManager.default.white
      : hexToRGBA(ColorManager.default.white, 0.1)};
  border: ${(props: DateRangePickerWrapperProps) =>
    props.focused
      ? `1px solid ${ColorManager.default.secondaryColor}`
      : `1px solid ${hexToRGBA(ColorManager.default.secondaryColor, 0.1)}`};
  &:hover {
    border-color: ${(props: DateRangePickerWrapperProps) =>
      props.focused
        ? ColorManager.default.white
        : ColorManager.default.secondaryColor};
  }
`;

export const ValueWrapper = styled.div<ValueWrapperProps>`
  color: ${(props: ValueWrapperProps) =>
    props.focused
      ? ColorManager.default.thirdColor
      : ColorManager.default.white};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.header};
  line-height: 0.7;
`;

export const FromDatePicker = styled.div`
  border-right: 1px solid ${hexToRGBA(ColorManager.default.secondaryColor, 0.4)};
`;

export const ToDatePicker = styled.div`
  margin-left: 18px;
`;

export const Label = styled.label`
  color: ${ColorManager.default.secondaryColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.small};
`;

export const EditSearchButton = styled.button`
  border: none;
  width: 100%;
  min-height: 58px;
  border-radius: 4px;
  cursor: pointer;
  color: ${ColorManager.default.white};
  background-color: ${ColorManager.default.secondaryColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.extraLarge};
  line-height: 0.8;
  &:hover {
    background-color: ${ColorManager.default.fourthColor};
  }
`;
