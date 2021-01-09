import _ from 'lodash';

class ProviderInformationModel {
  name: string;

  constructor(json: any) {
    this.name = _.get(json, 'name');
  }
}

export default ProviderInformationModel;
