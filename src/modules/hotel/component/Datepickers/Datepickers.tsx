import React, { useState } from 'react';
import LayoutSwitchers from './LayoutSwitchers';
import ColorManager from 'common/Manager/ColorManager';
import { inject, observer } from 'mobx-react';
import RootStore from 'stores';
import useDatepicker from 'modules/hotel/Hook/useDatepicker';
import i18n from 'utilities/I18n';

interface PropTypes {
  stores?: RootStore;
}

const Datepickers = inject('stores')(
  observer((props: PropTypes) => {

  const uiStore = props.stores!.HotelRootStore;
  const {
    handleClickAway,
    handleClickLeft,
    outputDateFormat,
    startDate,
    handleClickRight,
    endDate,
    handleDatesChange,
    focusedInput,
    date,
    open,
    arrowLeft,
    arrowRight,
  } = useDatepicker(props);
  
  const Themes = {...uiStore.DatepickerStore.UI.Theme}
  return (
    <div style={{...Themes.container}}>
      <LayoutSwitchers 
        handleClickAway={handleClickAway}
        handleClickLeft={handleClickLeft}
        outputDateFormat={outputDateFormat}
        startDate={uiStore.vDatepicker.startDate}
        handleClickRight={handleClickRight}
        endDate={uiStore.vDatepicker.endDate}
        handleDatesChange={handleDatesChange}
        focusedInput={uiStore.vDatepicker.focusedInput}
        date={date}
        Theme={Themes}
        open={open}
        arrowLeft={arrowLeft}
        arrowRight={arrowRight}
        modelLabel={i18n.t('hotel.components.datepicker.label')}
        modelTitle={i18n.t('hotel.components.datepicker.label')}
        stores={props.stores}
      />
    </div>
  );
}));

export default Datepickers;