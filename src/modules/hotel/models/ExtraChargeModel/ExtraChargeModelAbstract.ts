import _ from 'lodash';
import ExtraChargeModelInterface from 'modules/hotel/models/ExtraChargeModel/ExtraChargeModelInterface';

export default abstract class ExtraChargeModelAbstract implements ExtraChargeModelInterface {
    public amount: number;
    public chargeAmount: number;
    public chargePriceMode: number;
    public currency: string;
    public excluded: boolean;
    public name: string;
    public type: string;

    constructor(json: any) {
        this.amount = _.get(json, 'amount');
        this.chargeAmount = _.get(json, 'charge_amount');
        this.chargePriceMode = _.get(json, 'charge_price_mode');
        this.currency = _.get(json, 'currency') || '';
        this.excluded = _.get(json, 'excluded') || false;
        this.name = _.get(json, 'name') || '';
        this.type = _.get(json, 'type') || '';
    }
}