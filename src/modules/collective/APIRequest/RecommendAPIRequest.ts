import _ from 'lodash'
import APIRequestInterface from 'common/Manager/interface/APIRequest'
import ConstantManager from 'common/Manager/ConstantManager'
import { HTTPMethodEnum } from 'common/Manager/Enumeration/HTTPMethodEnum'
import APIConfig from 'common/Config/APIConfig';

class RecommendAPIRequest implements APIRequestInterface {

  method: HTTPMethodEnum = HTTPMethodEnum.GET
  url: string = APIConfig.collective.tourRecommend

  query: any

  constructor(query: { id: number }) {
    this.url = this.url + '?id=' + query.id
  }

  makeHeader() { }
  makeBody() { return {} }
  makeQuery() { }
}

export default RecommendAPIRequest