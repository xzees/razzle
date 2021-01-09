import React from 'react';
import {  ClickAwayListener  } from '@material-ui/core';
import Input from './Input';
import Calendar from './Calendar';
import RootStore from 'stores';

export interface IDatepicker {
    handleClickAway: () => {};
    handleClickLeft: () => {};
    outputDateFormat: (data: Date) => {};
    handleClickRight: () => {};
    handleDatesChange: () => {};
    startDate: Date;
    endDate: Date;
    focusedInput: any;
    date: Date;
    Theme: any;
    open: boolean;
    arrowLeft: boolean;
    arrowRight: boolean;
    modelLabel: string;
    modelTitle: string;
    month?: number;
    isMobile?: boolean;
    stores?: RootStore;
    handleClose?: any;
}

const Component = (props: IDatepicker) => {
  return (
    <ClickAwayListener onClickAway={props.handleClickAway}>
      <div style={{...props.Theme.container}}>
        <Input {...props} />
        {props.open && <Calendar {...props} />}
      </div>
    </ClickAwayListener>
  );
};

export default Component;