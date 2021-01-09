import _ from 'lodash'
import APIRequestInterface from 'common/Manager/interface/APIRequest'
import ConstantManager from 'common/Manager/ConstantManager'
import { HTTPMethodEnum } from 'common/Manager/Enumeration/HTTPMethodEnum'
import APIConfig from 'common/Config/APIConfig';

class DetailAPIRequest implements APIRequestInterface {

  method: HTTPMethodEnum = HTTPMethodEnum.GET
  url: string = APIConfig.collective.tourDetail

  query: any

  constructor(query: { id: number }) {
    this.url = this.url + '?id=' + query.id
  }

  makeHeader() { }
  makeBody() { return {} }
  makeQuery() { }
}

export default DetailAPIRequest