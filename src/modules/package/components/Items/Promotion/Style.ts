import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface ScreenProps {
  isMobile: boolean;
}

export const titleMobileStyle = {
  color: ColorManager.default.text,
  fontFamily: `'${FontManager.default.secondaryFont}'`,
  fontSize: FontManager.default.small,
  fontWeight: 'normal',
  lineHeight: 0.97,
  mb: '0px',
};

export const titleDesktopStyle = {
  color: ColorManager.default.text,
  fontFamily: `'${FontManager.default.secondaryFont}'`,
  fontSize: FontManager.default.medium,
  fontWeight: 'normal',
  lineHeight: 1,
  mb: '0px',
};

export const PromotionWrapper = styled.div<ScreenProps>`
  margin-bottom: ${(props: ScreenProps) => (props.isMobile ? '17px' : '15px')};
`;

export const PromotionContentWrapper = styled.div<ScreenProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${(props: ScreenProps) =>
    props.isMobile ? '10px 10px 11px' : '17px 23px 16px 18px'};
  min-height: ${(props: ScreenProps) => (props.isMobile ? '58px' : '85px')};
  border-radius: 4px;
  box-shadow: ${(props: ScreenProps) =>
    props.isMobile
      ? '0px 2px 2px 0 rgba(0, 0, 0, 0.1)'
      : '0px 3px 3px 0 rgba(0, 0, 0, 0.03)'};
  background-image: linear-gradient(90deg, #fef2d8, #ffffff);
`;

export const ContentWrapper = styled.div<ScreenProps>`
  display: inline-flex;
  align-items: center;
`;

export const Circle = styled.div<ScreenProps>`
  display: inline-block;
  position: relative;
  width: ${(props: ScreenProps) => (props.isMobile ? '37px' : '52px')};
  height: ${(props: ScreenProps) => (props.isMobile ? '37px' : '52px')};
  border-radius: 50%;
  background-image: linear-gradient(45deg, #f9ab4d, #ffe7a7);
  overflow: hidden;
  & > img {
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;

export const DetailWrapper = styled.div<ScreenProps>`
  margin-left: ${(props: ScreenProps) => (props.isMobile ? '14px' : '17px')};
  text-align: left;
`;

export const Coupon = styled.div<ScreenProps>`
  color: ${ColorManager.default.text};
  font-family: '${FontManager.default.secondaryFont}';
  font-size: ${(props: ScreenProps) =>
    props.isMobile
      ? FontManager.default.meduimSmall
      : FontManager.default.text};
  line-height: ${(props: ScreenProps) => (props.isMobile ? '1.09' : '1.2')};
`;

export const GetDiscountButton = styled.button`
  border: none;
  padding-top: 10px;
  padding-bottom: 13px;
  height: 42px;
  width: 172px;
  max-width: 172px;
  border-radius: 4px;
  box-shadow: 0px 3px 3px 0 rgba(0, 0, 0, 0.03);
  background-color: #f38141;
  color: ${ColorManager.default.white};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.text};
  line-height: 1.2;
  cursor: pointer;
  &:hover {
    background-color: #f0620f;
  }
`;
