import RootStore from 'stores';
import DestinationStore from './Destination';

class PackageStore {
  rootStore: RootStore;

  DestinationStore: DestinationStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.DestinationStore = new DestinationStore(this);
  }
}

export default PackageStore;
