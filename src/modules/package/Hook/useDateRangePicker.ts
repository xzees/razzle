import _ from 'lodash';
import { useState } from 'react';
import moment from 'moment';
import { START_DATE } from '@datepicker-react/hooks';
import holidays from 'modules/package/data/holidays.json';

type Props = {
  dateRange: DateRange;
  setDateRange?: (dateRange: DateRange) => void;
};

interface DateRangePicker {
  startDate: Date | null;
  endDate: Date | null;
  focusedInput: 'startDate' | 'endDate' | null;
}

interface Output {
  data: DateRangePicker;
  isCurrentDate: (date: Date) => boolean;
  isHolidayDate: (date: Date) => boolean;
  isSelectedStartAndEndDate: () => boolean;
  getHolidaysOfMonth: (year: number, month: number) => any[];
  getCountRangeDate: (date: Date | null | undefined) => number;
  handleDatesChange: (data: DateRangePicker) => void;
  clearDates: () => void;
}

const useDateRangePicker = ({ dateRange, setDateRange }: Props): Output => {
  const [data, setData] = useState<DateRangePicker>({
    startDate: dateRange.start,
    endDate: dateRange.end,
    focusedInput: START_DATE,
  });

  const isCurrentDate = (date: Date) => {
    return moment(date).isSame(moment(), 'day');
  };

  const isHolidayDate = (date: Date) => {
    return _.some(holidays, {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
    });
  };

  const isSelectedStartAndEndDate = () => {
    return !!data.startDate && !!data.endDate;
  };

  const getHolidaysOfMonth = (year: number, month: number) => {
    return _.filter(holidays, { year, month });
  };

  const getCountRangeDate = (date: Date | null | undefined) => {
    const startDate = moment(data.startDate);
    const endDate = moment(data.endDate);
    let count: number = 0;
    if (data.startDate && data.endDate)
      count = endDate.diff(startDate, 'days') + 1;
    else if (date) count = moment(date).diff(startDate, 'days') + 1;
    return count > 0 ? count : 1;
  };

  const handleDatesChange = (data: DateRangePicker) => {
    if (!data.focusedInput) setData({ ...data, focusedInput: START_DATE });
    else setData(data);
    if (setDateRange)
      setDateRange({ start: data.startDate, end: data.endDate });
  };

  const clearDates = () => {
    const data: DateRangePicker = {
      startDate: new Date(),
      endDate: new Date(),
      focusedInput: START_DATE,
    };
    setData(data);
    if (setDateRange)
      setDateRange({ start: data.startDate, end: data.endDate });
  };

  return {
    data,
    isCurrentDate,
    isHolidayDate,
    isSelectedStartAndEndDate,
    getHolidaysOfMonth,
    getCountRangeDate,
    handleDatesChange,
    clearDates,
  };
};

export default useDateRangePicker;
