import _ from "lodash";
import APIRequest from "common/Manager/interface/APIRequest";
import { HTTPMethodEnum } from "common/Manager/Enumeration/HTTPMethodEnum";
class StatusConfirm implements APIRequest {
  method: HTTPMethodEnum = HTTPMethodEnum.GET;
  url: string;
  code: string;

  constructor(code: string) {
    this.url = `/sightseeing/api/booking/detail/th/${code}`;
    this.code = code;
  }

  makeQuery() {
    return {};
  }
  makeHeader(){
    return {}
  }
  makeBody() {
    return {
      code: this.code,
    };
  }
}

export default StatusConfirm;
