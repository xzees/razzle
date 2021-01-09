import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface ScreenProps {
  isMobile: boolean;
  isLarge?: boolean;
}

export const SaleWrapper = styled.div`
  position: relative;
  display: inline-block;
  min-width: 141px;
  min-height: 25px;
  padding: 2px 6px;
  border-radius: 4px;
  background-color: #f6dde1;
  margin-bottom: 12px;
  &::after {
    content: '';
    position: absolute;
    right: 8px;
    bottom: -15px;
    width: 16px;
    height: 16px;
    border-style: solid;
    border-width: 8px 8px 0 8px;
    border-color: #f6dde1 transparent transparent transparent;
  }
`;

export const PriceWrapper = styled.div<ScreenProps>`
  padding-top: ${(props: ScreenProps) => (props.isMobile ? '10px' : '17px')};
`;

export const DiscountWrapper = styled.div<ScreenProps>`
  ${(props: ScreenProps) =>
    props.isMobile
      ? `
    display: inline-block;
    margin-right: 8px;
  `
      : ''}
`;

export const Text = styled.p<ScreenProps>`
  margin: 0px;
  color: ${ColorManager.default.text};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${(props: ScreenProps) =>
    props.isMobile
      ? FontManager.default.meduimSmall
      : FontManager.default.small};
  line-height: ${(props: ScreenProps) => (props.isMobile ? '0.75' : '0.89')};
`;

export const Discount = styled.span<ScreenProps>`
  display: inline-block;
  margin-bottom: 8px;
  color: ${ColorManager.default.fourthColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${(props: ScreenProps) =>
    props.isMobile
      ? FontManager.default.extraLarge
      : FontManager.default.ultraLarge};
  line-height: ${(props: ScreenProps) => (props.isMobile ? '0.6' : '0.45')};
  letter-spacing: 0.32px;
  position: relative;
  ::after {
    border-bottom: 1px solid ${ColorManager.default.fourthColor};
    content: '';
    display: block;
    height: 50%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export const Sale = styled.span`
  color: #d1436b;
  text-align: left;
  font-family: '${FontManager.default.secondaryFont}';
  font-size: ${FontManager.default.small};
  line-height: 1.44;
  font-weight: normal;
`;

export const Amount = styled.h5<ScreenProps>`
  display: inline-block;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${ColorManager.default.primaryColor};
  font-family: '${FontManager.default.secondaryFont}';
  font-size: ${(props: ScreenProps) =>
    props.isMobile
      ? FontManager.default.extraLarge
      : FontManager.default.ultraLarge};
  line-height: ${(props: ScreenProps) => (props.isMobile ? '0.6' : '0.45')};
  font-weight: normal;
`;
