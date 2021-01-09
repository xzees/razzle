import React, { useState } from 'react';
import { DateRange } from '@material-ui/icons';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {  Box, ClickAwayListener  } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import View from './View';
import { Datepicker, START_DATE } from '@datepicker-react/styled';
import Style from './Style';
import { th as locale } from 'date-fns/locale';
import { format } from 'date-fns';
import { IDatepicker } from './Component';
import { inject, observer } from 'mobx-react';

import { useDatepicker, useMonth , useDay } from "@datepicker-react/hooks";
import DatepickerContext from "../DatepickerMobile/datepickerContext";
import {Month} from '../DatepickerMobile/Month'
import holidaysdata from '../DatepickerMobile/holidays.json';
import Divider from '@material-ui/core/Divider';
import ColorManager from 'common/Manager/ColorManager';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    myDividerStyle: {
        backgroundColor: ColorManager.default.fifthColor,
        opacity: 0.1,
    }
  });

const currentDate: Date = new Date();
const Content = inject('stores')(
    observer((props: IDatepicker) => {
    
        const {
            firstDayOfWeek,
            activeMonths,
            isDateSelected,
            isDateHovered,
            isFirstOrLastSelectedDate,
            isDateBlocked,
            isDateFocused,
            focusedDate,
            onDateHover,
            onDateSelect,
            onDateFocus,
            goToPreviousMonths,
            goToNextMonths,
            isStartDate,
            isEndDate
        } = useDatepicker({
            startDate: props.startDate,
            endDate: props.endDate,
            focusedInput: props.focusedInput,
            onDatesChange: props.handleDatesChange,
            numberOfMonths: 2,
            minBookingDate: props.date,
            firstDayOfWeek:0,
            maxBookingDate: new Date(new Date().setFullYear(currentDate.getFullYear() + 2))
        } as any);
        const myclasses = useStyles();
        const uiRootStore = props.stores!.HotelRootStore;

        const date:Date =  new Date();
        const minYear:number = date.getFullYear();
        const minMonth:number = date.getMonth();
        const maxYear:number = date.getFullYear() + 2;
        const isShowArrowPrevious:String = (activeMonths[0].date > new Date(minYear, minMonth)) ? 'block' : 'none';
        const isShowArrowNext:String = (activeMonths[1].date < new Date(maxYear, minMonth)) ? 'block' : 'none';
        const iconDirection:String = (isShowArrowPrevious == 'none' && isShowArrowNext == 'block') ? 'row-reverse': 'row';
    return (
        <>
         {/*<Datepicker
            onDatesChange={handleDatesChange}
            startDate={startDate} 
            endDate={endDate} 
            focusedInput={(focusedInput as any)} 
            showClose={false}
            showResetDates={false}
            showSelectedDates={false}
            minBookingDate={date}
            dayLabelFormat={(data: Date) => format(data, 'dd', {locale})}
            weekdayLabelFormat={(data: Date) => format(data, 'eeeeee', {locale})}
            monthLabelFormat={(data: Date) => format(data, 'MMMM yyyy', {locale})}
            numberOfMonths={(!month ? 2 : month)}
        />
        */}
        <Style.arrowContainer containerdirection={iconDirection}>
            <Style.arrowIconContainer onClick={goToPreviousMonths} display={isShowArrowPrevious}>
                <ChevronLeftIcon></ChevronLeftIcon>
            </Style.arrowIconContainer>
            <Style.arrowIconContainer onClick={goToNextMonths} display={isShowArrowNext}>
                <ChevronRightIcon></ChevronRightIcon>
            </Style.arrowIconContainer>
        </Style.arrowContainer>
        <Style.datePicketContainer>
        <DatepickerContext.Provider
                value={{
                    focusedDate,
                    isDateFocused,
                    isDateSelected,
                    isDateHovered,
                    isDateBlocked,
                    isFirstOrLastSelectedDate,
                    onDateSelect,
                    onDateFocus,
                    onDateHover
                } as any}
            >
                {activeMonths.map((month:any, index) => (
                    <>
                        <Month
                            key={`${month.year}-${month.month}`}
                            year={month.year}
                            month={month.month}
                            firstDayOfWeek={firstDayOfWeek}
                            goToPreviousMonths={goToPreviousMonths}
                            goToNextMonths={goToNextMonths}
                            isStartDate={isStartDate}
                            isEndDate={isEndDate}
                            holidays = {holidaysdata.filter(item => item.year == month.year && item.month == month.month+1)}
                            startDates = {uiRootStore.vDatepicker.startDate}
                            endDates={uiRootStore.vDatepicker.endDate}
                            isMobile={false}
                            spacing={index == 0}
                        />
                    </>
                ))}
            </DatepickerContext.Provider>
            </Style.datePicketContainer>
            <Divider className={myclasses.myDividerStyle}/>
            <View startDates={uiRootStore.vDatepicker.startDate} endDates={uiRootStore.vDatepicker.endDate} stores={props.stores} isMobile={false}/>
        </>
    );
}));

const Calendar = (props: IDatepicker) => {

    const { 
        arrowLeft,
        arrowRight,
        Theme,
        isMobile
    } = props;

    if (isMobile) {
        return (
            <Style.ulDivOutSide>
                <Style.ulMobile arrowLeft={arrowLeft} arrowRight={arrowRight} >
                    <Style.ulDivInSide>
                        <ThemeProvider
                            theme={{...Theme.themeDatePickerMobile}}
                        >
                            <Content {...props} />
                        </ThemeProvider>
                    </Style.ulDivInSide>
                </Style.ulMobile>
            </Style.ulDivOutSide>
        );
    }
    return (
        <Style.ulDivOutSide>
            <Style.ul arrowLeft={arrowLeft} arrowRight={arrowRight} >
                <Style.ulDivInSide>
                    <ThemeProvider
                        theme={{...Theme.themeDatePicker}}
                    >
                        <Content {...props} />
                    </ThemeProvider>
                </Style.ulDivInSide>
            </Style.ul>
        </Style.ulDivOutSide>
    );
};

export default Calendar;