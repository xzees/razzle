import { observable, computed } from "mobx";
import RootStore from "stores";
import qs from 'query-string'
import routesConfig from 'routes/routes-config';
import NavigationManager from 'common/Manager/NavigationManager';

export type NavigationBarProduct = {
  title: string,
  route: string,
}

class NavigationStore {
  rootStore: RootStore

  @observable activePathIndex: number = 0
  @observable currentPath: string = ''
  @observable shouldShowNavigationBar: boolean = true

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    NavigationManager.NavigationStore = this
    this.shouldShowNavigationBar = RootStore.isServer ? false : (((qs.parse(window.location.search) || {}).webMode as string) || '').toLowerCase() != 'webview'
  }

  private get hasPath() {
    return this.activePathIndex > 0 && this.activePathIndex < routesConfig.length
  }

  @computed get getCurrentPath() {
    if (!this.hasPath) return '/'
    return routesConfig[this.activePathIndex].path
  }
}

export default NavigationStore