import _ from 'lodash';
import HotelFacilitiesModel from 'modules/hotel/models/HotelFacilitiesModel';
import PocilitiesModel from 'modules/hotel/models/PocilitiesModel';

class BlockDetailModel {
    public hotelFacilities: HotelFacilitiesModel[];
    public numRoomsAvailable: number;
    public pocilities: PocilitiesModel;

    constructor(json: any) {
        this.hotelFacilities = (_.get(json, 'hotel_facilities') || []).map((v: any) => new HotelFacilitiesModel(v));
        this.numRoomsAvailable = _.get(json, 'num_rooms_available');
        this.pocilities = new PocilitiesModel(_.get(json, 'pocilities'));
    }
}
export default BlockDetailModel;
