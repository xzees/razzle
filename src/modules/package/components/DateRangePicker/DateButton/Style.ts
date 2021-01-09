import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface ButtonProps {
  isStartDate: boolean;
  isEndDate: boolean;
  isDateHovered: boolean;
  isCurrentDate: boolean;
  isHolidayDate: boolean;
  isSelectedStartAndEndDate: boolean;
  color?: string;
  backgroundColor?: string;
  disabled?: boolean;
}

interface CircleOutlineProps {
  isFirstOrLastSelectedDate: boolean;
}

export interface ColorDateButton {
  selectedFirstOrLastColor: string;
  normalColor: string;
  selectedColor: string;
  rangeHoverColor: string;
  disabledColor: string;
}

export const colorButton: ColorDateButton = {
  selectedFirstOrLastColor: ColorManager.default.text,
  normalColor: ColorManager.default.text,
  selectedColor: ColorManager.default.text,
  rangeHoverColor: ColorManager.default.text,
  disabledColor: ColorManager.default.fourthColor,
};

export const backgroundColorButton: ColorDateButton = {
  selectedFirstOrLastColor: ColorManager.default.white,
  normalColor: ColorManager.default.white,
  selectedColor: ColorManager.default.greyColor,
  rangeHoverColor: ColorManager.default.greyColor,
  disabledColor: ColorManager.default.white,
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  border: none;
  min-width: 38px;
  height: 38px;
  cursor: pointer;
  ${(props: ButtonProps) => (props.disabled ? 'pointer-events: none;' : '')}
  ${(props: ButtonProps) => {
    if (
      props.isStartDate &&
      !props.isEndDate &&
      (props.isSelectedStartAndEndDate || props.isDateHovered)
    )
      return `background: linear-gradient(90deg,${ColorManager.default.white} 50%,${ColorManager.default.greyColor} 0);`;
    else if (props.isEndDate && !props.isStartDate)
      return `background: linear-gradient(90deg,${ColorManager.default.greyColor} 50%,${ColorManager.default.white} 0);`;
    return `background-color: ${
      props.backgroundColor || ColorManager.default.white
    };`;
  }}
  & > div {
    color: ${(props: ButtonProps) => {
      if (props.isHolidayDate) return ColorManager.default.redColor;
      else if (props.isCurrentDate) return ColorManager.default.primaryColor;
      else if (props.color) return props.color;
      return ColorManager.default.text;
    }};
    font-family: '${(props: ButtonProps) =>
      props.isCurrentDate
        ? FontManager.default.secondaryFont
        : FontManager.default.primaryFont}';
    font-size: ${FontManager.default.header};
    font-weight: normal;
    line-height: 35px;
  }
`;

export const CircleOutline = styled.div<CircleOutlineProps>`
  min-width: 38px;
  height: 38px;
  border-radius: 50%;
  ${(props: CircleOutlineProps) =>
    props.isFirstOrLastSelectedDate
      ? `
    border: 2px solid ${ColorManager.default.primaryColor};
    background-color: ${ColorManager.default.white};
  `
      : ''}
`;
