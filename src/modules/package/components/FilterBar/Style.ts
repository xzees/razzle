import styled from 'styled-components';
import { IconButton as MuiIconButton } from '@material-ui/core';
import ColorManager from 'common/Manager/ColorManager';
import CommonContainer from 'common/src/components/UI/Container';
import FontManager from 'modules/package/Manager/FontManager';

interface FilterBarScrollContainerProps {
  windowInnerHeight: number;
}

interface FilterBodyWrapperProps {
  pt?: string | number;
  pb?: string | number;
}

interface HeaderWrapperProps {
  mt?: string | number;
}

interface FilterMobileWrapperProps {
  mt?: string | number;
}
interface FilterWrapperProps {
  mt?: string | number;
  pb?: string | number;
  disabledBorderBottom?: boolean;
}

interface ButtonProps {
  type?: string;
}

export const titleMobile = {
  as: 'h3',
  color: ColorManager.default.fifthColor,
  fontFamily: `'${FontManager.default.secondaryFont}'`,
  fontSize: FontManager.default.text,
  fontWeight: 'normal',
  lineHeight: 0.9,
  mb: '3px',
};

export const titleDesktop = {
  as: 'h3',
  color: ColorManager.default.thirdColor,
  fontFamily: `'${FontManager.default.primaryFont}'`,
  fontSize: FontManager.default.header,
  fontWeight: 'normal',
  lineHeight: 1.09,
  textAlign: 'left',
  pb: '6px',
};

export const Section = styled.section`
  background-color: ${ColorManager.default.greyColor};
  padding-top: 15px;
  padding-bottom: 16px;
`;

export const ContainerSticky = styled.div`
  position: sticky;
  top: 145px;
  @media (max-width: 1279px) {
    position: sticky;
    top: 10px;
  }
`;

export const Container = styled(CommonContainer)``;

export const FilterBarMobileWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FilterBarWrapper = styled.div`
  width: 100%;
  padding: 25px 25px 30px 24px;
  border-radius: 4px;
  background-color: ${ColorManager.default.white};
  box-shadow: 0px 3px 3px 0 rgba(0, 0, 0, 0.03);
`;

export const HeaderWrapper = styled.div<HeaderWrapperProps>`
  &:not(:first-child) {
    margin-top: ${(props: HeaderWrapperProps) => props.mt || '25px'};
  }
`;

export const FilterMobileWrapper = styled.div<FilterMobileWrapperProps>`
  margin-top: ${(props: FilterMobileWrapperProps) => props.mt || '19px'};
`;

export const FilterWrapper = styled.div<FilterWrapperProps>`
  margin-top: ${(props: FilterWrapperProps) => props.mt || '19px'};
  &:not(:last-child) {
    ${(props: FilterWrapperProps) =>
      props.disabledBorderBottom
        ? ''
        : `border-bottom: 1px solid ${ColorManager.default.greyColor}`};
    padding-bottom: ${(props: FilterWrapperProps) => props.pb || '30px'};
  }
`;

export const FilterBodyWrapper = styled.div<FilterBodyWrapperProps>`
  padding-top: ${(props: FilterBodyWrapperProps) => props.pt || '25px'};
  padding-bottom: ${(props: FilterBodyWrapperProps) => props.pb || '28px'};
  padding-left: 20px;
  padding-right: 22px;
  &:not(:last-child) {
    border-bottom: 1px solid ${ColorManager.default.greyColor};
  }
`;

export const FilterBarScrollContainer = styled.div<FilterBarScrollContainerProps>`
  position: relative;
  overflow-y: auto;
  height: calc(${(props) => props.windowInnerHeight.toString()}px - 150px);
  scroll-behavior: smooth;
`;

export const ButtonFilter = styled.button`
  background-color: ${ColorManager.default.white};
  border: none;
  border-radius: 2px;
  color: ${ColorManager.default.text};
  font-family: '${FontManager.default.secondaryFont}';
  font-size: ${FontManager.default.small};
  font-weight: normal;
  height: 32px;
  max-width: 130px;
  cursor: pointer;
  padding: 6px 22px 11px;
  text-align: center;
  line-height: 1.33;
  box-shadow: 0px 2px 2px 0 rgba(34, 24, 73, 0.1);
`;

export const MapImage = styled.img`
  width: 43px;
  height: 32px;
  border-radius: 4px;
  box-shadow: 0px 2px 2px 0 rgba(0, 0, 0, 0.1);
`;

export const TextTotalSearch = styled.div`
  color: ${ColorManager.default.text};
  font-family: '${FontManager.default.secondaryFont}';
  font-size: ${FontManager.default.small};
  font-weight: normal;
  text-align: right;
  line-height: 1.33;
`;

export const ContentContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
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
  display: flex;
  justify-content: center;
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.header};
  line-height: 1.09;
  align-items: center;
  justify-content: center;
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

export const IconButton = styled(MuiIconButton)`
  padding: 14px 0px 15px 5px;
`;

export const BoxContent = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;
