import development from './development'
import production from './production'
import RootStore from 'stores';
import AppAPIConfig from 'common/Config/APIConfig'
import { TransactionChannelEnum } from 'common/Manager/Enumeration/TransactionChannelEnum';
import { appVersion } from 'utilities/VersionUtil';

const env = {
  development,
  production
}


class APIConfig {
  static default: APIConfig = new APIConfig()

  private constructor() { }

  getConfigs() {
    return AppAPIConfig.apiservice
  }

  getBaseUrl(): string {
    return this.getConfigs()
  }

  getRequestHeaders() {
    // const configs = env.development
    return {
      // channel: configs.channel,
      // app_version: `${appVersion.version}-${appVersion.build}`,
      // lang: !!RootStore ? RootStore.default.LocalizationStore.lang.toLocaleLowerCase() : 'TH',
      // transaction_channel: !!RootStore ? (RootStore.default.ScreenManager.isMobile ? TransactionChannelEnum.MOBILE_WEB : TransactionChannelEnum.DESKTOP_WEB) : TransactionChannelEnum.DESKTOP_WEB
    }
  }
}

export default APIConfig
