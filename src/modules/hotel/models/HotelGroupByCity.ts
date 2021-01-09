import _ from 'lodash';

class HotelGroupByCity {

    public numberOfHotel: number;

    constructor(json: any) {
        this.numberOfHotel = _.get(json, 'number_of_hotel');
    }
}
export default HotelGroupByCity;
