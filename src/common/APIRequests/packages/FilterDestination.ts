import _ from "lodash";
import APIRequest from "common/Manager/interface/APIRequest";
import { HTTPMethodEnum } from "common/Manager/Enumeration/HTTPMethodEnum";

class Searchdestination implements APIRequest {
  method: HTTPMethodEnum = HTTPMethodEnum.POST;
  url: string;
  code: string;
  from: string;
  to: string;
  language: string;
  paxes: any[];
  swicth: string;

  constructor(
    code: string,
    from: string,
    to: string,
    language: string,
    paxes: any[],
    swicth: string
  ) {
    this.code = code;
    this.from = from;
    this.to = to;
    this.language = language;
    this.paxes = paxes;
    this.swicth = swicth;
    if (swicth === "full") {
      this.url = `/sightseeing/api/activity/detail/full`;
    } else {
      this.url = `/sightseeing/api/activity/detail`;
    }
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
      from: this.from,
      to: this.to,
      language: this.language,
      paxes: this.paxes,
    };
  }
}

export default Searchdestination;
