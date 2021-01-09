import _ from 'lodash'
import { observable, computed, reaction } from 'mobx';
import ScreenManager from 'common/Manager/ScreenManager';
class ScreenStore {
  @observable currentWidth: number = 0;

  @observable botType: 'desktop' | 'mobile' | 'not-a-bot' = 'not-a-bot';

  constructor() {
    /** TODO: Remove this when every component uses isMobile from mobx store. 
     * Set current width to another instance */
    reaction(() => this.currentWidth, currentWidth => {
      ScreenManager.default.currentWidth = currentWidth;
    })
  }

  @computed
  get isMobile(): boolean {
    return this.currentWidth < 600;
  }
  get isMobileHeader(): boolean {
    return this.currentWidth < 1280;
  }
}

export default ScreenStore