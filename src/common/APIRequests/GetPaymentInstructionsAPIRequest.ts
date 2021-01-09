import _ from 'lodash'
import { HTTPMethodEnum } from 'common/Manager/Enumeration/HTTPMethodEnum';
import APIRequest from 'common/Manager/interface/APIRequest';
class GetPaymentInstructionsAPIRequest implements APIRequest {
  method: HTTPMethodEnum = HTTPMethodEnum.GET
  url: string = '/payment/instructions'

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

export default GetPaymentInstructionsAPIRequest