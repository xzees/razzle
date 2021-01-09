import styled from 'styled-components';
import { withStyles } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/package/Manager/FontManager';

interface CalendarScrollContainerProps {
  windowInnerHeight: number;
}
interface CalendarWrapperProps {
  mt?: string | number;
}

interface IconButtonProps {
  alignment?: 'left' | 'right';
}

export const ChevronLeftIcon = withStyles({
  root: {
    color: ColorManager.default.fifthColor,
  },
})(ChevronLeft);

export const ChevronRightIcon = withStyles({
  root: {
    color: ColorManager.default.fifthColor,
  },
})(ChevronRight);

export const CalendarScrollContainer = styled.div<CalendarScrollContainerProps>`
  position: relative;
  overflow-y: auto;
  height: calc(${(props) => props.windowInnerHeight.toString()}px - 185px);
  scroll-behavior: smooth;
`;

export const CalendarWrapper = styled.div<CalendarWrapperProps>`
  ${(props: CalendarWrapperProps) =>
    props.mt ? `margin-top: ${props.mt};` : ''}
  background-color: ${ColorManager.default.white};
`;

export const WeekDayWrapper = styled.div`
  position: fixed;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 40px;
  padding-left: 18px;
  padding-right: 18px;
  border-bottom: 2px solid ${ColorManager.default.white};
  background-color: ${ColorManager.default.greyColor};
`;

export const DayWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${ColorManager.default.fourthColor};
  font-family: '${FontManager.default.primaryFont}';
  font-size: ${FontManager.default.header};
`;

export const MonthWrapper = styled.div`
  margin-top: 42px;
  background-color: ${ColorManager.default.white};
`;

export const IconButton = styled.button<IconButtonProps>`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0px;
  height: 51px;
  border: none;
  cursor: pointer;
  color: ${ColorManager.default.fifthColor};
  background-color: ${ColorManager.default.transparent};
  ${(props: IconButtonProps) =>
    props.alignment === 'right' ? 'right: 25px;' : 'left: 25px'}
`;
