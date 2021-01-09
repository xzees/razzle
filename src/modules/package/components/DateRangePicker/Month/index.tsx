import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import { useMonth } from '@datepicker-react/hooks';
import {
  getDayTh,
  getMonthTh,
  subMonthTh,
  getFullYearTH,
} from 'common/Manager/Helper';
import DateButton from '../DateButton';
import {
  HeaderWrapper,
  MonthLabelWrapper,
  BodyWrapper,
  WeekDayWrapper,
  DayWrapper,
  MonthDateWrapper,
  HolidayWrapper,
  HolidayListWrapper,
  HolidayTitle,
  HolidayDate,
  HolidayName,
} from './Style';

type Props = {
  isMobile: boolean;
  year: number;
  month: number;
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  holidays: any[];
  alignment?: 'left' | 'right';
};

const Month: FunctionComponent<Props> = (props: Props) => {
  const { isMobile, year, month, firstDayOfWeek, holidays, alignment } = props;

  const { days, monthLabel, weekdayLabels } = useMonth({
    year,
    month,
    firstDayOfWeek,
    dayLabelFormat: (date: Date) => `${date.getDate()}`,
    monthLabelFormat: (date: Date) =>
      `${date.getMonth()} ${date.getFullYear()}`,
  });

  if (isMobile) {
    return (
      <>
        <MonthLabelWrapper height="40px">
          {`${getMonthTh(_.first(_.split(monthLabel, ' ')))} ${getFullYearTH(
            _.last(_.split(monthLabel, ' '))
          )}`}
        </MonthLabelWrapper>
        <MonthDateWrapper paddingHorizontal="18px">
          {_.map(days, (day) => {
            if (typeof day === 'number') {
              return <div />;
            }

            return <DateButton date={day.date} dayLabel={day.dayLabel} />;
          })}
        </MonthDateWrapper>
        {!!holidays.length && (
          <HolidayWrapper>
            <HolidayTitle>* วันหยุดนักขัตฤกษ์</HolidayTitle>
            <HolidayListWrapper>
              {_.map(holidays, (holiday: any) => {
                return (
                  <>
                    <HolidayDate>
                      {`${_.get(holiday, 'day')} ${subMonthTh(
                        _.has(holiday, 'month') ? holiday.month - 1 : ''
                      )}`}
                    </HolidayDate>
                    <HolidayName>{_.get(holiday, 'name')}</HolidayName>
                  </>
                );
              })}
            </HolidayListWrapper>
          </HolidayWrapper>
        )}
      </>
    );
  }

  return (
    <>
      <HeaderWrapper>
        <MonthLabelWrapper alignment={alignment}>
          {`${getMonthTh(_.first(_.split(monthLabel, ' ')))} ${getFullYearTH(
            _.last(_.split(monthLabel, ' '))
          )}`}
        </MonthLabelWrapper>
      </HeaderWrapper>
      <BodyWrapper alignment={alignment}>
        <WeekDayWrapper>
          {_.map(weekdayLabels, (weekdayLabel: string, index: number) => {
            return <DayWrapper>{getDayTh(index)}</DayWrapper>;
          })}
        </WeekDayWrapper>
        <MonthDateWrapper>
          {_.map(days, (day) => {
            if (typeof day === 'number') {
              return <div />;
            }

            return <DateButton date={day.date} dayLabel={day.dayLabel} />;
          })}
        </MonthDateWrapper>
        {!!holidays.length && (
          <HolidayWrapper>
            <HolidayTitle>* วันหยุดนักขัตฤกษ์</HolidayTitle>
            <HolidayListWrapper>
              {_.map(holidays, (holiday: any) => {
                return (
                  <>
                    <HolidayDate>
                      {`${_.get(holiday, 'day')} ${subMonthTh(
                        _.has(holiday, 'month') ? holiday.month - 1 : ''
                      )}`}
                    </HolidayDate>
                    <HolidayName>{_.get(holiday, 'name')}</HolidayName>
                  </>
                );
              })}
            </HolidayListWrapper>
          </HolidayWrapper>
        )}
      </BodyWrapper>
    </>
  );
};

export default Month;
