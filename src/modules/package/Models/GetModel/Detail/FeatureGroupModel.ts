import _ from 'lodash';
import IncludedModel from './IncludedModel';

class FeatureGroupModel {
  groupCode: string;
  included: IncludedModel[];

  constructor(json: any) {
    this.groupCode = _.get(json, 'groupCode');
    this.included = _.get(json, 'included');
  }
}

export default FeatureGroupModel;
