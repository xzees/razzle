import _ from 'lodash'
import APIManager from 'common/Manager/APIManager';
import DynamicRouteManager from 'common/Manager/DynamicRouteManager';

class InitializeManager {
  static default: InitializeManager = new InitializeManager()
  private stateMap: any
  json: any
  path: string = ''

  private constructor() { }

  rehydrate(json: any) {
    this.stateMap = json
    this.path = _.get(json, 'path')
    if (typeof window != 'undefined') {

      DynamicRouteManager.default.route = _.get(json, 'route')
    }
  }

  get() {
    return this.stateMap
  }
}

export default InitializeManager