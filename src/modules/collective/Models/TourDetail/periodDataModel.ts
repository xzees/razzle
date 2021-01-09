import _ from "lodash";

class periodDataModel {
  periodID: string;
  periodCode: string;
  dateFrom: string;
  dateTo: string;
  duration: number;
  full: string;
  dcUpdatePrice: number;
  dcHotPrice: number;
  price_1ATwin_HT: number;
  price_1ASingle_HT: number;
  price_3A_HT: number;
  price_1A1C_HT: number;
  price_2A1Cbed_HT: number;
  price_2A1CNobed_HT: number;
  price_1ATwin_NT: number;
  price_1ASingle_NT: number;
  price_3A_NT: number;
  price_1A1C_NT: number;
  price_2A1Cbed_NT: number;
  price_2A1CNobed_NT: number;

  constructor(json: any) {
    this.periodID = _.get(json, "periodID");
    this.periodCode = _.get(json, "periodCode");
    this.dateFrom = _.get(json, "dateFrom");
    this.dateTo = _.get(json, "dateTo");
    this.duration = _.get(json, "duration");
    this.full = _.get(json, "full");
    this.dcUpdatePrice = _.get(json, "dcUpdatePrice");
    this.dcHotPrice = _.get(json, "dcHotPrice");
    this.price_1ATwin_HT = _.get(json, "price_1ATwin_HT");
    this.price_1ASingle_HT = _.get(json, "price_1ASingle_HT");
    this.price_3A_HT = _.get(json, "price_3A_HT");
    this.price_1A1C_HT = _.get(json, "price_1A1C_HT");
    this.price_2A1Cbed_HT = _.get(json, "price_2A1Cbed_HT");
    this.price_2A1CNobed_HT = _.get(json, "price_2A1CNobed_HT");
    this.price_1ATwin_NT = _.get(json, "price_1ATwin_NT");
    this.price_1ASingle_NT = _.get(json, "price_1ASingle_NT");
    this.price_3A_NT = _.get(json, "price_3A_NT");
    this.price_1A1C_NT = _.get(json, "price_1A1C_NT");
    this.price_2A1Cbed_NT = _.get(json, "price_2A1Cbed_NT");
    this.price_2A1CNobed_NT = _.get(json, "price_2A1CNobed_NT");
  }
}
export default periodDataModel;
