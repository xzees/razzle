import _ from 'lodash'
import APIRequestInterface from 'common/Manager/interface/APIRequest'
import ConstantManager from 'common/Manager/ConstantManager'
import { HTTPMethodEnum } from 'common/Manager/Enumeration/HTTPMethodEnum'
import APIConfig from 'common/Config/APIConfig';

class ListAPIRequest implements APIRequestInterface {

  method: HTTPMethodEnum = HTTPMethodEnum.GET
  url: string = APIConfig.collective.tourList

  query: any

  constructor(query: { tourCode: string, pageSize: number, pageNo: number, sortBy: string }) {
    this.url = this.url + '?tour_code=' + query.tourCode + '&limit=' + query.pageSize + '&page=' + query.pageNo + '&sorting=' + query.sortBy
  }

  makeHeader() { }
  makeBody() { return {} }
  makeQuery() { }
}

export default ListAPIRequest