import _ from 'lodash';
import PaymentTermsModelInterface from 'modules/hotel/models/PaymentTermsModel/PaymentTermsModelInterface';

export default abstract class PaymentTermsModelAbstract implements PaymentTermsModelInterface {
    public cancellationDescription: string;
    public name: string;
    public prepaymentDescription: string;

    constructor(json: any) {
        this.cancellationDescription = _.get(json, 'cancellation_description');
        this.name = _.get(json, 'name');
        this.prepaymentDescription = _.get(json, 'prepayment_description');
    }
}