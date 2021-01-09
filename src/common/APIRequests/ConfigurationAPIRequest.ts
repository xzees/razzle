import _ from 'lodash'
import { HTTPMethodEnum } from 'common/Manager/Enumeration/HTTPMethodEnum';
import APIRequest from 'common/Manager/interface/APIRequest';
class ConfigurationAPIRequest implements APIRequest {
  method: HTTPMethodEnum = HTTPMethodEnum.GET
  url: string = '/configurations'

  makeQuery() {
    return {}
  }
  makeHeader(){
    return {}
  }
  makeBody() {
    return {}
  }
}

export default ConfigurationAPIRequest 