import _ from 'lodash';

class index {
  paxAmounts: PaxAmounts[];
  totalAmount: TotalAmount;
  constructor(json: any) {
    this.paxAmounts = _.get(json, 'paxAmounts');
    this.totalAmount = _.get(json, 'totalAmount');
  }
}
export default index;

class PaxAmounts {
  amount: number;
  paxType: string;
  constructor(json: any) {
    this.amount = _.get(json, 'amount');
    this.paxType = _.get(json, 'paxType');
  }
}

class TotalAmount {
  totalAmount: number;
  constructor(json: any) {
    this.totalAmount = _.get(json, 'totalAmount');
  }
}
