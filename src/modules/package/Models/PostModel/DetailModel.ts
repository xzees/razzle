import _ from 'lodash';

class DetailModel {
  code: string;
  from: string;
  to: string;
  language: string;
  paxes: Paxes[];

  constructor(json: any) {
    this.code = _.get(json, 'code');
    this.from = _.get(json, 'from');
    this.to = _.get(json, 'to');
    this.language = _.get(json, 'language');
    this.paxes = _.get(json, 'paxes');
  }
}

export default DetailModel;

class Paxes {
  age: number;

  constructor(json: any) {
    this.age = _.get(json, 'get');
  }
}
