import _ from "lodash";

class airlineModel {
  airlineCode: string;
  airlineName: string;
  airlineLogo: string;

  constructor(json: any) {
    this.airlineCode = _.get(json, "airlineCode");
    this.airlineName = _.get(json, "airlineName");
    this.airlineLogo = _.get(json, "airlineLogo");
  }
}
export default airlineModel;
