import _ from 'lodash';

class AmountFromModel {
  ageFrom: number;
  ageTo: number;
  amount: number;
  boxOfficeAmount: number;
  mandatoryApplyAmount: number;
  paxType: number;

  constructor(json: any) {
    this.ageFrom = _.get(json, 'ageFrom');
    this.ageTo = _.get(json, 'ageTo');
    this.amount = _.get(json, 'amount');
    this.boxOfficeAmount = _.get(json, 'boxOfficeAmount');
    this.mandatoryApplyAmount = _.get(json, 'mandatoryApplyAmount');
    this.paxType = _.get(json, 'paxType');
  }
}

export default AmountFromModel;
