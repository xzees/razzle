import _ from 'lodash'
import APIRequestInterface from 'common/Manager/interface/APIRequest'
import ConstantManager from 'common/Manager/ConstantManager'
import { HTTPMethodEnum } from 'common/Manager/Enumeration/HTTPMethodEnum'
import APIConfig from 'common/Config/APIConfig';

class ListAPIV2Request implements APIRequestInterface {

  method: HTTPMethodEnum = HTTPMethodEnum.GET
  url: string = APIConfig.collective.tourListV2

  query: any

  constructor(query: { tourCode: string, pageSize: number, pageNo: number, sortBy: string, pageID: string }) {
    this.url = this.url + '?tour_code=' + query.tourCode + '&limit=' + query.pageSize + '&page=' + query.pageNo + '&sorting=' + query.sortBy + '&page_id=' + query.pageID
  }

  makeHeader() { }
  makeBody() { return {} }
  makeQuery() { }
}

export default ListAPIV2Request