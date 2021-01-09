import IntlMessageFormat from "intl-messageformat";
import _ from "lodash";
import RootStore from "stores";
import LanguageCodeEnum from "common/enumerations/LanguageCodeEnum";
import HotelManager from 'modules/hotel/Manager/HotelManager';
import InitializeManager from "common/Manager/InitializeManager";
const mapping = (json: any, locale: string) => {
  return _.mapValues(json, (x: any) => x[locale.toLowerCase()] || "");
};

class I18n {
  locale!: LanguageCodeEnum;
  message: any = {};
  LocalizationData: any = {};

  constructor() {}

   localizationData() {
    return {
      ...require("modules/package/lang").default,
      ...require("modules/collective/lang").default,
      ...require("common/lang/index.ts").default,
      ...InitializeManager.default.get()?.data?.lang || {}
    };
  }

  init() {
    // console.log('init');
    this.locale = RootStore.default.LocalizationStore.lang;
    this.initFromJSON(this.localizationData());
  }

  t(key: string, opt = {}) {
    this.locale = RootStore.default.LocalizationStore.lang;

    const m = _.get(this.message, [this.locale, key]);
    if (!m) return "";
    const msg = new IntlMessageFormat(
      _.get(this.message, [this.locale, key]),
      this.locale
    );
    return msg.format(opt);
  }

  format(message: string, option = {}) {
    return new IntlMessageFormat(message, this.locale).format(option);
  }

  addLocalizationDataAndInit(json: any) {
    this.initFromJSON({ ...this.localizationData, ...json });
  }

  initFromJSON(json: any) {
    RootStore.default.LocalizationStore.supportedLangs.forEach((lang) => {
      this.message[lang] = mapping(json, lang);
    });
  }
}

const i18n = new I18n();

export default i18n;
