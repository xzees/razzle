import styled from 'styled-components';
import { withStyles } from '@material-ui/core';
import { Rating as MuiRating } from '@material-ui/lab';
import { RoomRounded } from '@material-ui/icons';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface ScreenProps {
  isMobile: boolean;
  isLarge?: boolean;
}

export const titleMobile = {
  as: 'h3',
  color: ColorManager.default.thirdColor,
  fontFamily: `'${FontManager.default.secondaryFont}'`,
  fontSize: FontManager.default.header,
  fontWeight: 'normal',
  lineHeight: 1.09,
  mb: '3px',
};

export const titleDesktop = {
  as: 'h3',
  color: ColorManager.default.thirdColor,
  fontFamily: `'${FontManager.default.secondaryFont}'`,
  fontSize: FontManager.default.large,
  fontWeight: 'normal',
  lineHeight: 0.86,
  mb: '2px',
};

export const RatingMobile = withStyles({
  root: {
    position: 'static',
    marginLeft: -2,
  },
  icon: {
    fontSize: FontManager.default.extraSmall,
  },
})(MuiRating);

export const Rating = withStyles({
  root: {
    position: 'static',
    marginLeft: -2,
  },
  icon: {
    fontSize: FontManager.default.small,
  },
})(MuiRating);

export const RoomRoundedIcon = withStyles({
  root: {
    fontSize: FontManager.default.text,
    marginLeft: '-2px',
    marginRight: '5px',
    color: ColorManager.default.secondaryColor,
    verticalAlign: 'middle',
    '&.MuiSvgIcon-root': {
      width: '13px',
      height: '16px',
    },
  },
})(RoomRounded);

export const SearchItemWrapper = styled.div<ScreenProps>`
  background-color: ${ColorManager.default.white};
  border-radius: 4px;
  box-shadow: ${(props: ScreenProps) =>
    props.isMobile
      ? 'box-shadow: 0px 2px 2px 0 rgba(0, 0, 0, 0.1)'
      : '0px 3px 3px 0 rgba(0, 0, 0, 0.03)'};
  :not(:last-child) {
    margin-bottom: ${(props: ScreenProps) =>
      props.isMobile ? '16px' : '14px'};
  }
`;

export const ContentWrapper = styled.div<ScreenProps>`
  ${(props: ScreenProps) =>
    !props.isMobile && props.isLarge ? 'display: flex;' : ''}
  padding: ${(props: ScreenProps) =>
    props.isMobile ? '14px 12px 10px' : '20px 24px 21px 22px'};
`;

export const ContentLeftWrapper = styled.div<ScreenProps>`
  width: 100%;
  height: 100%;
  text-align: left;
  ${(props: ScreenProps) =>
    !props.isMobile && !props.isLarge ? 'padding-right: 23px;' : ''}
`;

export const ContentRightWrapper = styled.div<ScreenProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding-left: 23px;
  ${(props: ScreenProps) =>
    !props.isMobile && !props.isLarge
      ? `border-left: 2px solid ${ColorManager.default.greyColor};`
      : ''}
`;

export const ContentHeaderWrapper = styled.div`
  margin-bottom: 5px;
  text-align: left;
`;

export const ContentBodyWrapper = styled.div`
  text-align: left;
`;

export const TitleWrapper = styled.div`
  display: block;
  display: -webkit-box;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const LocationWrapper = styled.div<ScreenProps>`
  color: ${ColorManager.default.secondaryColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${(props: ScreenProps) =>
    props.isMobile ? FontManager.default.small : FontManager.default.text};
  line-height: ${(props: ScreenProps) => (props.isMobile ? '1.33' : '1.2')};
  margin-bottom: 0px;
`;

export const ReviewWrapper = styled.div<ScreenProps>`
  color: ${ColorManager.default.fourthColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${(props: ScreenProps) =>
    props.isMobile ? FontManager.default.small : FontManager.default.text};
  line-height: ${(props: ScreenProps) => (props.isMobile ? '1.33' : '1.2')};
  margin-bottom: 10px;
`;

export const Rate = styled.span`
  color: ${ColorManager.default.orangeColor};
`;

export const OptionWrapper = styled.div<ScreenProps>``;

export const DescriptionWrapper = styled.div<ScreenProps>`
  color: ${ColorManager.default.fourthColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${(props: ScreenProps) =>
    props.isMobile
      ? FontManager.default.meduimSmall
      : FontManager.default.small};
  line-height: ${(props: ScreenProps) => (props.isMobile ? '1' : '1')};
  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 5px;
`;

export const PriceWrapper = styled.div<ScreenProps>`
  text-align: right;
  ${(props: ScreenProps) =>
    !props.isMobile && props.isLarge ? '' : 'padding-bottom: 15px;'}
`;

export const ReadMoreWrapper = styled.div<ScreenProps>`
  position: absolute;
  right: 0px;
  bottom: 0px;
  cursor: pointer;
  background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff 25%);
  & a {
    color: ${ColorManager.default.greenColor};
    font-family: '${FontManager.default.secondaryFont}';
    font-size: ${(props: ScreenProps) =>
      props.isMobile
        ? FontManager.default.meduimSmall
        : FontManager.default.small};
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${ColorManager.default.greyColor};
  margin-top: 13px;
  margin-bottom: 12px;
`;

export const Button = styled.a`
  display: block;
  background-color: ${ColorManager.default.secondaryColor};
  border-radius: 4px;
  color: ${ColorManager.default.white};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.text};
  height: 42px;
  cursor: pointer;
  text-align: center;
  width: 100%;
  padding: 8px 24px;
  box-shadow: 0px 3px 3px 0 rgba(0, 0, 0, 0.03);
  &:hover {
    background-color: ${ColorManager.default.fourthColor};
  }
`;
