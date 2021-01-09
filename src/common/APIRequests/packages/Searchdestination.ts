import _ from "lodash";
import APIRequest from "common/Manager/interface/APIRequest";
import { HTTPMethodEnum } from "common/Manager/Enumeration/HTTPMethodEnum";

class Searchdestination implements APIRequest {
  method: HTTPMethodEnum = HTTPMethodEnum.GET;
  url: string;
  lang: string;
  destination: string;

  constructor(lang: string, destination: string) {
    this.lang = lang;
    this.destination = destination;
    this.url = `/sightseeing/api/activity/autoSuggest/${lang}/${destination}`;
  }

  makeQuery() {
    return {};
  }
  makeHeader(){
    return {}
  }
  makeBody() {
    return {
      lang: this.lang,
      destination: this.destination,
    };
  }
}

export default Searchdestination;
