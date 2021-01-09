import _ from 'lodash';
import LanguagesModel from 'modules/hotel/models/LanguagesModel';
import HotelGroupByCity from 'modules/hotel/models/HotelGroupByCity';
import CountryModel from 'modules/hotel/models/CountryModel';
import CityModel from 'modules/hotel/models/CityModel';

class index {
    public city: CityModel;
    public languages: LanguagesModel;
    public latitude: number;
    public longitude: number;
    public tag: string;
    public tagLabel: string;
    public type: string;
    public hotel_id: string;
    public nr_hotel: number;
    public country: CountryModel;
    public hotelGroupByCity: HotelGroupByCity;

    constructor(json: any) {
        this.city = new CityModel(_.get(json, 'city') || '');
        this.country = new CountryModel(_.get(json , 'country') || '');
        this.languages = new LanguagesModel(_.get(json, 'languages') || '');
        this.latitude = _.get(json, 'latitude');
        this.longitude = _.get(json, 'longitude');
        this.tag = _.get(json, 'tag');
        this.tagLabel = _.get(json, 'tagLabel');
        this.type = _.get(json, 'type');
        this.hotel_id = _.get(json, 'hotel_id');
        this.nr_hotel = _.get(json, 'nr_hotels')
        this.hotelGroupByCity = new HotelGroupByCity(_.get(json , 'hotelGroupByCity') || '');

    }
}
export default index;
