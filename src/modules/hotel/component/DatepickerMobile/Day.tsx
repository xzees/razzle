import React , { useState , useRef , useContext } from "react";
import { useDatepicker, START_DATE } from "@datepicker-react/hooks";
import { useMonth , useDay } from "@datepicker-react/hooks";
import getColor from "./getColor";
import DatepickerContext from "./datepickerContext";
import ColorManager from "common/Manager/ColorManager";
import Style from './Style'


const DayButton = (props: any) => {
    const { dayLabel, date, isStartDate, isEndDate, isHoliday, startDates, endDates } = props
    const dayRef = useRef(null);
    const {
      focusedDate,
      isDateFocused,
      isDateSelected,
      isDateHovered,
      isDateBlocked,
      isFirstOrLastSelectedDate,
      onDateSelect,
      onDateFocus,
      onDateHover
    } = useContext(DatepickerContext);
    const {
      isSelected,
      isSelectedStartOrEnd,
      isWithinHoverRange,
      disabledDate,
      onClick,
      onKeyDown,
      onMouseEnter,
      tabIndex
    } = useDay({
      date,
      focusedDate,
      isDateFocused,
      isDateSelected,
      isDateHovered,
      isDateBlocked,
      isFirstOrLastSelectedDate,
      onDateFocus,
      onDateSelect,
      onDateHover,
      dayRef
    });

    //const firstOrLastSelect = (isSelectedStartOrEnd) ? "firstOrLastSelect" : "";

    if (!dayLabel) {
      return <div />;
    }
  
    const getColorFn = getColor(
      isSelected,
      isSelectedStartOrEnd,
      isWithinHoverRange,
      disabledDate
    );

    const firstOrLast = (date: any) => {
      if((isStartDate(date) && isEndDate(date)) || (isStartDate(date) && !endDates)){
        return "firstSelect lastSelect"; 
      }else if(isStartDate(date) && !isEndDate(date) && endDates){
        return "firstSelect";
      }else if(startDates && !isStartDate(date) && isEndDate(date)){
        return "lastSelect";
      }else{
        return "";
      }
    }

    return (
      <Style.DayButton 
        opacityButton={(disabledDate ? '0.4' : '1')}
        isCurrentDate={String(date).substring(0,15) == String(new Date()).substring(0,15)}
        colorButton={getColorFn({
          selectedFirstOrLastColor: ColorManager.default.black,
          normalColor: ColorManager.default.black,
          selectedColor: ColorManager.default.black,
          rangeHoverColor: ColorManager.default.black,
          disabledColor: "#808285"
        })}
        backgroundButton={getColorFn({
          selectedFirstOrLastColor: ColorManager.default.white,
          normalColor: "#FFFFFF",
          selectedColor: ColorManager.default.greyColor,
          rangeHoverColor: ColorManager.default.greyColor,
          disabledColor: "#FFFFFF"
        })}
        onClick={onClick}
        onKeyDown={onKeyDown}
        onMouseEnter={onMouseEnter}
        tabIndex={tabIndex}
        type="button"
        ref={dayRef}
        isHoliday={isHoliday}
        className={firstOrLast(date)}
      >
        <Style.DayRing opacityRing={(isSelectedStartOrEnd ? '1' : '0')}>{dayLabel}</Style.DayRing>
        
      </Style.DayButton>
    );
  }

  export const Day = React.memo(DayButton);