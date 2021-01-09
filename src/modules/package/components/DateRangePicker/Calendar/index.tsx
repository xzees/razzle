import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import { useMonth } from '@datepicker-react/hooks';
import { getDayTh } from 'common/Manager/Helper';
import Month from '../Month';
import DateRangeDetail from '../DateRangeDetail';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CalendarScrollContainer,
  CalendarWrapper,
  WeekDayWrapper,
  DayWrapper,
  MonthWrapper,
  DateRangePickerDetailWrapper,
  IconButton,
} from './Style';

interface ActiveMonth {
  year: number;
  month: number;
  date: Date;
}

type Props = {
  isMobile: boolean;
  startDate: Date | null;
  endDate: Date | null;
  activeMonths: ActiveMonth[];
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  hoveredDate: Date | null;
  getHolidaysOfMonth: (year: number, month: number) => any[];
  getCountRangeDate: (date: Date | null | undefined) => number;
  goToPreviousMonths: () => void;
  goToNextMonths: () => void;
};

const Calendar: FunctionComponent<Props> = (props: Props) => {
  const {
    isMobile,
    startDate,
    endDate,
    activeMonths,
    firstDayOfWeek,
    hoveredDate,
    getHolidaysOfMonth,
    getCountRangeDate,
    goToPreviousMonths,
    goToNextMonths,
  } = props;

  const { weekdayLabels } = useMonth({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    firstDayOfWeek,
  });

  const getActiveMonths = (): ActiveMonth[] => {
    const activeMonths: ActiveMonth[] = [];
    const currentDate = new Date();
    for (let i = 0; i < 24; i++) {
      let date: Date;
      const year = Math.floor((currentDate.getMonth() + i) / 12);
      if (year > 0) {
        const month = (currentDate.getMonth() + i) % 12;
        date = new Date(currentDate.getFullYear() + year, month, 1);
      } else {
        date = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + i,
          1
        );
      }
      const activeMonth: ActiveMonth = {
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date,
      };
      activeMonths.push(activeMonth);
    }
    return activeMonths;
  };

  if (isMobile) {
    const activeMonths: ActiveMonth[] = getActiveMonths();

    return (
      <>
        <DateRangeDetail
          isMobile
          startDate={startDate}
          endDate={endDate}
          hoveredDate={hoveredDate}
          getCountRangeDate={getCountRangeDate}
        />
        <CalendarScrollContainer
          windowInnerHeight={
            typeof window === 'object' ? window.innerHeight : 0
          }
        >
          <WeekDayWrapper>
            {_.map(weekdayLabels, (weekdayLabel: string, index: number) => {
              return <DayWrapper>{getDayTh(index)}</DayWrapper>;
            })}
          </WeekDayWrapper>
          <MonthWrapper mt="42px">
            {_.map(activeMonths, (activeMonth: ActiveMonth) => {
              const year = activeMonth.year;
              const month = activeMonth.month;

              return (
                <Month
                  isMobile
                  year={year}
                  month={month}
                  firstDayOfWeek={firstDayOfWeek}
                  holidays={getHolidaysOfMonth(year, month)}
                />
              );
            })}
          </MonthWrapper>
        </CalendarScrollContainer>
      </>
    );
  }

  return (
    <CalendarWrapper>
      <MonthWrapper>
        <IconButton onClick={goToPreviousMonths}>
          <ChevronLeftIcon />
        </IconButton>
        <Month
          isMobile={false}
          year={activeMonths[0].year}
          month={activeMonths[0].month}
          firstDayOfWeek={firstDayOfWeek}
          holidays={getHolidaysOfMonth(
            activeMonths[0].year,
            activeMonths[0].month + 1
          )}
          alignment="left"
        />
      </MonthWrapper>
      <MonthWrapper>
        <IconButton alignment="right" onClick={goToNextMonths}>
          <ChevronRightIcon />
        </IconButton>
        <Month
          isMobile={false}
          year={activeMonths[1].year}
          month={activeMonths[1].month}
          firstDayOfWeek={firstDayOfWeek}
          holidays={getHolidaysOfMonth(
            activeMonths[1].year,
            activeMonths[1].month + 1
          )}
          alignment="right"
        />
      </MonthWrapper>
      <DateRangePickerDetailWrapper>
        <DateRangeDetail
          isMobile={false}
          startDate={startDate}
          endDate={endDate}
          hoveredDate={hoveredDate}
          getCountRangeDate={getCountRangeDate}
        />
      </DateRangePickerDetailWrapper>
    </CalendarWrapper>
  );
};

export default Calendar;
