import _ from 'lodash';
import DestinationModel from './DestinationModel';

class CountryModel {
  code: string;
  destinations: DestinationModel[];
  name: string;

  constructor(json: any) {
    this.code = _.get(json, 'code');
    this.destinations = _.get(json, 'destinations');
    this.name = _.get(json, 'name');
  }
}

export default CountryModel;
