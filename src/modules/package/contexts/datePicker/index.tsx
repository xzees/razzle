import { createContext } from 'react';

interface DatePickerContext {
  focusedDate: Date | null;
  isCurrentDate: (date: Date) => boolean;
  isHolidayDate: (date: Date) => boolean;
  isDateFocused: (date: Date) => boolean;
  isDateSelected: (date: Date) => boolean;
  isDateHovered: (date: Date) => boolean;
  isDateBlocked: (date: Date) => boolean;
  isFirstOrLastSelectedDate: (date: Date) => boolean;
  onDateSelect: (date: Date) => void;
  onDateFocus: (date: Date) => void;
  onDateHover: (date: Date | null) => void;
}

const datePickerContextDefaultValue: DatePickerContext = {
  focusedDate: null,
  isCurrentDate: (date: Date) => false,
  isHolidayDate: (date: Date) => false,
  isDateFocused: (date: Date) => false,
  isDateSelected: (date: Date) => false,
  isDateHovered: (date: Date) => false,
  isDateBlocked: (date: Date) => false,
  isFirstOrLastSelectedDate: (date: Date) => false,
  onDateSelect: (date: Date) => {},
  onDateFocus: (date: Date) => {},
  onDateHover: (date: Date | null) => {},
};

export default createContext(datePickerContextDefaultValue);
