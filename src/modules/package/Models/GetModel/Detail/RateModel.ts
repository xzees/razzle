import _ from 'lodash';
import RateDetailModel from './RateDetailModel';

class RateModel {
  rateCode: string;
  rateClass: string;
  rateDetails: RateDetailModel[];

  constructor(json: any) {
    this.rateCode = _.get(json, 'rateCode');
    this.rateClass = _.get(json, 'rateClass');
    this.rateDetails = _.get(json, 'rateDetails');
  }
}

export default RateModel;
