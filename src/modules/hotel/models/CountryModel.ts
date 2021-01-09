import _ from 'lodash';

class CountryModel {
    public area: string;
    public countryCode: string;
    public latitude: number;
    public longitude: number;
    public tag: string;

    constructor(json: any) {
        this.area = _.get(json , 'area') || '';
        this.countryCode = _.get(json , 'country_code') || '';
        this.latitude = _.get(json , 'latitude') || '';
        this.longitude = _.get(json , 'longitude') || '';
        this.tag = _.get(json , 'tag');  
    }
}
export default CountryModel;
