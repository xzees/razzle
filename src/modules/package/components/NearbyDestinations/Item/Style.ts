import styled from 'styled-components';
import { IconProps, withStyles } from '@material-ui/core';
import { Rating as MuiRating, RatingProps } from '@material-ui/lab';
import { ErrorRounded, RoomRounded } from '@material-ui/icons';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface ImageProps {
  height?: string | number;
}

interface ContentDetailWrapperProps {
  height?: string | number;
}

interface TitleWrapperProps {
  height?: string | number;
}
interface TitleProps {
  fontSize?: string | number;
}

interface PriceWrapperProps {
  height?: string | number;
}

interface DiscountProps {
  fontSize?: string | number;
  mb?: string | number;
}

interface AmountProps {
  fontSize?: string | number;
}

interface SaleWrapperProps {
  width?: string | number;
  height?: string | number;
  p?: string | number;
  mb?: string | number;
  arrowHeight?: number;
  arrowRight?: string | number;
}

interface ScreenProps {
  isMobile: boolean;
}

export const Rating = withStyles(() => ({
  root: {
    position: 'static',
    marginLeft: -2,
  },
  icon: {
    fontSize: (props: RatingProps) =>
      props.size === 'small'
        ? FontManager.default.extraSmall
        : FontManager.default.small,
  },
}))(MuiRating);

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

export const ErrorRoundedIcon = withStyles(() => ({
  root: {
    fontSize: (props: IconProps) =>
      props.fontSize === 'small'
        ? FontManager.default.extraSmall
        : FontManager.default.small,
    verticalAlign: 'middle',
  },
}))(ErrorRounded);

export const NearbyDestinationItemWrapper = styled.div`
  border-radius: 4px;
  box-shadow: 0px 2px 2px 0 rgba(0, 0, 0, 0.1);
  background: ${ColorManager.default.white};
  overflow: hidden;
`;

export const ContentWrapper = styled.div<ScreenProps>`
  padding: ${(props: ScreenProps) =>
    props.isMobile ? '9px 10px 8px' : '16px 16px 13px'};
`;

export const ContentDetailWrapper = styled.div<ContentDetailWrapperProps>`
  ${(props: ContentDetailWrapperProps) =>
    props.height ? `height: ${props.height};` : ''}
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const TitleWrapper = styled.div<TitleWrapperProps>`
  ${(props: TitleWrapperProps) =>
    props.height ? `height: ${props.height};` : ''}
`;

export const PriceWrapper = styled.div<PriceWrapperProps>`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-top: 1px solid #f3f2fa;
  ${(props: ContentDetailWrapperProps) =>
    props.height ? `height: ${props.height};` : ''}
  flex-direction: column;
  text-align: right;
`;

export const SaleWrapper = styled.div<SaleWrapperProps>`
  position: relative;
  display: inline-flex;
  justify-content: flex-end;
  ${(props: SaleWrapperProps) =>
    props.width ? `min-width: ${props.width};` : ''}
  ${(props: SaleWrapperProps) =>
    props.height ? `height: ${props.height};` : ''}
  ${(props: SaleWrapperProps) => (props.p ? `padding: ${props.p};` : '')}
  border-radius: 4px;
  background-color: #f6dde1;
  ${(props: SaleWrapperProps) =>
    props.mb ? `margin-bottom: ${props.mb};` : ''}
  &::after {
    content: '';
    position: absolute;
    right: ${(props: SaleWrapperProps) => props.arrowRight || '8px'};
    bottom: -${(props: SaleWrapperProps) => (props.arrowHeight ? props.arrowHeight - 1 : 12)}px;
    width: ${(props: SaleWrapperProps) =>
      props.arrowHeight ? props.arrowHeight : 12}px;
    height: ${(props: SaleWrapperProps) =>
      props.arrowHeight ? props.arrowHeight : 12}px;
    border-style: solid;
    border-width: ${(props: SaleWrapperProps) =>
      props.arrowHeight
        ? `${props.arrowHeight / 2}px ${props.arrowHeight / 2}px 0 ${
            props.arrowHeight / 2
          }px`
        : '6px 6px 0 6px'};
    border-color: #f6dde1 transparent transparent transparent;
  }
`;

export const LocationWrapper = styled.div<ScreenProps>`
  color: ${ColorManager.default.secondaryColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${(props: ScreenProps) =>
    props.isMobile ? FontManager.default.extraSmall : FontManager.default.text};
  line-height: 1.2;
`;

export const ReviewWrapper = styled.div<ScreenProps>`
  color: ${ColorManager.default.fourthColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${(props: ScreenProps) =>
    props.isMobile ? FontManager.default.extraSmall : FontManager.default.text};
  line-height: 1.2;
`;

export const Image = styled.img<ImageProps>`
  width: 100%;
  ${(props: ImageProps) => (props.height ? `height: ${props.height};` : '')}
  object-fit: cover;
`;

export const Title = styled.h3<TitleProps>`
  color: ${ColorManager.default.thirdColor};
  font-family: '${FontManager.default.secondaryFont}';
  font-size: ${(props: TitleProps) =>
    props.fontSize || FontManager.default.medium};
  font-weight: normal;
  line-height: 0.83;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 0px;
  margin-bottom: 2px;
`;

export const Rate = styled.span`
  color: ${ColorManager.default.orangeColor};
`;

export const Sale = styled.span<ScreenProps>`
  color: #d1436b;
  text-align: left;
  font-family: '${FontManager.default.secondaryFont}';
  font-size: ${(props: ScreenProps) =>
    props.isMobile ? '0.75rem' : FontManager.default.small};
  line-height: 1.44;
  font-weight: normal;
`;

export const Discount = styled.span<DiscountProps>`
  display: inline-block;
  ${(props: DiscountProps) => (props.mb ? `margin-bottom: ${props.mb};` : '')}
  color: ${ColorManager.default.fourthColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${(props: DiscountProps) =>
    props.fontSize || FontManager.default.ultraLarge};
  line-height: 0.45;
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

export const Amount = styled.h5<AmountProps>`
  display: inline-block;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${ColorManager.default.primaryColor};
  font-family: '${FontManager.default.secondaryFont}';
  font-size: ${(props: AmountProps) =>
    props.fontSize || FontManager.default.ultraLarge};
  line-height: 0.45;
  font-weight: normal;
`;
