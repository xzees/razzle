import React , { useState , useRef , useContext } from "react";
import { useDatepicker, START_DATE } from "@datepicker-react/hooks";
import { useMonth , useDay } from "@datepicker-react/hooks";
import getColor from "./getColor";
import DatepickerContext from "./datepickerContext";
import {Day} from './Day';
import NavButton from "./NavButton";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import Style from './Style'
import { getDayTh, getMonthTh, getFullYearTH } from 'common/Manager/Helper'

const MonthView = (props: any) => {
    const { 
        year, 
        month, 
        firstDayOfWeek , 
        isStartDate,
        isEndDate,
        holidays,
        startDates,
        endDates,
        isMobile,
        spacing
    } = props
    
    const { days, weekdayLabels, monthLabel } = useMonth({
      year,
      month,
      firstDayOfWeek
    });

    const getIsHoliday = (dayLabel: string) => {
        return holidays.find((el: any) => el.day == dayLabel);
    }


    return (
        <Style.MonthContainer id={`${year}-${month}`}>
            <Style.MonthLabel>
                {getMonthTh(month)} {getFullYearTH(year)}
            </Style.MonthLabel>
            { !isMobile && (
            <Style.WeekdayDiv hasSpacing={spacing}>
            {weekdayLabels.map((dayLabel, index) => (
                <Style.WeekdayLabels key={dayLabel}>
                    {getDayTh(index)}.
                </Style.WeekdayLabels>
            ))}
        </Style.WeekdayDiv>
            )}

            <Style.Day>
                {days.map((day, index) => {
                    if (typeof day === "object") {
                    return (
                        <Day
                            date={day.date}
                            key={day.date.toString()}
                            dayLabel={day.dayLabel}
                            isStartDate={isStartDate}
                            isEndDate={isEndDate}
                            isHoliday={getIsHoliday(day.dayLabel)}
                            startDates = {startDates}
                            endDates={endDates}
                        />
                    );
                    }
                    return <div key={index} />;
                })}
            </Style.Day>
            <Style.Holiday isDisplay={holidays.length > 0}>
                <p className="holiday-text-header">*วันหยุดนักขัตฤกษ์</p>
                <div>
                    <table>
                        <tbody>
                        {
                            holidays.map((holiday: any, index: number) => {
                                return (
                                    <tr key={index.toString()}>
                                        <td className="holiday-text-date">{holiday.day} {getMonthTh(holiday.month-1)}</td> 
                                        <td className="holiday-text-title">{holiday.title}</td>
                                    </tr>
                                    )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </Style.Holiday>
        </Style.MonthContainer>
    );
  }

  export const Month = React.memo(MonthView);