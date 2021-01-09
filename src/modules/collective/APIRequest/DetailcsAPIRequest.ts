import _ from 'lodash'
import APIRequestInterface from 'common/Manager/interface/APIRequest'
import ConstantManager from 'common/Manager/ConstantManager'
import { HTTPMethodEnum } from 'common/Manager/Enumeration/HTTPMethodEnum'
import APIConfig from 'common/Config/APIConfig';

class DetailcsAPIRequest implements APIRequestInterface {

  method: HTTPMethodEnum = HTTPMethodEnum.GET
  url: string = APIConfig.collective.tourDetailDev

  query: any

  constructor(query: { id: number }) {
    this.url = this.url + '/' + query.id
  }

  makeHeader() { }
  makeBody() { return {} }
  makeQuery() { }
}

export default DetailcsAPIRequest