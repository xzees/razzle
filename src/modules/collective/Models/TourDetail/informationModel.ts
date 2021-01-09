import _ from "lodash";

class informationModel {
  order: number;
  dayNum: string;
  meal: string;
  title: string;
  detailHtml: string;

  constructor(json: any) {
    this.order = _.get(json, "order");
    this.dayNum = _.get(json, "dayNum");
    this.meal = _.get(json, "meal");
    this.title = _.get(json, "title");
    this.detailHtml = _.get(json, "detailHtml");
  }
}
export default informationModel;
