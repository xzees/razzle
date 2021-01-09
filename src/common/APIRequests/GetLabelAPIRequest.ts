import _ from 'lodash'
import { HTTPMethodEnum } from 'common/Manager/Enumeration/HTTPMethodEnum';
import APIRequest from 'common/Manager/interface/APIRequest';
import RootStore from 'stores';
class GetLabelAPIRequest implements APIRequest {
  method: HTTPMethodEnum = HTTPMethodEnum.GET
  url: string = '/labels'

  makeQuery() {
    return {
      language: RootStore.default.LocalizationStore.lang.toLowerCase()
    }
  }
  makeHeader(){
    return {}
  }
  makeBody() {
    return {}
  }
}

export default GetLabelAPIRequest 