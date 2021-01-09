import _ from 'lodash';

class GeolocationModel {
  latitude: string;
  longitude: string;

  constructor(json: any) {
    this.latitude = _.get(json, 'latitude');
    this.longitude = _.get(json, 'longitude');
  }
}

export default GeolocationModel;
