import _ from 'lodash';
import PaymentOptionsModelInterface from 'modules/hotel/models/PaymentOptionsModel/PaymentOptionsModelInterface';

export default abstract class PaymentOptionsModelAbstract implements PaymentOptionsModelInterface {
    public payAtProperty: boolean;
    public payNow: boolean;
    constructor(json: any) {
        this.payAtProperty = _.get(json, 'pay_at_property') || false;
        this.payNow = _.get(json, 'pay_now') || false;
    }
}