import _ from "lodash";
import periodDataModel from "./periodDataModel";

class periodsModel {
  month: string;
  year: string;
  periodData: periodDataModel[];

  constructor(json: any) {
    this.month = _.get(json, "month");
    this.year = _.get(json, "year");
    this.periodData = _.get(json, "periodData");
  }
}
export default periodsModel;
