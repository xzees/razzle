import _ from 'lodash'
import { BrandEnum } from 'common/enumerations/BrandEnum'
import TravizgoThemeStore from 'stores/theme/TravizgoThemeStore'
import ThaiTravelCenterThemeStore from 'stores/theme/ThaiTravelCenterThemeStore'

class ThemeManager {
  static setupTheme(brand: BrandEnum) {
    /** Default as Travizgo Theme */
    let themeStore = new TravizgoThemeStore()
    if (brand == BrandEnum.TVG) {
      themeStore = new TravizgoThemeStore()
    } else if (brand == BrandEnum.TTC) {
      themeStore = new ThaiTravelCenterThemeStore()
    }
    themeStore.init()
    return themeStore
  }
}

export default ThemeManager