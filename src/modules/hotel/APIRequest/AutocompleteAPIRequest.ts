import _ from 'lodash'
import APIRequestInterface  from 'common/Manager/interface/APIRequest'
import { HTTPMethodEnum } from 'common/Manager/Enumeration/HTTPMethodEnum'

interface Iautocomplete {
  text: string;
  langForApi: string;
}
class AutocompleteAPIRequest implements APIRequestInterface {

  public method: HTTPMethodEnum = HTTPMethodEnum.GET;
  
  public url: string;

  public query: any;

  constructor(query: Iautocomplete, endpoint: string) {
    this.url = endpoint + '/' + query.text + '/' + query.langForApi;
  }

  public makeBody() {
    return {};
  }
  public makeHeader() {
    return {};
  }
  public makeQuery() {
    return {};
  }
}

export default AutocompleteAPIRequest;