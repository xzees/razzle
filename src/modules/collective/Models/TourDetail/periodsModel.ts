import _ from "lodash";
import periodGroupModel from "./periodGroupModel";
import periodDataModel from "./periodDataModel";

class periodsModel {
  periodGroup: periodGroupModel[];
  periodList: periodDataModel[];

  constructor(json: any) {
    this.periodGroup = _.get(json, "periodGroup");
    this.periodList = _.get(json, "periodList");
  }
}

export default periodsModel;
