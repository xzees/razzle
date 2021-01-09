import ExtraChargesBreakdownModelInterface from 'modules/hotel/models/ExtraChargesBreakdownModel/ExtraChargesBreakdownModelInterface';

export default interface PaymentTermsModelInterface {
    currency: string;
    extraChargesBreakdown: ExtraChargesBreakdownModelInterface;
    incrementalPriceId: string;
    localCurrency: string;
    localPrice: number;
    price: number;
}