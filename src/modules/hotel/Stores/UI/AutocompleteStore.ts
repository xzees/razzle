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

class AutocompleteStore {

  public hotelrootstore: HotelRootStore;
  
  @observable public UI: KeyValue = {
    input : {
      div : {
        mobile : {
            paddingLeft: 25,
            paddingRight: 25,
            paddingBottom: 20,
            paddingTop: 20,
        },
        desktop: {
            position: 'relative', 
            width: '100%',
            borderRadius: '5px',
            // backgroundColor: ColorManager.default.primaryColor,
        }
      },
      TextField: {
        // backgroundColor: ColorManager.default.primaryColor,
        // labelColor: ColorManager.default.white
      },
      InputProps: {
        mobile : {
          style : {
            textColor: ColorManager.default.fourthColor,
            fontSize: FontManager.default.text,
          },
        },
        desktop: {
          style : {
            textColor: ColorManager.default.fourthColor,
            backgroundColor: ColorManager.default.white,
            fontSize: FontManager.default.text,
          },
        }
      }
    },
  };

  constructor(hotelrootstore: HotelRootStore) {
    this.hotelrootstore = hotelrootstore;
  }
  
  @action.bound
  public setUI(value: any) {
    this.UI = _.merge(this.UI , value);
  }

  @action.bound
  public setDefault() {
    this.setUI({
      input: {
        paddingTop: '12px',
        paddingBottom: '6px',
        paddingLeft: '16px',
        paddingRight: '16px',
        TextField: {
          backgroundColor: ColorManager.default.white,
          labelColor: ColorManager.default.secondaryColor,
          inputColor: ColorManager.default.secondaryColor
        },
        InputProps: {
          mobile : {
            style : {
              textColor: ColorManager.default.fourthColor,
              fontSize: FontManager.default.text,
            },
          },
          desktop: {
            style : {
              textColor: ColorManager.default.fourthColor,
              backgroundColor: ColorManager.default.white,
              fontSize: FontManager.default.text,
            },
          }
        }
      },
    });
  }

  public getUI() {
    return this.UI; 
  }

}

export default AutocompleteStore