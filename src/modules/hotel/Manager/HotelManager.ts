import _ from 'lodash';
import APIManager from 'common/Manager/APIManager';
import AutocompleteAPIRequest from 'modules/hotel/APIRequest/AutocompleteAPIRequest';
import SearchAPIRequest from 'modules/hotel/APIRequest/SearchAPIRequest';
import APIResponse from 'common/Manager/Models/API/APIRespones';
import APIConfig from 'common/Config/APIConfig';
import RoomListAPIRequest, { IqueryRoomList } from 'modules/hotel/APIRequest/RoomListAPIRequest';
import PopularCityAPIRequest from 'modules/hotel/APIRequest/PopularCityAPIRequest';
import AutocompleteModel from '../models/AutocompleteModel';
import LabelModel from '../models/LabelModel';
import * as H from 'history';
import qs from 'query-string';
import SearchAPIInterface from 'modules/hotel/interface/API/SearchAPIInterface';
import LabelTranslatorAPIInterface from 'modules/hotel/interface/API/LabelTranslatorAPIInterface';
import LabelTranslatorAPIRequest from '../APIRequest/LabelTranslatorAPIRequest';
import OrderAPIRequest from '../APIRequest/OrderAPIRequest';
import PaymentChannelAPIRequest from '../APIRequest/PaymentChannelAPIRequest';
import ReservationOrderAPIRequest from '../APIRequest/ReservationOrderAPIRequest';
//Model
import BookingModel from 'modules/hotel/models/ReservationModel/BookingModel';
import OrderModel from 'modules/hotel/models/ReservationModel/OrderModel';
import GetOrderModel from 'modules/hotel/models/ReservationModel/GetOrderModel';
//Interface
import PaymentChannelAPIInterface from 'modules/hotel/interface/API/Payment/Channel/';

class HotelManager {

  public static default: HotelManager = new HotelManager();

  private constructor() { }

  public async autocomplete(param: any) {
    const apiRequest = new AutocompleteAPIRequest(param, APIConfig.hotel.autoComplete);
    // const response = await 

    return APIManager.default.fetch(apiRequest);
    // response.data.data.map((v: any) => new AutocompleteModel(v));
  }

  public async search(param: SearchAPIInterface) {
    const apiRequest = new SearchAPIRequest(param);
    return APIManager.default.fetch(apiRequest);
  }

  public paramforsearch(location: H.Location , row: number , orderby: string) {
    const path = location.search + '&row=' + row + '&order_dir=' + orderby + '&order_by=price';
    const params: any = qs.parse(path);
    const apiRequest = new SearchAPIRequest(params);
    return JSON.stringify({ ...apiRequest.makeQuery()});
  }

  public async roomlist(param: IqueryRoomList) {
    const apiRequest = new RoomListAPIRequest(param);
    return APIManager.default.fetch(apiRequest);
  }
  
  public async popularcity(): Promise<APIResponse> {
    const apiRequest = new PopularCityAPIRequest(APIConfig.hotel.popular_city);
    return APIManager.default.fetch(apiRequest);
  }

  public async labeltranslator(param: LabelTranslatorAPIInterface): Promise<any> {
    const apiRequest = new LabelTranslatorAPIRequest(param);
    // return APIManager.default.fetch(apiRequest)
    
    const response = await APIManager.default.fetch(apiRequest);

    const res = {}; 

    response.data.data_list.map((v: any) => { 
      res[v.key] = {...v.translation};
    });

    return res;
  }

  public async reservationOrder(param: BookingModel): Promise<OrderModel> {
    const apiRequest = new OrderAPIRequest(param);
    // return APIManager.default.fetch(apiRequest)
    const response = await APIManager.default.fetch(apiRequest);
    return response.data.data;
  }

  public async paymentChannel(param: PaymentChannelAPIInterface): Promise<any> {
    const apiRequest = new PaymentChannelAPIRequest(param);
    // return APIManager.default.fetch(apiRequest)
    const response = await APIManager.default.fetch(apiRequest);
    //console.log(response.data);
    return response.data.data;
  }

  public async getReservationOrder(param: GetOrderModel): Promise<any> {
    console.log("🚀 ~ file: HotelManager.ts ~ line 93 ~ HotelManager ~ getReservationOrder ~ param", param)
    const apiRequest = new ReservationOrderAPIRequest(param);
    // return APIManager.default.fetch(apiRequest)
    const response = await APIManager.default.fetch(apiRequest);
    return response.data.data;
  }
  
  public async fetchMeta() {
    
    return {
      title: 'จองโรงแรม กับThaitravelcenter.com จองโรงแรมทั่วโลก กับ แอป Thaitravelcenter.com',
      metadata: [
        {
          name: 'keywords',
          content: 'จองโรงแรม กับThaitravelcenter.com จองโรงแรมทั่วโลก กับ แอป Thaitravelcenter.com',
        },
        {
          name: 'description',
          content: 'จองโรงแรม กับThaitravelcenter.com จองโรงแรมทั่วโลก กับ แอป Thaitravelcenter.com',
        }
      ]
    };
  }
}

export default HotelManager;