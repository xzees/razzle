import _ from 'lodash'
import APIRequestInterface from 'common/Manager/interface/APIRequest'
import ConstantManager from 'common/Manager/ConstantManager'
import { HTTPMethodEnum } from 'common/Manager/Enumeration/HTTPMethodEnum'
import APIConfig from 'common/Config/APIConfig';

class ListRelatedAPIRequest implements APIRequestInterface {

  method: HTTPMethodEnum = HTTPMethodEnum.GET
  url: string = APIConfig.collective.tourListRelated

  query: any

  constructor(query: { tourCode: string }) {
    this.url = this.url + '?tour_code=' + query.tourCode
  }

  makeHeader() { }
  makeBody() { return {} }
  makeQuery() { }
}

export default ListRelatedAPIRequest;