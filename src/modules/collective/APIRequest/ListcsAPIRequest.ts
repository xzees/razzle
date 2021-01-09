import _ from 'lodash'
import APIRequestInterface from 'common/Manager/interface/APIRequest'
import ConstantManager from 'common/Manager/ConstantManager'
import { HTTPMethodEnum } from 'common/Manager/Enumeration/HTTPMethodEnum'
import APIConfig from 'common/Config/APIConfig';

class ListcsAPIRequest implements APIRequestInterface {

  method: HTTPMethodEnum = HTTPMethodEnum.GET
  url: string = APIConfig.collective.tourListDev

  query: any

  constructor(query: { tourCode: string, pageSize: number, pageNo: number, sortBy: string }) {
    this.url = this.url + '/' + query.tourCode + '/' + query.pageSize + '/' + query.pageNo + '/' + query.sortBy
  }

  makeHeader() { }
  makeBody() { return {} }
  makeQuery() { }
}

export default ListcsAPIRequest