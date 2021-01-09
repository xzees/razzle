import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface ButtonOpenDateRangePickerWrapperProps {
  isOpacity?: boolean;
}

interface ValueWrapperProps {
  isOpacity?: boolean;
}

const hexToRGBA = (hex: string, alpha?: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  if (alpha) return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  return `rgb(${r}, ${g}, ${b})`;
};

export const ButtonOpenDateRangePickerWrapper = styled.div<ButtonOpenDateRangePickerWrapperProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 58px;
  padding: 7px 18px 10px;
  max-height: 58px;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${(props: ButtonOpenDateRangePickerWrapperProps) =>
    props.isOpacity
      ? hexToRGBA(ColorManager.default.white, 0.1)
      : ColorManager.default.white};
  border: ${(props: ButtonOpenDateRangePickerWrapperProps) =>
    `1px solid ${
      props.isOpacity
        ? hexToRGBA(ColorManager.default.secondaryColor, 0.1)
        : ColorManager.default.white
    }`};
  &:hover {
    border-color: ${(props: ButtonOpenDateRangePickerWrapperProps) =>
      props.isOpacity
        ? ColorManager.default.secondaryColor
        : ColorManager.default.white};
  }
`;

export const FromDatePickerWrapper = styled.div`
  border-right: 1px solid ${hexToRGBA(ColorManager.default.secondaryColor, 0.4)};
`;

export const ToDatePickerWrapper = styled.div`
  margin-left: 18px;
`;

export const ValueWrapper = styled.div<ValueWrapperProps>`
  color: ${(props: ValueWrapperProps) =>
    props.isOpacity
      ? ColorManager.default.white
      : ColorManager.default.thirdColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.header};
  line-height: 0.7;
`;

export const Label = styled.label`
  color: ${ColorManager.default.secondaryColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.small};
`;
