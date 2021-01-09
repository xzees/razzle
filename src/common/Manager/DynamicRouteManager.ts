import _ from 'lodash'
import APIManager from 'common/Manager/APIManager'
import GetDynamicRouteAPIRequest from 'modules/collective/APIRequest/GetDynamicRouteAPIRequest'
class DynamicRouteManager {

  route: any

  static default: DynamicRouteManager = new DynamicRouteManager()
  isFetched: boolean = false

  runFetchInterval() {
    setInterval(async () => {
      await this.fetch()
    }, 60000)
  }

  async fetch() {

    try {
      const apiRequest = new GetDynamicRouteAPIRequest()
      const response = await APIManager.default.fetch(apiRequest)
      this.route = response.data
      this.isFetched = true
    } catch (error) { }

  }

  private constructor() { }
}

export default DynamicRouteManager