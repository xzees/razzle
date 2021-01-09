import _ from 'lodash';

class LocationModel {
    public latitude: number;
    public longitude: number;
    
    constructor(json: any) {
        this.latitude = _.get(json, 'latitude');
        this.longitude = _.get(json, 'longitude');
    }
}

export default LocationModel;