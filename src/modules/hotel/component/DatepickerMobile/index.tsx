import React , { useState , useRef , useContext, useEffect, createRef } from "react";
import { useDatepicker, START_DATE, useMonth , useDay } from "@datepicker-react/hooks";
import holidaysdata from './holidays.json';
import getColor from "./getColor";
import RootStore from 'stores';
import { inject, observer } from 'mobx-react';
import DatepickerContext from "./datepickerContext";
import {Month} from './Month'
import { IDatepicker } from "../Datepickers/Component";
import { getDayTh, getDiffDate } from 'common/Manager/Helper'
import View from 'modules/hotel/component/Datepickers/View';
import useModel from 'modules/hotel/Hook/useModel';  
import {  ClickAwayListener  } from '@material-ui/core';
import Style from './Style'
import './style.css';
import i18n from 'utilities/I18n';

const currentDate: Date = new Date();
const Index = inject('stores')(
    observer((props: IDatepicker) => {
    const MONTH_SHOW_NUM:number = 24;    
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
        isEndDate,
        goToDate
    } = useDatepicker({
        startDate: props.startDate,
        endDate: props.endDate,
        focusedInput: props.focusedInput,
        onDatesChange: props.handleDatesChange,
        numberOfMonths: MONTH_SHOW_NUM,
        minBookingDate: props.date,
        firstDayOfWeek:0,
        maxBookingDate: new Date(currentDate.setMonth(currentDate.getMonth() + MONTH_SHOW_NUM))
    } as any);
    
    const containerRef = createRef<HTMLDivElement>();

    const uiRootStore = props.stores!.HotelRootStore;
    
    const { weekdayLabels } = useMonth({
        year: 2020,
        month: 1,
        firstDayOfWeek: firstDayOfWeek
      });
    
    const resetClick = () => {
        let myCurrentDate: Date = new Date();
        
        uiRootStore.setVDatepicker({
            startDate: myCurrentDate,
            endDate: new Date(new Date().setDate(currentDate.getDate() + 1)),
            focusedInput: START_DATE
        });
        
        goToDate(myCurrentDate);
        containerRef.current!.scrollTop = 0;
    }    
    
    const submitClick = () => {
        if(getDiffDate(uiRootStore.vDatepicker.startDate, uiRootStore.vDatepicker.endDate) > 0) {
            props.handleClose();
        } else{
            alert(i18n.t('hotel.components.datepickermobile.alert'));
        }
    }

    const getMonth = ():Array<Object> => {
        let i:number;
        const mam = new Array();
        const myCurrentDate: Date = new Date();
        for (i = 0; i <= MONTH_SHOW_NUM - 1; i++){
            let myDate:Date;
            //const myDate = new Date(new Date().setDate(currentDate.getMonth() + i));
            let y = Math.floor((myCurrentDate.getMonth() + i) / 12);
            if(y > 0){
                let m = ((currentDate.getMonth() + i) % 12);
                myDate = new Date(myCurrentDate.getFullYear() + y, m, 1);
            }else{
                myDate = new Date(myCurrentDate.getFullYear(), myCurrentDate.getMonth() + i, 1);
            }
            const myObj = {
                year:  myDate.getFullYear(),
                month: myDate.getMonth(),
                date: myDate
            };
            mam.push(myObj);
        }
        return mam;
    }
    const myActiveMonths:Array<Object> = getMonth();

    return (
        <>
        <View  startDates={uiRootStore.vDatepicker.startDate} endDates={uiRootStore.vDatepicker.endDate} stores={props.stores} isMobile={true}/>
        <Style.WeekdayDiv hasSpacing={false}>
            {weekdayLabels.map((dayLabel, index) => (
                <Style.WeekdayLabels key={dayLabel}>
                    {getDayTh(index)}.
                </Style.WeekdayLabels>
            ))}
        </Style.WeekdayDiv>
        <Style.CalendarScrollContainer ref={containerRef} windowinnerheight={window.innerHeight} style={{ position: 'relative', overflow: 'scroll' }}>
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
                {myActiveMonths.map((month:any) => (
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
                        isMobile = {true}
                    />
                ))}
            </DatepickerContext.Provider>
            <Style.Box85SpaceHeight></Style.Box85SpaceHeight>
        </Style.CalendarScrollContainer>
        <Style.FooterButtonContainer>
            <Style.FooterButton buttontype="reset" onClick={resetClick} >ล้างข้อมูล</Style.FooterButton>
            <Style.FooterButton buttontype="submit"onClick={submitClick}>ตกลง ({getDiffDate(uiRootStore.vDatepicker.startDate, uiRootStore.vDatepicker.endDate)} คืน)</Style.FooterButton>
        </Style.FooterButtonContainer>
        </>
    );
}));

export default Index;