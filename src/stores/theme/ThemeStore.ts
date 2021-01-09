import _ from 'lodash'
import LocalizationStore from 'stores/LocalizationStore'
import RootStore from 'stores'
import LanguageCodeEnum from 'common/enumerations/LanguageCodeEnum'
import ColorManager from 'common/Manager/ColorManager'

type Translation = { [LanguageCodeEnum.TH]: string, [LanguageCodeEnum.EN]: string }

abstract class ThemeStore {

  abstract analytics: {
    gtmId: string
  }

  abstract brandInformation: {
    companyName: Translation,
    brandName: Translation,
    companyAddress: Translation,
    taxID: string,
    travelLicense: string,
    IATA_ID: string,
    phoneNumber: string,
    fax: string,
    email: string,
    downloadtitle:string
    playStoreUrl: string,
    playStoreTitle: string,
    appStoreUrl: string,
    appStoreTitle: string,
    socialMedia: {
      facebook: string,
      twitter: string,
      instagram: string,
      youtube: string,
      flickr: string,
      tumblr: string,
      line: string
    }
   
  }

  abstract _termAndConditionUrl: Translation
  abstract _privacyUrl: Translation
  abstract baseWebsite: string
  abstract primaryColor: string
  abstract secondaryColor: string

  init() {
    ColorManager.default.primaryColor = this.primaryColor
    ColorManager.default.secondaryColor = this.secondaryColor
  }

  get brandName(): string {
    return this.brandInformation.brandName[RootStore.default.LocalizationStore.lang]
  }

  get companyName(): string {
    return this.brandInformation.companyName[RootStore.default.LocalizationStore.lang]
  }

  get companyAddress(): string {
    return this.brandInformation.companyAddress[RootStore.default.LocalizationStore.lang]
  }

  get termAndConditionUrl(): string {
    return this._termAndConditionUrl[RootStore.default.LocalizationStore.lang]
  }

  get privacyUrl(): string {
    return this._privacyUrl[RootStore.default.LocalizationStore.lang]
  }

}

export default ThemeStore