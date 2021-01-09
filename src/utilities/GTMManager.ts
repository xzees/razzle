import _ from 'lodash'
import TagManager from 'react-gtm-module'
import RootStore from 'stores'
class GTMManager {
  private initialized: boolean = false
  static default: GTMManager = new GTMManager()

  private constructor() { }

  init() {
    if (this.initialized) return
    TagManager.initialize({
      gtmId: RootStore.default.ThemeStore.analytics.gtmId
    })
    this.initialized = true
  }

}

export default GTMManager