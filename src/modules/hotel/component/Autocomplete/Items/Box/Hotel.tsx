import React from 'react'
import {
    Boxs
} from 'modules/hotel/component/Autocomplete/Style'
import BoxCity from './City'
import i18n from 'utilities/I18n';

const renderNumberOfHotel = (option: any) => {
  return (
    <>
      <Boxs>{option.nr_hotel}</Boxs>
      <Boxs>{i18n.t('common.hotel')}</Boxs>
    </>
  );
};

const Hotel = (option: any) => {
  if ((option.type !== 'hotel') 
      && option.nr_hotel !== null 
      && ('nr_hotel' in option)) {
    return renderNumberOfHotel(option);
  } else {
    return <BoxCity />;
  }
};

export default Hotel;