import _ from 'lodash';
import React, { FunctionComponent, memo } from 'react';
import { inject, observer } from 'mobx-react';
import { ClickAwayListener, Grow } from '@material-ui/core';
import { useDatepicker } from '@datepicker-react/hooks';
import RootStore from 'stores';
import DateRangePickerContext from 'modules/package/contexts/dateRangePicker';
import useToggle from 'modules/package/Hook/useToggle';
import useDateRangePicker from 'modules/package/Hook/useDateRangePicker';
import ButtonDateRangePicker from '../ButtonDateRangePicker';
import Calendar from './Calendar';
import {
  OutSideWrapper,
  DateRangePickerWrapper,
  FooterButtonWrapper,
  FooterButton,
} from './Style';

type Props = {
  stores?: RootStore;
  isMobile: boolean;
  isOpacity?: boolean;
  handleCloseModal?: () => void;
};

const DateRangePicker: FunctionComponent<Props> = (props: Props) => {
  const { stores, isMobile, isOpacity, handleCloseModal } = props;

  const uiStore = stores!.PackageRootStore.DestinationStore;

  const { toggle, handleOpen, handleClose } = useToggle();

  const {
    data,
    isCurrentDate,
    isHolidayDate,
    isSelectedStartAndEndDate,
    getHolidaysOfMonth,
    getCountRangeDate,
    handleDatesChange,
    clearDates,
  } = useDateRangePicker({
    dateRange: uiStore.dateRange,
    setDateRange: uiStore.setDateRange,
  });

  const {
    firstDayOfWeek,
    activeMonths,
    focusedDate,
    hoveredDate,
    isStartDate,
    isEndDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateFocus,
    onDateSelect,
    onDateHover,
    goToPreviousMonths,
    goToNextMonths,
  } = useDatepicker({
    startDate: data.startDate,
    endDate: data.endDate,
    focusedInput: data.focusedInput,
    minBookingDate: new Date(),
    onDatesChange: handleDatesChange,
  });

  if (isMobile) {
    return (
      <>
        <DateRangePickerContext.Provider
          value={{
            focusedDate,
            isStartDate,
            isEndDate,
            isCurrentDate,
            isHolidayDate,
            isSelectedStartAndEndDate,
            isDateFocused,
            isDateSelected,
            isDateHovered,
            isDateBlocked,
            isFirstOrLastSelectedDate,
            onDateSelect,
            onDateHover,
            onDateFocus,
          }}
        >
          <Calendar
            isMobile
            startDate={data.startDate}
            endDate={data.endDate}
            activeMonths={activeMonths}
            firstDayOfWeek={firstDayOfWeek}
            hoveredDate={hoveredDate}
            getHolidaysOfMonth={getHolidaysOfMonth}
            getCountRangeDate={getCountRangeDate}
            goToPreviousMonths={goToPreviousMonths}
            goToNextMonths={goToNextMonths}
          />
        </DateRangePickerContext.Provider>
        <FooterButtonWrapper>
          <FooterButton type="reset" onClick={(event: any) => clearDates()}>
            ล้างข้อมูล
          </FooterButton>
          <FooterButton
            type="submit"
            {...(handleCloseModal
              ? { onClick: (event: any) => handleCloseModal() }
              : {})}
          >
            {`ตกลง (${getCountRangeDate(hoveredDate)} วัน)`}
          </FooterButton>
        </FooterButtonWrapper>
      </>
    );
  }

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        <ButtonDateRangePicker
          isOpacity={isOpacity && !toggle}
          startDate={data.startDate}
          endDate={data.endDate}
          onClick={handleOpen}
        />
        <Grow
          in={toggle}
          style={{ transformOrigin: '0 0 0', zIndex: 999999999 }}
          timeout={300}
        >
          <OutSideWrapper>
            <DateRangePickerWrapper>
              <DateRangePickerContext.Provider
                value={{
                  focusedDate,
                  isStartDate,
                  isEndDate,
                  isCurrentDate,
                  isHolidayDate,
                  isSelectedStartAndEndDate,
                  isDateFocused,
                  isDateSelected,
                  isDateHovered,
                  isDateBlocked,
                  isFirstOrLastSelectedDate,
                  onDateSelect,
                  onDateHover,
                  onDateFocus,
                }}
              >
                <Calendar
                  isMobile={false}
                  startDate={data.startDate}
                  endDate={data.endDate}
                  activeMonths={activeMonths}
                  firstDayOfWeek={firstDayOfWeek}
                  hoveredDate={hoveredDate}
                  getHolidaysOfMonth={getHolidaysOfMonth}
                  getCountRangeDate={getCountRangeDate}
                  goToPreviousMonths={goToPreviousMonths}
                  goToNextMonths={goToNextMonths}
                />
              </DateRangePickerContext.Provider>
            </DateRangePickerWrapper>
          </OutSideWrapper>
        </Grow>
      </div>
    </ClickAwayListener>
  );
};

export default memo(inject('stores')(observer(DateRangePicker)));
