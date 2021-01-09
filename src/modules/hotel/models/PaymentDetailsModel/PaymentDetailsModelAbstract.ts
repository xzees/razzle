import _ from 'lodash';
import PaymentDetailsModelInterface from 'modules/hotel/models/PaymentDetailsModel/PaymentDetailsModelInterface';

export default abstract class PaymentDetailsModelAbstract implements PaymentDetailsModelInterface {
    public bookable: boolean;
    public cvcRequired: boolean;
    public payable: boolean;
    public paymentId: number;
    constructor(json: any) {
        this.bookable = _.get(json, 'bookable');
        this.cvcRequired = _.get(json, 'cvc_required');
        this.payable = _.get(json, 'payable');
        this.paymentId = _.get(json, 'payment_id');
    }
}