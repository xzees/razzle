import _ from 'lodash';

class index {
  amount: number;
  dateFrom: string;
  constructor(json: any) {
    this.amount = _.get(json, 'amount');
    this.dateFrom = _.get(json, 'dateFrom');
  }
}
export default index;
