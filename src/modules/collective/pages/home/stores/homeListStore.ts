import _ from 'lodash'
// import { observable, computed, reaction, action } from 'mobx';
// import qs from 'query-string'
// import Datetime from 'utilities/Datetime';
// import i18n from 'utilities/I18n';
// import history from 'common/history';
import HomeRootStore from '../../../Stores/CollectiveRootStore';

class homeListstore {
  homerootstore: HomeRootStore

  constructor(homerootstore: HomeRootStore) {
    this.homerootstore = homerootstore
  }
}

export default homeListstore