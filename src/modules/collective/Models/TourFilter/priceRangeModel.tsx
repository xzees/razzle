import _ from "lodash";

class priceRangeModel {
  text: string;
  value: string;
  total: string;

  constructor(json: any) {
    this.text = _.get(json, "text");
    this.value = _.get(json, "value");
    this.total = _.get(json, "total");
  }
}
export default priceRangeModel;