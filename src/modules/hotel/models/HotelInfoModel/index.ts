import _ from 'lodash';
import HotelInfoModelAbstract from 'modules/hotel/models/HotelInfoModel/HotelInfoModelAbstract';

class HotelInfoModel extends HotelInfoModelAbstract {
    constructor(json: any) {
        super(json);
    }
}

export default HotelInfoModel;