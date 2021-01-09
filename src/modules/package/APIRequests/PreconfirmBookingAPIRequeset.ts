import _ from 'lodash';
import APIRequest from 'common/Manager/interface/APIRequest';
import { HTTPMethodEnum } from 'common/Manager/Enumeration/HTTPMethodEnum';

class PreconfirmBookingAPIRequest implements APIRequest {
  method: HTTPMethodEnum = HTTPMethodEnum.POST;
  url: string;
  body: any;

  constructor(body: any) {
    this.body = body;
    this.url = 'http://localhost:7777/booking/preconfirm';
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

export default PreconfirmBookingAPIRequest;
