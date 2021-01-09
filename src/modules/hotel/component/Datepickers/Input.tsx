import React, { useState } from 'react';
import { DateRange } from '@material-ui/icons';
import {  Box  } from '@material-ui/core';
import Style from './Style';
import { IDatepicker } from './Component';
import { 
  formatMYForAutocomplete, 
  getDayTh, 
  getDate
} from 'common/Manager/Helper';
import ColorManager from 'common/Manager/ColorManager';
import _ from 'lodash';
import i18n from 'utilities/I18n';

const Input = (props: IDatepicker) => {
    const { 
        open,
        Theme,
        handleClickLeft,
        handleClickRight,
        outputDateFormat,
        startDate,
        endDate
    } = props;
    
    const backgroundColor = open ? undefined : props.stores?.HotelRootStore.DatepickerStore.UI.backgroundColor
    const colorDate = open ? undefined : props.stores?.HotelRootStore.DatepickerStore.UI.colorDate
    const borderDate = open ? undefined : props.stores?.HotelRootStore.DatepickerStore.UI.borderDate
    const displayStartDate = getDayTh(startDate.getDay()) + '.' + ' ' + getDate(startDate) + ' ' + formatMYForAutocomplete(startDate);
    const displayEndDate = getDayTh(endDate.getDay()) + '.' + ' ' + getDate(endDate) + ' ' + formatMYForAutocomplete(endDate);
    const borderRight = colorDate ? {
      borderRight :  '1px solid '+ borderDate,
    }: {}
    const setNewTheme = _.merge({...Theme.BoxLeft} , borderRight)
    return (
        <Style.Box  
          backgroundcolor={backgroundColor}
        >  
          <Box 
            style={{
              ...setNewTheme,
            }}
            onClick={handleClickLeft}
            flex={'auto'}
          >
            <Style.BoxLabels>{i18n.t('hotel.components.datepicker.input.lblchkin')}</Style.BoxLabels>
            <Style.BoxLabelBottom
              colordate={colorDate}
            >{displayStartDate}</Style.BoxLabelBottom>
          </Box>  
          <Box flex={'auto'} onClick={handleClickRight} >
            <Style.BoxLabels>{i18n.t('hotel.components.datepicker.input.lblchkout')}</Style.BoxLabels>
            <Style.BoxLabelBottom
              colordate={colorDate}
            >{displayEndDate}</Style.BoxLabelBottom>
          </Box>  
        </Style.Box>
    );
};

export default Input;