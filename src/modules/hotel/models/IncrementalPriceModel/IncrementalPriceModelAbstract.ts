import _ from 'lodash';
import IncrementalPriceModelInterface from 'modules/hotel/models/IncrementalPriceModel/IncrementalPriceModelInterface';
import ExtraChargesBreakdownModelInterface from 'modules/hotel/models/ExtraChargesBreakdownModel/ExtraChargesBreakdownModelInterface';
import ExtraChargesBreakdownModel from 'modules/hotel/models/ExtraChargesBreakdownModel';

export default abstract class IncrementalPriceModelAbstract implements IncrementalPriceModelInterface {
    public currency: string;
    public extraChargesBreakdown: ExtraChargesBreakdownModelInterface;
    public incrementalPriceId: string;
    public localCurrency: string;
    public localPrice: number;
    public price: number;

    constructor(json: any) {
        this.currency = _.get(json, 'currency') || '';
        this.incrementalPriceId = _.get(json, 'incremental_price_id') || '';
        this.localCurrency = _.get(json, 'local_currency') || '';
        this.localPrice = _.get(json, 'local_price');
        this.price = _.get(json, 'price');
        this.extraChargesBreakdown = new ExtraChargesBreakdownModel(_.get(json, 'extra_charges_breakdown'));
    }
}