import _ from "lodash";

class durationModel {
  value: number;
  total: number;

  constructor(json: any) {
    this.value = _.get(json, "value");
    this.total = _.get(json, "total");
  }
}
export default durationModel;