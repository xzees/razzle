import _ from 'lodash'
import { HTTPMethodEnum } from 'common/Manager/Enumeration/HTTPMethodEnum'
import APIRequestInterface from 'common/Manager/interface/APIRequest'

class GetDynamicRouteAPIRequest implements APIRequestInterface {

  method: HTTPMethodEnum = HTTPMethodEnum.GET
  url: string = ''
  query: any
  // baseUrl = 'https://www.thaitravelcenter.com/dynamicRoutes/route_data.json'
  baseUrl = 'https://www.thaitravelcenter.com/dynamicRoutes/module/route.php'

  constructor() {
    this.url = ''
  }

  makeHeader() { }
  makeBody() { return {} }
  makeQuery() { }
}

export default GetDynamicRouteAPIRequest