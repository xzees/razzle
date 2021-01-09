import React, { useState } from 'react';
import { Datepicker, START_DATE} from '@datepicker-react/styled';
import { th as locale } from 'date-fns/locale';
import { format } from 'date-fns';
import RootStore from 'stores';

const dateFormat = 'dd/MM/yyyy';

interface PropTypes {
  stores?: RootStore;
}

const useDatepicker = (props: PropTypes) => {

  const uiStore = props.stores!.HotelRootStore;
  const date = new Date();
  const enddate = new Date();
  const [open, setOpen] = React.useState(false);
  const [arrowLeft, setArrowLeft] = React.useState(false);
  const [arrowRight, setArrowRight] = React.useState(false);

  const handleDatesChange = (data: any) => {
    if(!data.endDate){
      data.endDate = data.startDate
    }
    if (!data.focusedInput) {
      handleClickRight(); 
      uiStore.setVDatepicker({...data, focusedInput: START_DATE});
    } else {
      handleClickLeft();
      uiStore.setVDatepicker(data);
    }
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleClickLeft = () => {
    setArrowLeft(true);
    setArrowRight(false);
    setOpen(true);
  };
  const handleClickRight = () => {
    setArrowLeft(false);
    setArrowRight(true);
    setOpen(true);
  };

  const outputDateFormat = (dateDate: Date) => {
    return ( (dateDate !== null) || (dateDate != 'Invalid Date') ) ? format(dateDate, dateFormat, { locale }) : 'Choose Date';
  };

  return {
    handleClickAway,
    handleClickLeft,
    outputDateFormat,
    startDate: uiStore.vDatepicker.startDate,
    handleClickRight,
    endDate: uiStore.vDatepicker.endDate,
    handleDatesChange,
    focusedInput: uiStore.vDatepicker.focusedInput,
    date,
    open,
    arrowLeft,
    arrowRight,
  };
};

export default useDatepicker;