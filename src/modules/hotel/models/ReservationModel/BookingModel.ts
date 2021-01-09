import BookerModel from './BookerModel';
import BlockModel from './BlockModel';
import AdditionModel from './AdditionModel';
import PaymentModel from './PaymentModel';

class BookingModel{
    public hotelId: number;
    public checkin: string;
    public checkout: string;
    public adult: number;
    public child: number;
    public booker: BookerModel;
    public blocks: BlockModel[];
    public addition: AdditionModel; 
    public payment: PaymentModel;

    constructor(booking: BookingModel) {
        this.hotelId = booking.hotelId;
        this.checkin = booking.checkin;
        this.checkout = booking.checkout;
        this.adult = booking.adult;
        this.child = booking.child;
        this.booker = booking.booker;
        this.blocks = booking.blocks;
        this.addition = booking.addition;
        this.payment = booking.payment;
    }
}
export default BookingModel;