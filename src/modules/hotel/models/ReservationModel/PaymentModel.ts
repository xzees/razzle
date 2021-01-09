import PaymentChannelModel from 'modules/hotel/models/ReservationModel/PaymentChannelModel'

class PaymentModel{
    public success: boolean;
    public orderRef: string;
    public msgPayment: string;
    public channel: PaymentChannelModel;

    constructor(payment: PaymentModel) {
        this.success = payment.success;
        this.orderRef = payment.orderRef;
        this.msgPayment = payment.msgPayment;
        this.channel = payment.channel;
    }
}

export default PaymentModel;