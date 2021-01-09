import styled from 'styled-components';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface TotalWrapperProps {
  isMobile: boolean;
}

interface TotalDiscountTextProps {
  isMobile: boolean;
}

interface ButtonProps {
  isMobile: boolean;
}

export const ItemWrapper = styled.div`
  padding: 20px 24px 18px;
  border-radius: 4px;
  background-color: ${ColorManager.default.white};
  box-shadow: 0px 2px 2px 0 rgba(0, 0, 0, 0.1);
  &:not(:first-child) {
    margin-top: 17px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const DescriptionWrapper = styled.div`
  position: relative;
  text-align: justify;
  color: ${ColorManager.default.fourthColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.text};
  line-height: 16px;
  margin-bottom: 14px;
`;

export const PaxesWrapper = styled.div`
  margin-bottom: 8px;
`;

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

export const TotalWrapper = styled.div<TotalWrapperProps>`
  display: flex;
  flex-direction: column;
  ${(props: TotalWrapperProps) =>
    props.isMobile
      ? `
    align-items: flex-end;
    margin-bottom: 6px;
  `
      : `
    justify-content: flex-end;
    flex-grow: 1;
  `}
`;

export const AmountWrapper = styled.div``;

export const NameText = styled.h3`
  margin: 0px;
  color: ${ColorManager.default.thirdColor};
  font-family: '${FontManager.default.secondaryFont}';
  font-size: ${FontManager.default.large};
  font-weight: normal;
  line-height: 24px;
`;

export const TotalAmountLabel = styled.label`
  color: ${ColorManager.default.fourthColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.text};
  line-height: 12px;
`;

export const TotalAmountText = styled.h5`
  display: inline-block;
  margin: 0px;
  color: ${ColorManager.default.primaryColor};
  font-family: '${FontManager.default.secondaryFont}';
  font-size: ${FontManager.default.large};
  font-weight: normal;
  line-height: 24px;
`;

export const TotalDiscountText = styled.h5<TotalDiscountTextProps>`
  display: inline-block;
  margin: 0px;
  color: ${ColorManager.default.fourthColor};
  font-family: '${FontManager.default.secondaryFont}';
  font-size: ${FontManager.default.large};
  font-weight: normal;
  line-height: 24px;
  text-decoration: line-through;
  ${(props: TotalDiscountTextProps) =>
    props.isMobile ? 'margin-right: 4px;' : 'margin-left: 4px;'}
`;

export const BookingButton = styled.button<ButtonProps>`
  margin: 0px;
  border: 1px solid ${ColorManager.default.orangeColor};
  ${(props: ButtonProps) => (props.isMobile ? '' : 'width: 20%;')}
  height: 42px;
  border-radius: 4px;
  box-shadow: 0px 3px 3px 0 rgba(0, 0, 0, 0.03);
  cursor: pointer;
  color: ${ColorManager.default.orangeColor};
  background-color: ${ColorManager.default.white};
  font-family: ${FontManager.default.primaryFont};
  font-size: ${FontManager.default.text};
  line-height: 24px;
  margin-right: 6px;
  ${(props: ButtonProps) => (props.isMobile ? 'flex-grow: 1;' : '')}
  &:hover {
    color: ${ColorManager.default.white};
    background-color: ${ColorManager.default.orangeColor};
  }
`;

export const BookingNowButton = styled.button<ButtonProps>`
  margin: 0px;
  border: none;
  ${(props: ButtonProps) => (props.isMobile ? '' : 'width: 20%;')}
  height: 42px;
  border-radius: 4px;
  box-shadow: 0px 3px 3px 0 rgba(0, 0, 0, 0.03);
  cursor: pointer;
  color: ${ColorManager.default.white};
  background-color: ${ColorManager.default.orangeColor};
  font-family: ${FontManager.default.primaryFont};
  font-size: ${FontManager.default.text};
  line-height: 24px;
  ${(props: ButtonProps) => (props.isMobile ? 'flex-grow: 1;' : '')}
`;

export const ButtonChangePackageLink = styled.a`
  cursor: pointer;
  color: ${ColorManager.default.primaryColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.text};
  &:hover {
    text-decoration: underline;
  }
`;
