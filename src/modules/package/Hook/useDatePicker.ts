import _ from 'lodash';
import { useState } from 'react';
import moment from 'moment';
import holidays from 'modules/package/data/holidays.json';

type Props = {
  dateSelect: Date | null;
  handleChangeDate?: (date: Date | null) => void;
};

interface Output {
  date: Date | null;
  isCurrentDate: (date: Date) => boolean;
  isHolidayDate: (date: Date) => boolean;
  getHolidaysOfMonth: (year: number, month: number) => any[];
  handleDateChange: (date: Date | null) => void;
}

const useDatePicker = ({ dateSelect, handleChangeDate }: Props): Output => {
  const [date, setDate] = useState<Date | null>(dateSelect);

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

  const getHolidaysOfMonth = (year: number, month: number) => {
    return _.filter(holidays, { year, month });
  };

  const handleDateChange = (date: Date | null) => {
    setDate(date);
    if (handleChangeDate) handleChangeDate(date);
  };

  return {
    date,
    isCurrentDate,
    isHolidayDate,
    getHolidaysOfMonth,
    handleDateChange,
  };
};

export default useDatePicker;
