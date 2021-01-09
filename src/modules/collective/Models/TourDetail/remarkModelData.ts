import _ from "lodash";

class remarkModelData {
  order: number;
  detail: string;

  constructor(json: any) {
    this.order = _.get(json, "order");
    this.detail = _.get(json, "detail");
  }
}
export default remarkModelData;
