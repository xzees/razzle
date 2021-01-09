import _ from "lodash";

class discountModel {
  discountPrice: string;
  normalPrice: string;
  salePrice: number;
  type: string;

  constructor(json: any) {
    this.discountPrice = _.get(json, "discountPrice");
    this.normalPrice = _.get(json, "normalPrice");
    this.salePrice = _.get(json, "salePrice");
    this.type = _.get(json, "type");
  }
}
export default discountModel;
