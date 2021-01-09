import RoomReservationModel from 'modules/hotel/models/ReservationModel/RoomReservationModel';
import RoomlistModel from 'modules/hotel/models/RoomlistModel';
import BookingModel from 'modules/hotel/models/ReservationModel/BookingModel';
import PaymentModel from 'modules/hotel/models/ReservationModel/PaymentModel';
class ReservationModel {
    public hotelData: RoomlistModel;
    public roomReservation: RoomReservationModel[];
    public booking: BookingModel;
    public payment: PaymentModel;

    constructor(reservation: ReservationModel) {
        this.hotelData = reservation.hotelData;
        this.roomReservation = reservation.roomReservation.map((room: any) => {
            return new RoomReservationModel(room);
        });
        this.booking = reservation.booking;
        this.payment = reservation.payment;
    }
}
export default ReservationModel;