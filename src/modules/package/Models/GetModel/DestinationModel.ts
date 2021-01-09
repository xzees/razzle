import _ from 'lodash';

class DestinationModel {
  code: string;
  name: string;

  constructor(json: any) {
    this.code = _.get(json, 'code');
    this.name = _.get(json, 'name');
  }
}

export default DestinationModel;
