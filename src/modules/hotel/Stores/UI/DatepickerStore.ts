import _ from 'lodash'
import { observable, computed, reaction, action } from 'mobx';
import qs from 'query-string'
import Datetime from 'utilities/Datetime';
import i18n from 'utilities/I18n';
import history from 'common/history';
import HotelRootStore from '../HotelRootStore';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/hotel/Manager/FontManager';

interface KeyValue {
  [key: string]: any;
}

class DatepickerStore {

  hotelrootstore:HotelRootStore
  
  @observable public UI: KeyValue = {
    Theme : {
      container: {
        width: '100%',
        height: '100%'
      },
      BoxLeft: {
        borderRight: '1px solid #c3c3c3',
        marginRight: '1rem'
      },
      DateRangeLeft: {
        marginRight: '0.5rem',
      },
      DateRangeRight: {
        marginRight: '0.5rem',
        marginLeft: '0.5rem'
      },
      themeDatePicker: {
        reactDatepicker: {
          datepickerZIndex: 99,
          fontFamily: 'DBHeaventRoundedv32',
          inputLabelBorderRadius: '5px',
          dateRangeBackground: '#fff',
          inputBorder: '1px solid #BCBEC0',
          inputLabelBorder: 'none',
          datepickerBorderRadius: '5px',
          dayHoverRangeBorderColor: 'black',
          dayFontSize: '20px',
          monthLabelFontSize: '20px',
          dayLabelFontSize: '20px',
          datepickerPadding: '10px;',
          colors: {
            primaryColor: ColorManager.default.primaryColor,
            silverCloud: ColorManager.default.secondaryColor,
            selectedDay: ColorManager.default.secondaryColor,
            selectedDayHover: ColorManager.default.secondaryColor,
            normalDayHover: '#e6e7e8',
          }
        },
        
      },
      themeDatePickerMobile: {
        reactDatepicker: {
          datepickerZIndex: 99,
          fontFamily: 'DBHeaventRoundedv32',
          inputLabelBorderRadius: '5px',
          dateRangeBackground: '#fff',
          inputBorder: '1px solid #BCBEC0',
          inputLabelBorder: 'none',
          datepickerBorderRadius: '5px',
          dayHoverRangeBorderColor: 'black',
          dayFontSize: '30px',
          monthLabelFontSize: '30px',
          dayLabelFontSize: '30px',
          datepickerPadding: '10px;',
          datepickerWidth: '100%',
          daySize: [50, 50]
        }
      },
    }
  }

  constructor(hotelrootstore: HotelRootStore) {
    this.hotelrootstore = hotelrootstore
  }

  @action
  public setDefault() {
    this.setUI({
      backgroundColor: ColorManager.default.white,
      colorDate: ColorManager.default.secondaryColor,
      borderDate: ColorManager.default.fourthColor,
      Theme: {
        container: {
          width: '100%',
          height: '100%'
        },
      }
    })
  }
  
  @action
  public setUI(value: any) {
    this.UI = _.merge(this.UI , value)
  }

  @computed
  get getUITheme(): any {
    return {...this.UI.Theme }
  }

}

export default DatepickerStore