import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface ButtonDatePickerWrapperProps {
  alignment?: 'left' | 'right';
}

interface DatePickerWrapperProps {
  alignment?: 'left' | 'right';
}

export const ButtonDatePickerTextWrapper = styled.div`
  margin-left: 8px;
`;

export const OutSideWrapper = styled.div`
  position: relative;
  width: 376px;
  border-radius: 5px;
`;

export const DatePickerWrapper = styled.div<DatePickerWrapperProps>`
  & > div {
    position: absolute;
    min-width: 100%;
    background-color: ${ColorManager.default.white};
    margin-top: 59px;
    box-shadow: 0px 2px 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    &::before {
      border-bottom-color: ${ColorManager.default.greyColor}!important;
      border-width: 12px !important;
      content: '';
      position: absolute;
      ${(props: DatePickerWrapperProps) =>
        props.alignment === 'right' ? 'right: 15px;' : 'left: 15px;'}
      top: -20px;
      border: solid transparent;
    }
  }
`;

export const FooterButtonWrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 55px;
  position: absolute;
  bottom: 35px;
  padding: 0 20px;
  width: 100%;
`;

export const FooterButton = styled.button`
  border: none;
  width: 100%;
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.header};
  line-height: 1.09;
  color: ${ColorManager.default.white};
  background-color: ${ColorManager.default.secondaryColor};
  border-radius: 4px;
`;

export const ButtonDatePicker = styled.button<ButtonDatePickerWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  min-width: 143px;
  height: 42px;
  padding: 10px 20px;
  cursor: pointer;
  float: ${(props: ButtonDatePickerWrapperProps) =>
    props.alignment === 'right' ? 'right' : 'left'};
  color: ${ColorManager.default.white};
  background-color: ${ColorManager.default.orangeColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.header};
  line-height: 15px;
`;
