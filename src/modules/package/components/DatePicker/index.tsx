import React, { FunctionComponent } from 'react';
import { ClickAwayListener, Grow } from '@material-ui/core';
import { CalendarTodayOutlined } from '@material-ui/icons';
import { OnDatesChangeProps, useDatepicker } from '@datepicker-react/hooks';
import {
  formatMYForAutocomplete,
  getDate,
  getDayTh,
} from 'common/Manager/Helper';
import DatePickerContext from 'modules/package/contexts/datePicker';
import useDatePicker from 'modules/package/Hook/useDatePicker';
import useToggle from 'modules/package/Hook/useToggle';
import Calendar from './Calendar';
import {
  ButtonDatePickerTextWrapper,
  OutSideWrapper,
  DatePickerWrapper,
  FooterButtonWrapper,
  FooterButton,
  ButtonDatePicker,
} from './Style';

type Props = {
  isMobile: boolean;
  dateSelect: Date | null;
  alignment?: 'left' | 'right';
  handleChangeDate: (date: Date | null) => void;
  handleSelectedDate: () => void;
  handleCloseModal?: () => void;
};

const DatePicker: FunctionComponent<Props> = (props: Props) => {
  const {
    isMobile,
    dateSelect,
    alignment = 'left',
    handleChangeDate,
    handleSelectedDate,
    handleCloseModal,
  } = props;
  const { toggle, handleOpen, handleClose } = useToggle();

  const {
    date,
    isCurrentDate,
    isHolidayDate,
    getHolidaysOfMonth,
    handleDateChange,
  } = useDatePicker({
    dateSelect,
    handleChangeDate,
  });

  const {
    activeMonths,
    firstDayOfWeek,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateSelect,
    onDateFocus,
    onDateHover,
    goToPreviousMonths,
    goToNextMonths,
  } = useDatepicker({
    startDate: date,
    endDate: date,
    focusedInput: 'startDate',
    numberOfMonths: 1,
    minBookingDate: new Date(),
    onDatesChange: (data: OnDatesChangeProps) => {
      handleDateChange(data.startDate);
      if (!isMobile) {
        handleClose();
        handleSelectedDate();
      }
    },
  });

  if (isMobile) {
    return (
      <>
        <DatePickerContext.Provider
          value={{
            focusedDate,
            isCurrentDate,
            isHolidayDate,
            isDateFocused,
            isDateSelected,
            isDateHovered,
            isDateBlocked,
            isFirstOrLastSelectedDate,
            onDateSelect,
            onDateFocus,
            onDateHover,
          }}
        >
          <Calendar
            isMobile
            activeMonths={activeMonths}
            firstDayOfWeek={firstDayOfWeek}
            getHolidaysOfMonth={getHolidaysOfMonth}
            goToPreviousMonths={goToPreviousMonths}
            goToNextMonths={goToNextMonths}
          />
        </DatePickerContext.Provider>
        <FooterButtonWrapper>
          <FooterButton
            onClick={(event: any) => {
              if (handleCloseModal) handleCloseModal();
              handleSelectedDate();
            }}
          >
            ตกลง
          </FooterButton>
        </FooterButtonWrapper>
      </>
    );
  }

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        <ButtonDatePicker
          alignment={alignment}
          onClick={!toggle ? handleOpen : handleClose}
        >
          <CalendarTodayOutlined fontSize="small" />
          <ButtonDatePickerTextWrapper>
            {date
              ? `${getDayTh(date.getDay())}. ${getDate(
                  date
                )} ${formatMYForAutocomplete(date)}`
              : 'เลือกวันที่'}
          </ButtonDatePickerTextWrapper>
        </ButtonDatePicker>
        <Grow
          in={toggle}
          style={{ transformOrigin: '0 0 0', zIndex: 999999999 }}
          timeout={300}
        >
          <OutSideWrapper>
            <DatePickerWrapper alignment={alignment}>
              <DatePickerContext.Provider
                value={{
                  focusedDate,
                  isCurrentDate,
                  isHolidayDate,
                  isDateFocused,
                  isDateSelected,
                  isDateHovered,
                  isDateBlocked,
                  isFirstOrLastSelectedDate,
                  onDateSelect,
                  onDateFocus,
                  onDateHover,
                }}
              >
                <Calendar
                  isMobile={false}
                  activeMonths={activeMonths}
                  firstDayOfWeek={firstDayOfWeek}
                  getHolidaysOfMonth={getHolidaysOfMonth}
                  goToPreviousMonths={goToPreviousMonths}
                  goToNextMonths={goToNextMonths}
                />
              </DatePickerContext.Provider>
            </DatePickerWrapper>
          </OutSideWrapper>
        </Grow>
      </div>
    </ClickAwayListener>
  );
};

export default DatePicker;
