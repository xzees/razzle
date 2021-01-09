import APIRequestInterface from 'common/Manager/interface/APIRequest';
import { HTTPMethodEnum } from 'common/Manager/Enumeration/HTTPMethodEnum';

class PopularCityAPIRequest implements APIRequestInterface {

  public method: HTTPMethodEnum = HTTPMethodEnum.GET;
  
  public url: string;

  constructor(endpoint: string) {
    this.url = endpoint;
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

export default PopularCityAPIRequest;