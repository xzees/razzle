import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface RibbonWrapperProps {
  top?: string | number;
  backgroundColor?: 'red' | 'brown';
}

interface TextProps {
  fontWeight?: 'normal' | 'medium';
  fontSize?: string | number;
  lineHeight?: string | number;
  letterSpacing?: string | number;
  mt?: string | number;
}

export const RibbonWrapper = styled.div<RibbonWrapperProps>`
  position: absolute;
  top: ${(props: RibbonWrapperProps) => props.top || '19px'};
  left: 0px;
  width: 52px;
  min-height: 53px;
  z-index: 999;
  padding: 7px 12px 9px 7px;
  text-align: right;
  text-transform: uppercase;
  color: ${ColorManager.default.white};
  background-color: ${(props: RibbonWrapperProps) =>
    props.backgroundColor === 'brown'
      ? ColorManager.default.brown
      : ColorManager.default.redColor};
  border-radius: 0px 4px 4px 0px;
  box-shadow: 2.5px 4.3px 5px 0 rgba(0, 0, 0, 0.1);
`;

export const Text = styled.p<TextProps>`
  margin: 0px;
  margin-top: ${(props: TextProps) => props.mt || '0px'};
  padding: 0px;
  font-weight: normal;
  font-family: '${(props: TextProps) =>
    props.fontWeight === 'medium'
      ? FontManager.default.secondaryFont
      : FontManager.default.primaryFont}';
  font-size: ${(props: TextProps) => props.fontSize || 'inherit'};
  line-height: ${(props: TextProps) => props.lineHeight || 'inherit'};
  letter-spacing: ${(props: TextProps) => props.letterSpacing || 'normal'};
`;
