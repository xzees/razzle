import styled from 'styled-components';
import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  withStyles,
} from '@material-ui/core';
import { Rating as MuiRating } from '@material-ui/lab';
import { ExpandMore, KeyboardArrowRight } from '@material-ui/icons';
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
  fontSize: FontManager.default.mediumLarge,
  fontWeight: 'normal',
  lineHeight: 0.75,
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

export const Rating = withStyles({
  root: {
    position: 'static',
    marginLeft: -2,
    width: '100%',
  },
  icon: {
    fontSize: FontManager.default.small,
  },
})(MuiRating);

export const ExpandMoreIcon = withStyles({
  root: {
    color: ColorManager.default.fourthColor,
  },
})(ExpandMore);

export const Accordion = withStyles({
  root: {
    boxShadow: 'none',
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  rounded: {
    '&:last-child': {
      border: 'none',
    },
  },
  expanded: {},
})(MuiAccordion);

export const AccordionSummary = withStyles({
  root: {
    padding: '0px',
    minHeight: '60px',
    '&$expanded': {
      minHeight: '60px',
    },
    '& .MuiIconButton-root': {
      padding: '9px',
    },
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

export const AccordionDetails = withStyles({
  root: {
    padding: '0px 0px 20px',
  },
})(MuiAccordionDetails);

export const KeyboardArrowRightIcon = withStyles({
  root: {
    marginLeft: '2px',
  },
})(KeyboardArrowRight);

export const ContentSection = styled.section`
  background-color: ${ColorManager.default.white};
`;

export const ModalitiesSection = styled.section`
  background-color: ${ColorManager.default.greyColor};
  padding-top: 28px;
  padding-bottom: 33px;
`;

export const ReviewsSection = styled.section`
  background-color: ${ColorManager.default.white};
  padding-top: 28px;
  padding-bottom: 33px;
`;

export const NearbyDestinationsSection = styled.section`
  background-color: ${ColorManager.default.greyColor};
  padding-top: 34px;
  padding-bottom: 39px;
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

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  padding: 11px 20px;
  background-color: ${ColorManager.default.fifthColor};
`;

export const ButtonHeaderWrapper = styled.div`
  & button:not(:first-child) {
    margin-left: 10px;
  }
`;

export const PhotoGridListWrapper = styled.div`
  margin-bottom: 25px;
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

export const TextExpanded = styled.span`
  color: ${ColorManager.default.fourthColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.text};
  line-height: 0.9;
`;

export const EditSearchButton = styled.button`
  padding: 8px 24px 15px;
  border: 1px solid ${ColorManager.default.white};
  min-width: 130px;
  height: 40px;
  border-radius: 4px;
  color: ${ColorManager.default.white};
  background-color: ${ColorManager.default.fifthColor};
  font-family: '${FontManager.default.secondaryFont}';
  font-size: ${FontManager.default.text};
  font-weight: normal;
  line-height: 1.2;
`;

export const ButtonHeader = styled.button`
  width: 41px;
  height: 40px;
  border: 1px solid ${ColorManager.default.white};
  border-radius: 4px;
  color: ${ColorManager.default.white};
  background-color: ${ColorManager.default.fifthColor};
  cursor: pointer;
  & > svg {
    vertical-align: middle;
  }
  &:hover {
    color: ${ColorManager.default.fifthColor};
    background-color: ${ColorManager.default.white};
  }
`;

export const Address = styled.span`
  color: ${ColorManager.default.fourthColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.text};
  line-height: 0.9;
`;

export const TotalCountText = styled.p`
  margin: 0px;
  color: ${ColorManager.default.white};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.small};
  line-height: 20px;
`;

export const TotalAmountText = styled.p`
  margin: 0px;
  color: ${ColorManager.default.white};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.small};
  line-height: 25px;
  & > span {
    font-size: ${FontManager.default.text};
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${ColorManager.default.greyColor};
  margin: 0px;
`;

export const ContinueButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  height: 45px;
  border-radius: 4px;
  padding: 6px 16px;
  cursor: pointer;
  color: ${ColorManager.default.white};
  background-color: ${ColorManager.default.secondaryColor};
  font-family: '${FontManager.default.secondaryFont}';
  font-size: ${FontManager.default.text};
  font-weight: normal;
`;
