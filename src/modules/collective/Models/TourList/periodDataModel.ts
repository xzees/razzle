import _ from "lodash";

class periodDataModel {
  periodID: string;
  periodCode: string;
  dateFrom: string;
  dateTo: string;
  full: string;

  constructor(json: any) {
    this.periodID = _.get(json, "periodID");
    this.periodCode = _.get(json, "periodCode");
    this.dateFrom = _.get(json, "dateFrom");
    this.dateTo = _.get(json, "dateTo");
    this.full = _.get(json, "full");
  }
}
export default periodDataModel;
