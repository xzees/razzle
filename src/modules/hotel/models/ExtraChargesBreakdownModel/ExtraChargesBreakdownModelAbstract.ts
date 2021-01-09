import _ from 'lodash';
import ExtraChargesBreakdownModelInterface from 'modules/hotel/models/ExtraChargesBreakdownModel/ExtraChargesBreakdownModelInterface';
import ExtraChargeModelInterface from 'modules/hotel/models/ExtraChargeModel/ExtraChargeModelInterface';
import ExtraChargeModel from 'modules/hotel/models/ExtraChargeModel';

export default abstract class ExtraChargesBreakdownModelAbstract implements ExtraChargesBreakdownModelInterface {
    public extraCharge: ExtraChargeModelInterface[];
    public netPrice: number;

    constructor(json: any) {
        this.netPrice = _.get(json, 'net_price');
        this.extraCharge = (_.get(json, 'extra_charge') || []).map((v: any) => new ExtraChargeModel(v));
    }
}