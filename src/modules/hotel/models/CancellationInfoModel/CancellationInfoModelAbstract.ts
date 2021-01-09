import _ from 'lodash';
import CancellationInfoModelInterface from 'modules/hotel/models/CancellationInfoModel/CancellationInfoModelInterface';

export default abstract class CancellationInfoModelAbstract implements CancellationInfoModelInterface {
    public currency: string;
    public fee: number;
    public from: string;
    public guestCurrency: string;
    public guestCurrencyFee: number;
    public guestCurrencyFeePretty: string;
    public timezone: string;
    public until: string;

    constructor(json: any) {
        this.currency = _.get(json, 'currency') || '';
        this.fee = _.get(json, 'fee') || 0;
        this.from = _.get(json, 'from') || '';
        this.guestCurrency = _.get(json, 'guest_currency') || '';
        this.guestCurrencyFee = _.get(json, 'guest_currency_fee') || 0;
        this.guestCurrencyFeePretty = _.get(json, 'guest_currency_fee_pretty') || '';
        this.timezone = _.get(json, 'timezone') || '';
        this.until = _.get(json, 'until') || '';
    }
}