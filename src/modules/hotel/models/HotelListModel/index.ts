import _ from 'lodash';
import HotelListModelInterface from 'modules/hotel/interface/Models/HotelListModelInterface';
import HotelPhotoModel from 'modules/hotel/models/HotelPhotoModel';
import LocationModel from 'modules/hotel/models/LocationModel';
import BlockDetailModel from 'modules/hotel/models/BlockDetailModel';

class HotelListModel implements HotelListModelInterface {

    public address: string;
    public cityName: string;
    public blockDetail: BlockDetailModel;
    public class: number;
    public country: string;
    public creditcardRequired: boolean;
    public hotelDescription: string;
    public hotelId: string;
    public hotelMainPhoto: HotelPhotoModel;
    public hotelTypeId: number;
    public identifier: string;
    public location: LocationModel;
    public name: string;
    public price: number;

    constructor(json: any) {
        this.address = _.get(json, 'address');
        this.cityName = _.get(json, 'city_name');
        this.class = _.get(json, 'class');
        this.country = _.get(json, 'country');
        this.creditcardRequired = _.get(json, 'creditcard_required');
        this.hotelDescription = _.get(json, 'hotel_description');
        this.hotelId = _.get(json, 'hotel_id');
        this.hotelMainPhoto = new HotelPhotoModel(_.get(json , 'hotel_main_photo'));
        this.blockDetail = new BlockDetailModel(_.get(json , 'blockDetail'));
        this.hotelTypeId = _.get(json, 'hotel_type_id');
        this.identifier = _.get(json, 'identifier');
        this.location =  new LocationModel(_.get(json, 'location'));
        this.name = _.get(json, 'name');
        this.price = _.get(json, 'price');
    }
    
}
export default HotelListModel;
