import _ from 'lodash'
import APIRequestInterface  from 'common/Manager/interface/APIRequest'
import ConstantManager from 'common/Manager/ConstantManager'
import { HTTPMethodEnum } from 'common/Manager/Enumeration/HTTPMethodEnum'
import APIConfig from 'common/Config/APIConfig';

export interface IqueryRoomList {
  // checkIn: string;
  // checkOut: string;
  // hotelId: string;
  // currency: string;
  // lang: string;
  // no_of_adults: number;
  // no_of_children: number;
  // no_of_rooms: number;

  startDate: string ;
  endDate: string ;
  hotelId: string ;
  currency?: string;
  lang?: string;
  adult: number ;
  child: number ;
  room: number ;
}

class RoomListAPIRequest implements APIRequestInterface {

  public method: HTTPMethodEnum = HTTPMethodEnum.GET; 
  public url: string;
  public query: any;
  public endpoint: string = APIConfig.hotel.roomlist;

  public checkIn: string;
  public checkOut: string;
  public hotelId: string;

  public currency: string;
  public lang: string;
  public no_of_adults: number;
  public no_of_children: number;
  public no_of_rooms: number;

  constructor(query: IqueryRoomList) {
    this.url = this.endpoint;
    this.checkIn = query.startDate;
    this.checkOut = query.endDate,
    this.hotelId = query.hotelId;
    this.currency = "THB";
    this.lang = "th";
    this.no_of_adults = query.adult;
    this.no_of_children = query.child;
    this.no_of_rooms = query.room;
  }

  public makeBody() {
    return {};
  }
  public makeHeader() {
    return {};
  }
  public makeQuery() {
    
    return {
      checkIn: this.checkIn,
      checkOut: this.checkOut,
      hotelId: this.hotelId,
      currency: this.currency,
      lang: this.lang,
      no_of_adults: 1, 
      no_of_children: 0, 
      no_of_rooms: 1, 
    };
  }
}

export default RoomListAPIRequest;