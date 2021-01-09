import _ from 'lodash';

class IncludedModel {
  description: string;
  featureType: string;

  constructor(json: any) {
    this.description = _.get(json, 'description');
    this.featureType = _.get(json, 'featureType');
  }
}

export default IncludedModel;
