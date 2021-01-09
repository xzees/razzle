import _ from "lodash";

class Parampath {
  isExact: boolean;
  params: any;
  path: string;
  url: string;
  constructor(json: any) {
    this.isExact = _.get(json, "isExact");
    this.params = _.get(json, "params");
    this.path = _.get(json, "path");
    this.url = _.get(json, "url");
  }
}
export default Parampath;


