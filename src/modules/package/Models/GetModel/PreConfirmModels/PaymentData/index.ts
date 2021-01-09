import _ from 'lodash';

class index {
  description: string;
  invoicingCompany: InvoicingCompany;
  paymentType: PaymentType;
  constructor(json: any) {
    this.description = _.get(json, 'description');
    this.invoicingCompany = _.get(json, 'invoicingCompany');
    this.paymentType = _.get(json, 'paymentType');
  }
}
export default index;

class InvoicingCompany {
  code: string;
  name: string;
  registrationNumber: string;
  constructor(json: any) {
    this.code = _.get(json, 'code');
    this.name = _.get(json, 'name');
    this.registrationNumber = _.get(json, 'registrationNumber');
  }
}

class PaymentType {
  code: string;
  constructor(json: any) {
    this.code = _.get(json, 'code');
  }
}
