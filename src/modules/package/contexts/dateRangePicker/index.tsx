import { createContext } from 'react';

interface DateRangePickerContext {
  focusedDate: Date | null;
  isStartDate: (date: Date) => boolean;
  isEndDate: (date: Date) => boolean;
  isCurrentDate: (date: Date) => boolean;
  isHolidayDate: (date: Date) => boolean;
  isSelectedStartAndEndDate: () => boolean;
  isDateFocused: (date: Date) => boolean;
  isDateSelected: (date: Date) => boolean;
  isDateHovered: (date: Date) => boolean;
  isDateBlocked: (date: Date) => boolean;
  isFirstOrLastSelectedDate: (date: Date) => boolean;
  onDateSelect: (date: Date) => void;
  onDateFocus: (date: Date) => void;
  onDateHover: (date: Date | null) => void;
}

const dateRangePickerContextDefaultValue: DateRangePickerContext = {
  focusedDate: null,
  isStartDate: (date: Date) => false,
  isEndDate: (date: Date) => false,
  isCurrentDate: (date: Date) => false,
  isHolidayDate: (date: Date) => false,
  isSelectedStartAndEndDate: () => false,
  isDateFocused: (date: Date) => false,
  isDateSelected: (date: Date) => false,
  isDateHovered: (date: Date) => false,
  isDateBlocked: (date: Date) => false,
  isFirstOrLastSelectedDate: (date: Date) => false,
  onDateSelect: (date: Date) => {},
  onDateFocus: (date: Date) => {},
  onDateHover: (date: Date | null) => {},
};

export default createContext(dateRangePickerContextDefaultValue);
