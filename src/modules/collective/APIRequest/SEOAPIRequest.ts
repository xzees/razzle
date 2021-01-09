import _ from 'lodash'
import APIRequestInterface from 'common/Manager/interface/APIRequest'
import ConstantManager from 'common/Manager/ConstantManager'
import { HTTPMethodEnum } from 'common/Manager/Enumeration/HTTPMethodEnum'
import APIConfig from 'common/Config/APIConfig';

class SEOAPIRequest implements APIRequestInterface {

  method: HTTPMethodEnum = HTTPMethodEnum.GET
  url: string = APIConfig.collective.tourSEO

  query: any

  constructor(query: { tourcode: string }) {
    this.url = this.url + '?tour_code=' + encodeURI(query.tourcode)
  }

  makeHeader() { }
  makeBody() { return {} }
  makeQuery() { }
}

export default SEOAPIRequest