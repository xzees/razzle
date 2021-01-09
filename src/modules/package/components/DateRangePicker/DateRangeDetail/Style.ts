import styled from 'styled-components';
import { withStyles } from '@material-ui/core';
import { CallMade } from '@material-ui/icons';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface ScreenProps {
  isMobile: boolean;
}

interface DateSelectDetailWrapperProps {
  textAlign?: string;
}

interface DateRangeSelectDetailWrapperProps {
  justify?: string;
}

interface DateSelectWrapperProps {
  hasBorder?: boolean;
}

interface DetailWrapperProps {
  ml?: string | number;
  mr?: string | number;
}

export const CallMadeIcon = withStyles({
  root: {
    color: ColorManager.default.fifthColor,
    transform: 'rotate(45deg)',
  },
})(CallMade);

export const DateRangeDetailWrapper = styled.div<ScreenProps>`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: ${(props: ScreenProps) =>
    props.isMobile ? '17px 20px 22px' : '19px 25px 20px'};
`;

export const DateRangeSelectDetailWrapper = styled.div<DateRangeSelectDetailWrapperProps>`
  display: flex;
  align-items: center;
  ${(props: DateRangeSelectDetailWrapperProps) =>
    props.justify ? `justify-content: ${props.justify};` : ''}
`;

export const DateSelectWrapper = styled.div<DateSelectWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 45px;
  ${(props: DateSelectWrapperProps) =>
    props.hasBorder
      ? `border: 2px solid ${ColorManager.default.primaryColor};`
      : ''}
  border-radius: 4px;
  background-color: ${ColorManager.default.greyColor};
  color: ${ColorManager.default.text};
  font-family: '${FontManager.default.primaryFont}';
  font-size: 48px;
  line-height: 0.5;
`;

export const DateSelectDetailWrapper = styled.div<DateSelectDetailWrapperProps>`
  align-self: flex-start;
  ${(props: DateSelectDetailWrapperProps) =>
    props.textAlign === 'right'
      ? `
    margin-right: 15px;
    text-align: right;
  `
      : 'margin-left: 15px;'}
`;

export const DetailWrapper = styled.div<DetailWrapperProps>`
  ${(props: DetailWrapperProps) =>
    props.ml ? `margin-left: ${props.ml};` : ''}
  ${(props: DetailWrapperProps) =>
    props.mr ? `margin-right: ${props.mr};` : ''}
  color: ${ColorManager.default.text};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.small};
  line-height: 1;
`;

export const Detail = styled.p`
  margin: 0px;
  color: ${ColorManager.default.text};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.small};
  line-height: 1;
`;

export const DateSelect = styled.p`
  margin: 0px;
  color: ${ColorManager.default.fourthColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.small};
  line-height: 0.78;
`;
