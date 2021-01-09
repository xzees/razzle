import RootStore from "stores";
import { observable } from "mobx";
// import $ from 'jquery'

export type HTMLMetadata = {
  name: string;
  content: string;
};

class UIStore {
  isServer: boolean = typeof window == "undefined";

  rootStore: RootStore;

  @observable isLoading: boolean = false;
  @observable isPageLoading: boolean = false;
  @observable openModal: boolean = false;
  @observable openText: boolean = false;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  OnModalShow() {
    this.openModal = true;
  }

  OnModalClose() {
    this.openModal = false;
    this.openText = false;
  }

  OnTextClick() {
    this.openText = true;
  }
}

export default UIStore;
