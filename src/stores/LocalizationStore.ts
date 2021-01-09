import _ from 'lodash'
import { observable, action } from 'mobx';
import LanguageCodeEnum from 'common/enumerations/LanguageCodeEnum';
import StorageManager from 'common/Manager/StorageManager';
class LocalizationStore {

  // static default: LocalizationStore = new LocalizationStore()

  supportedLangs: string[] = [LanguageCodeEnum.EN, LanguageCodeEnum.TH]
  DEFAULT_LANG = LanguageCodeEnum.TH

  @observable lang: LanguageCodeEnum = this.DEFAULT_LANG

  constructor() { }

  @action.bound
  init() {
    const currentLang = StorageManager.default.getItem('lang') || this.DEFAULT_LANG
    if (this.supportedLangs.indexOf(currentLang.toUpperCase()) < 0) {
      this.setLanguage(this.DEFAULT_LANG)
    } else {
      this.setLanguage(currentLang.toUpperCase() as LanguageCodeEnum)
    }
  }

  get availableLanguages() {
    return _.compact(Object.values(LanguageCodeEnum).map(lang => {
      return LanguageCodeEnum.getIconImage(lang as LanguageCodeEnum)
    }))
  }

  @action.bound
  setLanguage(lang: LanguageCodeEnum) {
    this.lang = lang
    StorageManager.default.setItem('lang', lang)
  }
}

export default LocalizationStore