import _ from 'lodash';

class DestinationModel {
  code?: string;
  countryName?: string;
  name: string;
  type: string;

  constructor(json: any) {
    this.code = _.get(json, 'code');
    this.countryName = _.get(json, 'countryName');
    this.name = _.get(json, 'name');
    this.type = _.get(json, 'type');
  }
}

export default DestinationModel;
