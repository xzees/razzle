import React, { FunctionComponent, useContext, useRef } from 'react';
import { useDay } from '@datepicker-react/hooks';
import DatePickerContext from 'modules/package/contexts/datePicker';
import {
  colorButton,
  backgroundColorButton,
  Button,
  CircleOutline,
  ColorDateButton,
} from './Style';

type Props = {
  dayLabel: string;
  date: Date;
};

const DateButton: FunctionComponent<Props> = (props: Props) => {
  const dayRef = useRef(null);

  const { dayLabel, date } = props;

  const {
    focusedDate,
    isCurrentDate,
    isHolidayDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateSelect,
    onDateFocus,
    onDateHover,
  } = useContext(DatePickerContext);

  const {
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
    onDateSelect,
    onDateFocus,
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
      color={getColorFn(colorButton)}
      backgroundColor={getColorFn(backgroundColorButton)}
      isCurrentDate={isCurrentDate(date)}
      isHolidayDate={isHolidayDate(date)}
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

export default DateButton;
