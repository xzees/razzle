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

class GuestStore {

  hotelrootstore:HotelRootStore
  
  @observable public UI: KeyValue = {
    Theme: {
      container: {
        width: '100%',
        height: '100%'
      },
      backgroundColor: ColorManager.default.white,
      labelColor: ColorManager.default.thirdColor,
      textColor: ColorManager.default.fourthColor,
    }
  }

  constructor(hotelrootstore: HotelRootStore) {
    this.hotelrootstore = hotelrootstore
  }
  
  @action.bound
  public setDefault() {
    this.setUI({
      Theme: {
        container: {
            width: '100%',
            height: '100%'
          },
        backgroundColor: ColorManager.default.white,
        textColor: ColorManager.default.secondaryColor,
        labelColor: ColorManager.default.secondaryColor
      }
    });
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

export default GuestStore