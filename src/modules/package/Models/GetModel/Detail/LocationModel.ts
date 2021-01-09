import _ from 'lodash';

class LocationModel {
  startingPoints: any[];

  constructor(json: any) {
    this.startingPoints = _.get(json, 'startingPoints');
  }
}

export default LocationModel;
