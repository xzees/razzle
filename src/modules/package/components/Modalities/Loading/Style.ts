import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';

interface ItemWrapperProps {
  isMobile: boolean;
}

interface ContentWrapperProps {
  isMobile: boolean;
}

interface PriceWrapperProps {
  isMobile: boolean;
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
    flex-basis: 80%;
    max-width: 80%;
    padding-right: 26px;
  `}
`;

export const OptionWrapper = styled.div`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
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
        flex-basis: 20%;
        max-width: 20%;
        padding-left: 26px;
      border-left: 2px solid ${ColorManager.default.greyColor};
  `}
`;
