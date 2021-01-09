import _ from 'lodash';
import APIRequestInterface  from 'common/Manager/interface/APIRequest';
import { HTTPMethodEnum } from 'common/Manager/Enumeration/HTTPMethodEnum';
import APIConfig from 'common/Config/APIConfig';
import BookingModel from 'modules/hotel/models/ReservationModel/BookingModel';
import BookerModel from 'modules/hotel/models/ReservationModel/BookerModel';
import BlockModel from 'modules/hotel/models/ReservationModel/BlockModel';
import AdditionModel from 'modules/hotel/models/ReservationModel/AdditionModel';
import PaymentChannelAPIInterface from 'modules/hotel/interface/API/Payment/Channel/';



class PaymentChannelAPIRequest implements APIRequestInterface {

  public method: HTTPMethodEnum = HTTPMethodEnum.POST; 
  public url: string;
  public query: any;
  public endpoint: string = APIConfig.hotel.paymentChanel;

  public secure_code: string;
  public page_lang: string;
  public multi_amount: boolean;
  public order_code: string;
  public success_url: string;
  public fail_url: string;
  public info: {
      amount: number
  }

  constructor(query: PaymentChannelAPIInterface) {
    this.url = this.endpoint;
    this.secure_code = query.secure_code;
    this.page_lang = query.page_lang;
    this.multi_amount = query.multi_amount;
    this.order_code = query.order_code;
    this.success_url = query.success_url;
    this.fail_url = query.fail_url;
    this.info = query.info;
  }

  public makeBody() {
    return {
        secure_code: this.secure_code,
        page_lang: this.page_lang,
        multi_amount: this.multi_amount,
        order_code: this.order_code,
        success_url: this.success_url,
        fail_url: this.fail_url,
        info: this.info,
    };
  }
  public makeHeader() {
    return {};
  }
  public makeQuery() {  
    return {};
  }
}

export default PaymentChannelAPIRequest;