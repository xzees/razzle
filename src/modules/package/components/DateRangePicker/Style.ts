import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface ButtonProps {
  type?: string;
}

export const OutSideWrapper = styled.div`
  position: relative;
  width: 756px;
  border-radius: 5px;
`;

export const DateRangePickerWrapper = styled.div`
  & > div {
    position: absolute;
    min-width: 100%;
    background-color: ${ColorManager.default.white};
    margin-top: 12px;
    box-shadow: 0px 2px 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    &::before {
      border-bottom-color: ${ColorManager.default.greyColor}!important;
      border-width: 12px !important;
      content: '';
      position: absolute;
      left: 15px;
      top: -20px;
      border: solid transparent;
    }
  }
`;

export const FooterButtonWrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: row;
  height: 55px;
  flex-wrap: wrap;
  position: absolute;
  bottom: 35px;
  padding 0 20px;
  width: 100%;
`;

export const FooterButton = styled.button<ButtonProps>`
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.header};
  line-height: 1.09;
  border: 2px solid
    ${(props) =>
      props.type === 'reset'
        ? ColorManager.default.redColor
        : ColorManager.default.secondaryColor};
  background-color: ${(props) =>
    props.type === 'reset'
      ? ColorManager.default.white
      : ColorManager.default.secondaryColor};
  color: ${(props) =>
    props.type === 'reset'
      ? ColorManager.default.redColor
      : ColorManager.default.white};
  flex-grow: ${(props) => (props.type === 'reset' ? 45 : 55)};
  border-radius: 4px;
  &:not(:first-child) {
    margin-left: 7px;
  }
`;
