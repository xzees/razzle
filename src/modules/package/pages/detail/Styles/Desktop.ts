import styled from 'styled-components';
import { Breadcrumbs as MuiBreadcrumbs, withStyles } from '@material-ui/core';
import { Rating as MuiRating } from '@material-ui/lab';
import { KeyboardArrowRight } from '@material-ui/icons';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface ContentWrapperProps {
  mt?: string | number;
  mb?: string | number;
}

interface TitleWrapperProps {
  mb?: string | number;
}

export const titleHeaderStyle = {
  as: 'h1',
  color: ColorManager.default.thirdColor,
  fontFamily: `'${FontManager.default.secondaryFont}'`,
  fontSize: FontManager.default.ultraLarge,
  fontWeight: 'normal',
  lineHeight: 0.6,
  mb: '0px',
};

export const titleStyle = {
  as: 'h3',
  color: ColorManager.default.text,
  fontFamily: `'${FontManager.default.secondaryFont}'`,
  fontSize: FontManager.default.large,
  fontWeight: 'normal',
  lineHeight: 0.86,
  mb: '0px',
};

export const Breadcrumbs = withStyles({
  root: {},
  ol: {
    display: 'flex',
    justifyContent: 'center',
    color: ColorManager.default.text,
    fontFamily: `'${FontManager.default.primaryFont}'`,
    fontSize: FontManager.default.text,
  },
  li: {
    cursor: 'pointer',
    '& a:hover, & .active': {
      textDecoration: 'underline',
    },
  },
})(MuiBreadcrumbs);

export const Rating = withStyles({
  root: {
    position: 'static',
    marginLeft: -2,
  },
  icon: {
    fontSize: FontManager.default.small,
  },
})(MuiRating);

export const KeyboardArrowRightIcon = withStyles({
  root: {
    marginLeft: '2px',
  },
})(KeyboardArrowRight);

export const JumpNavigationSection = styled.section`
  position: sticky;
  top: 138px;
  z-index: 9997;
  background-color: ${ColorManager.default.white};
  box-shadow: 0 3px 5px -6px black;
  visibility: hidden;
  opacity: 0;
  height: 0px;
`;

export const ContentSection = styled.section`
  background-color: ${ColorManager.default.white};
  padding-top: 39px;
  padding-bottom: 53px;
`;

export const ModalitiesSection = styled.section`
  background-color: ${ColorManager.default.greyColor};
  padding-top: 39px;
  padding-bottom: 53px;
`;

export const ReviewsSection = styled.section`
  background-color: ${ColorManager.default.white};
  padding-top: 49px;
  padding-bottom: 53px;
`;

export const NearbyDestinationsSection = styled.section`
  background-color: ${ColorManager.default.greyColor};
  padding-top: 41px;
  padding-bottom: 48px;
`;

export const CartSection = styled.section`
  position: fixed;
  bottom: 0px;
  z-index: 999;
  width: 100%;
  background-color: ${ColorManager.default.fifthColor};
  padding: 10px;
  transition: all 0.2s ease-in 0s;
`;

export const CartWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const CartDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 12px;
`;

export const JumpNavigationWrapper = styled.div`
  padding: 8px 24px;
`;

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 8px;
  align-items: center;
  margin-bottom: 26px;
`;

export const HeaderDetailWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const ButtonHeaderWrapper = styled.div`
  grid-column: 2;
  grid-row: 1 / span 2;
  display: flex;
  justify-content: flex-end;
  & button:not(:first-child) {
    margin-left: 16px;
  }
`;

export const PhotoGridListWrapper = styled.div`
  margin-bottom: 35px;
`;

export const ContentWrapper = styled.div<ContentWrapperProps>`
  ${(props: ContentWrapperProps) =>
    props.mt ? `margin-top: ${props.mt};` : ''}
  ${(props: ContentWrapperProps) =>
    props.mb ? `margin-bottom: ${props.mb};` : ''}
`;

export const TitleWrapper = styled.div<TitleWrapperProps>`
  ${(props: TitleWrapperProps) =>
    props.mb ? `margin-bottom: ${props.mb};` : ''}
`;

export const DescriptionWrapper = styled.div`
  color: ${ColorManager.default.text};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.text};
  line-height: 1;
`;

export const ButtonHeader = styled.button`
  width: 41px;
  height: 40px;
  border: 1px solid ${ColorManager.default.fourthColor};
  border-radius: 4px;
  color: ${ColorManager.default.fourthColor};
  background-color: ${ColorManager.default.white};
  cursor: pointer;
  & > svg {
    vertical-align: middle;
  }
  &:hover {
    color: ${ColorManager.default.white};
    background-color: ${ColorManager.default.fourthColor};
  }
`;

export const Address = styled.span`
  color: ${ColorManager.default.fourthColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.text};
  line-height: 1.2;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${ColorManager.default.greyColor};
  margin: 0px;
`;

export const VerticalDivider = styled.span`
  width: 1px;
  height: 10px;
  margin-left: 13px;
  margin-right: 15px;
  background-color: ${ColorManager.default.fourthColor};
`;

export const ModalityCartNameText = styled.h5`
  flex-grow: 1;
  margin: 0px;
  color: ${ColorManager.default.white};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.large};
`;

export const TotalCountText = styled.p`
  margin: 0px;
  color: ${ColorManager.default.white};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.header};
  line-height: 20px;
`;

export const TotalAmountText = styled.p`
  margin: 0px;
  color: ${ColorManager.default.white};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.medium};
  line-height: 25px;
  & > span {
    font-size: ${FontManager.default.large};
  }
`;

export const ContinueButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  height: 55px;
  border-radius: 4px;
  padding: 6px 16px;
  cursor: pointer;
  color: ${ColorManager.default.white};
  background-color: ${ColorManager.default.secondaryColor};
  font-family: '${FontManager.default.secondaryFont}';
  font-size: ${FontManager.default.medium};
  font-weight: normal;
`;
