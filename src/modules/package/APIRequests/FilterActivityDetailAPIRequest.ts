import APIRequest from 'common/Manager/interface/APIRequest';
import { HTTPMethodEnum } from 'common/Manager/Enumeration/HTTPMethodEnum';

class FilterActivityDetailAPIRequest implements APIRequest {
  method: HTTPMethodEnum = HTTPMethodEnum.POST;
  url: string;
  body: any;

  constructor(body: any, swicth: string = '') {
    this.body = body;
    if (swicth === 'full')
      this.url = 'http://localhost:7777/activity/detail/full';
    else this.url = 'http://localhost:7777/activity/detail';
  }

  makeQuery() {
    return {};
  }
  makeHeader() {
    return {};
  }
  makeBody() {
    return this.body;
  }
}

export default FilterActivityDetailAPIRequest;
