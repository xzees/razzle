import _ from "lodash";
import APIRequest from "common/Manager/interface/APIRequest";
import { HTTPMethodEnum } from "common/Manager/Enumeration/HTTPMethodEnum";

class SearchCountryDestination implements APIRequest {
  method: HTTPMethodEnum = HTTPMethodEnum.POST;
  url: string;
  Body: any;

  constructor(Body: any) {
    this.Body = Body;
    this.url = `/sightseeing/api/activity/search `;
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

export default SearchCountryDestination;
