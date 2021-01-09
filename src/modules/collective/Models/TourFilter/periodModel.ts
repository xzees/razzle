import _ from "lodash";

class periodModel {
  month: string;
  year: string;
  value: string;
  total: string;
  isChecked: boolean;

  constructor(json: any) {
    this.month = _.get(json, "month");
    this.year = _.get(json, "year");
    this.value = _.get(json, "value");
    this.total = _.get(json, "total");
    this.isChecked = _.get(json, "isChecked");
  }
}
export default periodModel;