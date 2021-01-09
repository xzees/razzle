import _ from 'lodash';
import APIRequestInterface  from 'common/Manager/interface/APIRequest';
import { HTTPMethodEnum } from 'common/Manager/Enumeration/HTTPMethodEnum';
import APIConfig from 'common/Config/APIConfig';
import SearchAPIInterface from 'modules/hotel/interface/API/SearchAPIInterface';
class SearchAPIRequest implements APIRequestInterface {

  public method: HTTPMethodEnum = HTTPMethodEnum.GET; 
  public url: string;
  public query: any;
  public endpoint: string = APIConfig.hotel.search;

  public checkin: string;
  public checkout: string;
  public no_of_adults: number;
  public no_of_children: number;
  public no_of_rooms: number;
  public latitude: number;
  public longitude: number;

  public currency: string;
  public language: string;
  
  public rows: number | undefined;
  public order_by: string  | undefined;
  public order_dir: string  | undefined;
  public offset: number | undefined;
  public stars: string | undefined;
  public type: string | undefined;
  public source: string | undefined;
  
  constructor(query: SearchAPIInterface) {
    this.url = this.endpoint;
    this.checkin = query.startDate;
    this.checkout = query.endDate;
    this.no_of_adults = query.adult;
    this.no_of_children = query.child;
    this.no_of_rooms = query.room;
    this.latitude = query.latitude;
    this.longitude = query.longitude;
    this.currency = 'THB';
    this.language = 'th'; 
    this.rows = query.row;
    this.order_dir = query.order_dir;
    this.order_by = query.order_by;
    this.offset = query.offset;
    this.stars = query.stars;
    this.type = query.type;
    this.source = query.source;
  }

  public makeBody() {
    return {};
  }
  public makeHeader() {
    return {};
  }
  public makeQuery() {
    
    return {
      checkin: this.checkin,
      checkout: this.checkout,
      no_of_adults: this.no_of_adults,
      no_of_children: this.no_of_children,
      no_of_rooms: this.no_of_rooms,
      latitude: this.latitude,
      longitude: this.longitude,
      currency: this.currency,
      language: this.language,
      rows: this.rows,
      order_by: this.order_by,
      order_dir: this.order_dir,
      offset: this.offset,
      stars: this.stars,
      type: this.type,
      source: this.source,
    };
  }
}

export default SearchAPIRequest;