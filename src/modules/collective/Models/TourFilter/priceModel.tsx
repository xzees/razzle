import _ from "lodash";
import priceRangeModel from "./priceRangeModel";
import MinMaxModel from "./MinMaxModel";

class priceModel {
  priceRange: priceRangeModel[];
  MinMax: MinMaxModel;

  constructor(json: any) {
    this.priceRange = _.get(json, "priceRange");
    this.MinMax = _.get(json, "MinMax");
  }
}
export default priceModel;