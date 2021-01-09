import _ from 'lodash';
import CountryModel from './CountryModel';
import HotelGroupByCity from './HotelGroupByCity';

class CityModel {
    
    public country: CountryModel;
    public hotelGroupByCity: HotelGroupByCity;
    public latitude: number;
    public longitude: number;
    public tag: string;
    public timezone: string;

    constructor(json: any) {
        this.country = new CountryModel(_.get(json , 'country') || '');
        this.hotelGroupByCity = new HotelGroupByCity(_.get(json , 'hotelGroupByCity') || '');
        this.latitude = _.get(json , 'latitude');
        this.longitude = _.get(json , 'longitude');
        this.tag = _.get(json , 'tag');
        this.timezone = _.get(json , 'timezone');  
    }
}
export default CityModel;
