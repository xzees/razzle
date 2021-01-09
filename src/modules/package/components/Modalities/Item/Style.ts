import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface ItemWrapperProps {
  isMobile: boolean;
}

interface ContentWrapperProps {
  isMobile: boolean;
  isLarge?: boolean;
}

interface DescriptionWrapperProps {
  isShowMore?: boolean;
}

interface PriceWrapperProps {
  isMobile: boolean;
  isLarge?: boolean;
}

interface ButtonWrapperProps {
  mt?: string | number;
}

interface SelectButtonProps {
  isBorderRadius?: boolean;
}

export const ItemWrapper = styled.div<ItemWrapperProps>`
  border-radius: 4px;
  overflow: hidden;
  background-color: ${ColorManager.default.white};
  box-shadow: 0px 2px 2px 0 rgba(0, 0, 0, 0.1);
  ${(props: ItemWrapperProps) =>
    props.isMobile
      ? ''
      : `
    padding: 20px 24px 18px;
  `}
  &:not(:first-child) {
    margin-top: 17px;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 18px;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div<ContentWrapperProps>`
  ${(props: ContentWrapperProps) =>
    props.isMobile
      ? `
    padding: 20px 24px;
  `
      : `
    flex-basis: ${props.isLarge ? '70%' : '80%'};
    max-width: ${props.isLarge ? '70%' : '80%'};
    padding-right: ${props.isLarge ? '20px' : '26px'};
  `}
`;

export const DescriptionWrapper = styled.div<DescriptionWrapperProps>`
  position: relative;
  ${(props: DescriptionWrapperProps) =>
    !props.isShowMore
      ? `
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    overflow: hidden;
  `
      : ''}
  text-align: justify;
  & > span {
    color: ${ColorManager.default.fourthColor};
    font-family: '${FontManager.default.primaryFont}';
    font-size: ${FontManager.default.text};
    line-height: 16px;
  }
  margin-bottom: 14px;
`;

export const PriceWrapper = styled.div<PriceWrapperProps>`
  text-align: right;
  ${(props: PriceWrapperProps) =>
    props.isMobile
      ? `
        padding: 18px 24px;
        border-top: 1px solid ${ColorManager.default.greyColor};
      `
      : `
        flex-basis: ${props.isLarge ? '30%' : '20%'};
        max-width: ${props.isLarge ? '30%' : '20%'};
        padding-left: ${props.isLarge ? '20px' : '26px'};
      ${
        props.isLarge
          ? ''
          : `border-left: 2px solid ${ColorManager.default.greyColor}`
      };
  `}
`;

export const ReadMoreWrapper = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  cursor: pointer;
  background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff 25%);
  & > a {
    color: ${ColorManager.default.greenColor};
    font-family: '${FontManager.default.secondaryFont}';
    font-size: ${FontManager.default.text};
    font-weight: normal;
    line-height: 18px;
  }
`;

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  width: 100%;
  ${(props: ButtonWrapperProps) => (props.mt ? `margin-top: ${props.mt};` : '')}
`;

export const NameText = styled.h3`
  margin: 0px;
  color: ${ColorManager.default.thirdColor};
  font-family: '${FontManager.default.secondaryFont}';
  font-size: ${FontManager.default.large};
  font-weight: normal;
  line-height: 24px;
`;

export const ReadLessText = styled.a`
  cursor: pointer;
  color: ${ColorManager.default.greenColor};
  font-family: '${FontManager.default.secondaryFont}';
  font-size: ${FontManager.default.text};
  font-weight: normal;
  line-height: 18px;
`;

export const SelectButton = styled.button<SelectButtonProps>`
  margin: 0px;
  border: none;
  width: 100%;
  height: 42px;
  ${(props: SelectButtonProps) =>
    props.isBorderRadius ? 'border-radius: 4px;' : ''};
  box-shadow: 0px 3px 3px 0 rgba(0, 0, 0, 0.03);
  cursor: pointer;
  color: ${ColorManager.default.white};
  background-color: ${ColorManager.default.orangeColor};
  font-family: ${FontManager.default.primaryFont};
  font-size: ${FontManager.default.text};
  line-height: 24px;
`;
