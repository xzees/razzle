import _ from 'lodash';
import CountryModel from '../CountryModel';
import GeolocationModel from './GeolocationModel';

class MeetingPointModel {
  type: string;
  geolocation: GeolocationModel;
  address: string;
  country: CountryModel;
  city: string;
  description: string;
  constructor(json: any) {
    this.type = _.get(json, 'type');
    this.geolocation = _.get(json, 'geolocation');
    this.address = _.get(json, 'address');
    this.country = _.get(json, 'country');
    this.city = _.get(json, 'city');
    this.description = _.get(json, 'description');
  }
}

export default MeetingPointModel;
