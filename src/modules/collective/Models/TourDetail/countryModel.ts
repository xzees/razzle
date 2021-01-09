import _ from "lodash";

class countryModel {
  title: string;
  code: string;

  constructor(json: any) {
    this.title = _.get(json, "title");
    this.code = _.get(json, "code");
  }
}
export default countryModel;
