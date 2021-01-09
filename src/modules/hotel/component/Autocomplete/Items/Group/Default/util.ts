import i18n from 'utilities/I18n';
import _ from 'lodash'
import AutocompleteModel from 'modules/hotel/models/AutocompleteModel'

export const getLabel = (option: AutocompleteModel) => {
    if (Object.keys(option).length > 0) {
      
      const getType = _.get(option, 'type')
      const getCity = _.get(option, 'city')
      const getCountry = _.get(option, 'country')

      if(getType == 'hotel' && getCity) {
          return (option.city.tag != undefined ? i18n.t('hotel.components.autocomplete.group.utils.town')+ ' : ' + option.city.tag + (option.city!.country!.tag ? ', ' + option.city!.country!.tag : '') 
          : '')        
      }

      if(getType == 'city' && getCountry) {
        return (option.country.tag != undefined 
          ? i18n.t('hotel.components.autocomplete.group.utils.town') + ' : ' + option.tagLabel 
        : '')
      }

    }

    return '';
};

export const numberOfHotel = (option: any) => {
    if (option.type === 'hotel') {
      return 1; 
    }
    if ( 
      'nr_hotel' in option && 
      option.nr_hotel > 0 && 
      option.nr_hotel !== undefined 
    ) {
      return (option.nr_hotel as number).toLocaleString();
    } else {
      return ;
    }
};
  
export const textAfterNumberOfHotel = (option: any) => {
    if (
      ('nr_hotel' in option) &&
      option.nr_hotel > 0 && 
      option.nr_hotel !== undefined &&
      ('nr_hotel' in option)
    ) {
        return i18n.t('hotel.components.autocomplete.group.utils.room');
    } 
    if (option.type === 'hotel') {
      return i18n.t('hotel.components.autocomplete.group.utils.room');
    }
    return '';
};