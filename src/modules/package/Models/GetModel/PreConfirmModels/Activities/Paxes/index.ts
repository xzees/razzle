import _ from 'lodash';

class index {
  age: number;
  customerId: string;
  mailing: number;
  name: string;
  passport: number;
  paxType: string;
  surname: number;
  constructor(json: any) {
    this.age = _.get(json, 'age');
    this.customerId = _.get(json, 'customerId');
    this.mailing = _.get(json, 'mailing');
    this.name = _.get(json, 'name');
    this.passport = _.get(json, 'passport');
    this.paxType = _.get(json, 'paxType');
    this.surname = _.get(json, 'surname');
  }
}
export default index;
