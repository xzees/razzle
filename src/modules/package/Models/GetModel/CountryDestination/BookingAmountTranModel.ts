import _ from 'lodash';

class BookingAmountTranModel {
  en: string;
  th: string;

  constructor(json: any) {
    this.en = _.get(json, 'en');
    this.th = _.get(json, 'th');
  }
}

export default BookingAmountTranModel;
