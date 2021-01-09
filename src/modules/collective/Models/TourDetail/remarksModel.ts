import _ from "lodash";
import remarkModelData from "./remarkModelData";

class remarksModel {
  include: remarkModelData[];
  exclude: remarkModelData[];
  payment: remarkModelData[];
  cancel: remarkModelData[];
  other: remarkModelData[];
  irresponsibility: remarkModelData[];
  recommend: remarkModelData[];
  visa: remarkModelData[];
  important: remarkModelData[];

  constructor(json: any) {
    this.include = _.get(json, "include");
    this.exclude = _.get(json, "exclude");
    this.payment = _.get(json, "payment");
    this.cancel = _.get(json, "cancel");
    this.other = _.get(json, "other");
    this.irresponsibility = _.get(json, "irresponsibility");
    this.recommend = _.get(json, "recommend");
    this.visa = _.get(json, "visa");
    this.important = _.get(json, "important");
  }
}
export default remarksModel;
