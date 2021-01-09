import _ from 'lodash';
import ReservationHotelModel from 'modules/hotel/models/ReservationModel/ReservationHotelModel';

class ReservationModel {
    public reservationHotel: ReservationHotelModel[];

    constructor(reserv: ReservationHotelModel[]) {
        this.reservationHotel = reserv || false;
    }
}
export default ReservationModel;
