import _ from 'lodash';
import APIRequestInterface  from 'common/Manager/interface/APIRequest';
import { HTTPMethodEnum } from 'common/Manager/Enumeration/HTTPMethodEnum';
import APIConfig from 'common/Config/APIConfig';
import BookingModel from 'modules/hotel/models/ReservationModel/BookingModel';
import BookerModel from 'modules/hotel/models/ReservationModel/BookerModel';
import BlockModel from 'modules/hotel/models/ReservationModel/BlockModel';
import AdditionModel from 'modules/hotel/models/ReservationModel/AdditionModel';

class OrderAPIRequest implements APIRequestInterface {

  public method: HTTPMethodEnum = HTTPMethodEnum.POST; 
  public url: string;
  public query: any;
  public endpoint: string = APIConfig.hotel.order;

  public hotelId: number;
  public checkin: string;
  public checkout: string;
  public adult: number;
  public child: number;
  public booker: BookerModel;
  public blocks: BlockModel[];
  public addition: AdditionModel;

  constructor(query: BookingModel) {
    this.url = this.endpoint;
    this.hotelId = query.hotelId;
    this.checkin = query.checkin;
    this.checkout = query.checkout;
    this.adult = query.adult;
    this.child = query.child;
    this.booker = query.booker;
    this.blocks = query.blocks;
    this.addition = query.addition;
  }

  public makeBody() {
    return {
        hotelId: this.hotelId,
        checkin: this.checkin,
        checkout: this.checkout,
        adult: this.adult,
        child: this.child,
        booker: this.booker,
        blocks: this.blocks,
        addition: this.addition,
    };
  }
  public makeHeader() {
    return {};
  }
  public makeQuery() {  
    return {};
  }
}

export default OrderAPIRequest;