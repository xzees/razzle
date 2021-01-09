import _ from 'lodash';

class OperationDayModels {
  code: string;
  name: string;

  constructor(json: any) {
    this.code = _.get(json, 'code');
    this.name = _.get(json, 'name');
  }
}

export default OperationDayModels;
