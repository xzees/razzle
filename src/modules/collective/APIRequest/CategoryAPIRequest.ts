import _ from 'lodash'
import APIRequestInterface from 'common/Manager/interface/APIRequest'
import ConstantManager from 'common/Manager/ConstantManager'
import { HTTPMethodEnum } from 'common/Manager/Enumeration/HTTPMethodEnum'
import APIConfig from 'common/Config/APIConfig';

class CategoryAPIRequest implements APIRequestInterface {

  method: HTTPMethodEnum = HTTPMethodEnum.GET
  url: string = APIConfig.collective.tourCategory

  query: any

  constructor(query: { tourCode: string, pageID: string }) {
    this.url = this.url + '?tour_code=' + query.tourCode + '&page_id=' + query.pageID
  }

  makeHeader() { }
  makeBody() { return {} }
  makeQuery() { }
}

export default CategoryAPIRequest