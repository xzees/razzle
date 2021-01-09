import _ from 'lodash';

class ContractModel {
  incomingOffice: number;
  code: number;
  name: string;

  constructor(json: any) {
    this.incomingOffice = _.get(json, 'incomingOffice');
    this.code = _.get(json, 'code');
    this.name = _.get(json, 'name');
  }
}

export default ContractModel;
