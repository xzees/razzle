import _ from 'lodash';
import CheckinCheckoutTimesModelInterface from 'modules/hotel/models/CheckinCheckoutTimesModel/CheckinCheckoutTimesModelInterface';

export default abstract class CheckinCheckoutTimesModelAbstract implements CheckinCheckoutTimesModelInterface {

    public checkinFrom: string;
    public checkinTo: string;
    public checkoutFrom: string;
    public checkoutTo: string;

    constructor(json: any) {
        this.checkinFrom = _.get(json, 'checkin_from');
        this.checkinTo = _.get(json, 'checkin_to');
        this.checkoutFrom = _.get(json, 'checkout_from');
        this.checkoutTo = _.get(json, 'checkout_to');
    }
}