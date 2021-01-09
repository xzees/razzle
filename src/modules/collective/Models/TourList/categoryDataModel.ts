import _ from "lodash";

class categoryDataModel {
  path: string;
  nameTH: string;
  nameEN: string;

  constructor(json: any) {
    this.path = _.get(json, "path");
    this.nameTH = _.get(json, "nameTH");
    this.nameEN = _.get(json, "nameEN");
  }
}
export default categoryDataModel;
