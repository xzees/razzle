import _ from 'lodash';
// import DestinationModel from "modules/package/Models/GetModels/Detail/DestinationModel";

class index {
  address: string;
  city: string;
  country: Country;
  constructor(json: any) {
    this.address = _.get(json, 'address');
    this.city = _.get(json, 'city');
    this.country = _.get(json, 'country');
  }
}
export default index;

class Country {
  // destinations: DestinationModel[];
  constructor(json: any) {
    // this.destinations = _.get(json, "destinations");
  }
}
