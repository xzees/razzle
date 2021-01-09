import _ from "lodash";

class airlineModel {
  langTH: string;
  langEN: string;
  value: string;
  total: number;

  constructor(json: any) {
    this.langTH = _.get(json, "langTH");
    this.langEN = _.get(json, "langEN");
    this.value = _.get(json, "value");
    this.total = _.get(json, "total");
  }
}
export default airlineModel;