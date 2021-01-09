import _ from "lodash";
import APIRequest from "common/Manager/interface/APIRequest";
import { HTTPMethodEnum } from "common/Manager/Enumeration/HTTPMethodEnum";
import PreconfirmModel from "modules/package/Models/PostModel/PreconfirmModel";
class Preconfirm implements APIRequest {
  method: HTTPMethodEnum = HTTPMethodEnum.POST;
  url: string;
  Body: PreconfirmModel;

  constructor(Body: PreconfirmModel) {
    this.url = `/sightseeing/api/booking/preconfirm`;
    this.Body = Body;
  }

  makeQuery() {
    return {};
  }
  makeHeader(){
    return {}
  }
  makeBody() {
    return {
      Body: this.Body,
    };
  }
}

export default Preconfirm;
