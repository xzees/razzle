import _ from 'lodash';
import CountryModel from '../CountryModel';
import AmountFromModel from './AmountFromModel';
import BookingAmountTranModel from './BookingAmountTranModel';
import ContentModel from './ContentModel';

class CountryDestinationModel {
  code: string;
  amountsFrom: AmountFromModel[];
  currency: string;
  currencyName: string;
  country: CountryModel;
  content: ContentModel;
  bookingAmount: string;
  bookingAmountValue: number;
  bookingAmountTrans: BookingAmountTranModel;

  constructor(json: any) {
    this.code = _.get(json, 'code');
    this.amountsFrom = _.get(json, 'amountsFrom');
    this.currency = _.get(json, 'currency');
    this.currencyName = _.get(json, 'currencyName');
    this.country = _.get(json, 'country');
    this.content = _.get(json, 'content');
    this.bookingAmount = _.get(json, 'bookingAmount');
    this.bookingAmountValue = _.get(json, 'bookingAmountValue');
    this.bookingAmountTrans = _.get(json, 'bookingAmountTrans');
  }
}

export default CountryDestinationModel;
