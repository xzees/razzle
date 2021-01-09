import React, { FunctionComponent, useContext, useRef } from 'react';
import { useDay } from '@datepicker-react/hooks';
import DateRangePickerContext from 'modules/package/contexts/dateRangePicker';
import {
  backgroundColorButton,
  Button,
  CircleOutline,
  colorButton,
  ColorDateButton,
} from './Style';

type Props = {
  date: Date;
  dayLabel: string;
};

const Date: FunctionComponent<Props> = (props: Props) => {
  const dayRef = useRef(null);

  const { date, dayLabel } = props;

  const {
    focusedDate,
    isStartDate,
    isEndDate,
    isCurrentDate,
    isHolidayDate,
    isSelectedStartAndEndDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateSelect,
    onDateFocus,
    onDateHover,
  } = useContext(DateRangePickerContext);

  const {
    tabIndex,
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate,
    onKeyDown,
    onClick,
    onMouseEnter,
  } = useDay({
    date,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateFocus,
    onDateSelect,
    onDateHover,
    dayRef,
  });

  const getColor = (
    isSelected: boolean,
    isSelectedStartOrEnd: boolean,
    isWithinHoverRange: boolean,
    isDisabled: boolean
  ) => {
    return ({
      selectedFirstOrLastColor,
      normalColor,
      selectedColor,
      rangeHoverColor,
      disabledColor,
    }: ColorDateButton) => {
      if (isSelectedStartOrEnd) return selectedFirstOrLastColor;
      else if (isSelected) return selectedColor;
      else if (isWithinHoverRange) return rangeHoverColor;
      else if (isDisabled) return disabledColor;
      return normalColor;
    };
  };

  const getColorFn = getColor(
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate
  );

  return (
    <Button
      ref={dayRef}
      tabIndex={tabIndex}
      isStartDate={isStartDate(date)}
      isEndDate={isEndDate(date)}
      isDateHovered={isDateHovered(date)}
      isCurrentDate={isCurrentDate(date)}
      isHolidayDate={isHolidayDate(date)}
      isSelectedStartAndEndDate={isSelectedStartAndEndDate()}
      color={getColorFn(colorButton)}
      backgroundColor={getColorFn(backgroundColorButton)}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      disabled={isDateBlocked(date)}
    >
      <CircleOutline
        isFirstOrLastSelectedDate={isFirstOrLastSelectedDate(date)}
      >
        {dayLabel}
      </CircleOutline>
    </Button>
  );
};

export default Date;
