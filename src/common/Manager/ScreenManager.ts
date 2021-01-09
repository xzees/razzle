import _ from 'lodash'
import Scroll from 'react-scroll'
import { observable, computed, reaction } from 'mobx';
import RootStore from 'stores';
import InitializeManager from './InitializeManager';
const scroller = Scroll.scroller
class ScreenManager {
  @observable currentWidth: number = 0
  static default: ScreenManager = new ScreenManager()

  constructor() {
    /** TODO: Remove this when every component uses isMobile from mobx store. 
     * Set current width to another instance */
    reaction(() => this.currentWidth, currentWidth => {
      ScreenManager.default.currentWidth = currentWidth
    })
  }

  @computed
  get isMobile(): boolean {
    return this.currentWidth < 768
  }

  scrollTo(elementName: string, offset: number = 0, delay: number = 0) {
    if (RootStore.isServer) return

    InitializeManager.default.rehydrate(window.__STATE)
    setTimeout(() => {
      scroller.scrollTo(elementName, {
        duration: 700,
        // delay,
        smooth: 'easeInOutCubic',
        offset: -(offset + 0), // 56 is navigation bar's height
      })
    }, delay);
  }
}

export default ScreenManager