import ConfigurationManager from "common/Manager/ConfigurationManager";
import ScreenStore from "stores/ScreenStore";
import LocalizationUIStore from "stores/LocalizationUIStore";
import LocalizationStore from "stores/LocalizationStore";
import NavigationStore from "stores/Navigation/NavigationStore";
import ThemeStore from "stores/theme/ThemeStore";
import UIStore from "stores/UIStore";
import PackageRootStore from "modules/package/store";
import HotelRootStore from "modules/hotel/Stores/HotelRootStore";
import CollectiveRootStore from "modules/collective/Stores/CollectiveRootStore";
import i18n from "utilities/I18n";

class RootStore {
  static default: RootStore;

  static isServer: boolean = typeof window == "undefined";

  static create() {
    RootStore.default = new RootStore();
  }

  UIStore: UIStore;
  ScreenStore: ScreenStore;
  ScreenManager: ScreenStore;
  NavigationStore: NavigationStore;
  HotelRootStore: HotelRootStore;
  PackageRootStore: PackageRootStore;
  CollectiveRootStore: CollectiveRootStore;
  LocalizationStore: LocalizationStore;
  LocalizationUIStore: LocalizationUIStore;
  ThemeStore!: ThemeStore;

  private constructor() {
    this.UIStore = new UIStore(this);
    this.LocalizationStore = new LocalizationStore();
    this.LocalizationUIStore = new LocalizationUIStore(this.LocalizationStore);
    
    this.ScreenStore = new ScreenStore();
    this.ScreenManager = this.ScreenStore;
    this.PackageRootStore = new PackageRootStore(this);
    this.NavigationStore = new NavigationStore(this);
    this.HotelRootStore = new HotelRootStore(this);
    this.CollectiveRootStore = new CollectiveRootStore(this);
  }

  setThemeStore(themeStore: ThemeStore) {
    this.ThemeStore = themeStore;
  }

  async init() {
    this.LocalizationStore.init();
    
    // await i18n.hotellang();
    i18n.init();
    this.UIStore.isPageLoading = true;
    // await Promise.all([
    //   ConfigurationManager.default.fetch(),
    // ])
    this.UIStore.isPageLoading = false;
  }
}

export default RootStore;
