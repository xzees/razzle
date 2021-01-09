import HotelPhotoModel from 'modules/hotel/models/HotelPhotoModel';
import LocationModel from 'modules/hotel/models/LocationModel';
import BlockDetailModel from 'modules/hotel/models/BlockDetailModel';

export default interface HotelListModelInterface {
    address: string;
    cityName: string;
    blockDetail: BlockDetailModel;
    class: number;
    country: string;
    creditcardRequired: boolean;
    hotelDescription: string;
    hotelId: string;
    hotelMainPhoto: HotelPhotoModel;
    hotelTypeId: number;
    identifier: string;
    location: LocationModel;
    name: string;
    price: number;
}