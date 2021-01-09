import ExtraChargeModelInterface from 'modules/hotel/models/ExtraChargeModel/ExtraChargeModelInterface';

export default interface PaymentTermsModelInterface {
    extraCharge: ExtraChargeModelInterface[];
    netPrice: number;
}