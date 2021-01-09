import _ from 'lodash';
import APIRequestInterface  from 'common/Manager/interface/APIRequest';
import { HTTPMethodEnum } from 'common/Manager/Enumeration/HTTPMethodEnum';
import APIConfig from 'common/Config/APIConfig';
import BookingModel from 'modules/hotel/models/ReservationModel/BookingModel';
import BookerModel from 'modules/hotel/models/ReservationModel/BookerModel';
import BlockModel from 'modules/hotel/models/ReservationModel/BlockModel';
import AdditionModel from 'modules/hotel/models/ReservationModel/AdditionModel';
import PaymentChannelAPIInterface from 'modules/hotel/interface/API/Payment/Channel/';



class ReservationOrderAPIRequest implements APIRequestInterface {

  public method: HTTPMethodEnum = HTTPMethodEnum.GET; 
  public url: string;
  public query: any;
  public endpoint: string = APIConfig.hotel.order;

  public orderRef: string;
  public status: string;

  constructor(query: any) {
    this.url = this.endpoint;
    this.orderRef = query.orderRef;
    this.status = query.status;
  }

  public makeBody() {
    return {};
  }
  public makeHeader() {
    return {};
  }
  public makeQuery() {  
    return {
        orderRef: this.orderRef,
        status: this.status,
    };
  }
}

export default ReservationOrderAPIRequest;