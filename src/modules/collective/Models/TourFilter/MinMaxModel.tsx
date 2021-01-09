import _ from "lodash";

class MinMaxModel {
  minPrice: string;
  maxPrice: string;

  constructor(json: any) {
    this.minPrice = _.get(json, "minPrice");
    this.maxPrice = _.get(json, "maxPrice");
  }
}
export default MinMaxModel;