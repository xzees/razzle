import _ from 'lodash';

class AmountFromModel {
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

export default AmountFromModel;
