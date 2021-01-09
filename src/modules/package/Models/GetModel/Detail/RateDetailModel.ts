import _ from 'lodash';

class RateDetailModel {
  rateKey: string;
  operationDates: OperationDates[];
  minimumDuration: Duration;
  maximumDuration: Duration;
  totalAmount: TotalAmount;
  paxAmounts: PaxAmounts[];
  agencyCommission: AgencyCommission;
  constructor(json: any) {
    this.rateKey = _.get(json, 'rateKey');
    this.operationDates = _.get(json, 'operationDates');
    this.minimumDuration = _.get(json, 'minimumDuration');
    this.maximumDuration = _.get(json, 'maximumDuration');
    this.totalAmount = _.get(json, 'totalAmount');
    this.paxAmounts = _.get(json, 'paxAmounts');
    this.agencyCommission = _.get(json, 'agencyCommission');
  }
}
export default RateDetailModel;

class OperationDates {
  from: string;
  to: string;
  cancellationPolicies: CancellationPolicies[];
  constructor(json: any) {
    this.from = _.get(json, 'from');
    this.to = _.get(json, 'to');
    this.cancellationPolicies = _.get(json, 'cancellationPolicies');
  }
}

class CancellationPolicies {
  dateFrom: string;
  amount: number;
  constructor(json: any) {
    this.dateFrom = _.get(json, 'dateFrom');
    this.amount = _.get(json, 'amount');
  }
}

class Duration {
  value: number;
  metric: string;
  constructor(json: any) {
    this.value = _.get(json, 'value');
    this.metric = _.get(json, 'metric');
  }
}

class TotalAmount {
  amount: number;
  boxOfficeAmount: number;
  mandatoryApplyAmount: boolean;
  constructor(json: any) {
    this.amount = _.get(json, 'amount');
    this.boxOfficeAmount = _.get(json, 'boxOfficeAmount');
    this.mandatoryApplyAmount = _.get(json, 'mandatoryApplyAmount');
  }
}

class PaxAmounts {
  paxType: string;
  ageFrom: number;
  ageTo: number;
  amount: number;
  boxOfficeAmount: number;
  mandatoryApplyAmount: boolean;
  markupPrice: number;
  netPrice: number;
  netAmount: number;
  discountPrice: number;
  bigBonus: number;
  constructor(json: any) {
    this.paxType = _.get(json, 'paxType');
    this.ageFrom = _.get(json, 'ageFrom');
    this.ageTo = _.get(json, 'ageTo');
    this.amount = _.get(json, 'amount');
    this.boxOfficeAmount = _.get(json, 'boxOfficeAmount');
    this.mandatoryApplyAmount = _.get(json, 'mandatoryApplyAmount');
    this.markupPrice = _.get(json, 'markupPrice');
    this.netPrice = _.get(json, 'netPrice');
    this.netAmount = _.get(json, 'netAmount');
    this.discountPrice = _.get(json, 'discountPrice');
    this.bigBonus = _.get(json, 'bigBonus');
  }
}

class AgencyCommission {
  percentage: number;
  amount: number;
  vatAmount: number;
  constructor(json: any) {
    this.percentage = _.get(json, 'percentage');
    this.amount = _.get(json, 'amount');
    this.vatAmount = _.get(json, 'vatAmount');
  }
}
