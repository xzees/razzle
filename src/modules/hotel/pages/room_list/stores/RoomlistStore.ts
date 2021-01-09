import InitializeManager from 'common/Manager/InitializeManager';
import _ from 'lodash'
import { observable, computed, reaction, action } from 'mobx';
import HotelListModelInterface from 'modules/hotel/interface/Models/HotelListModelInterface';
import HotelListModel from 'modules/hotel/models/HotelListModel';
import RoomlistModel from 'modules/hotel/models/RoomlistModel';
import HotelRootStore from 'modules/hotel/Stores/HotelRootStore';
import * as H from 'history';
import BlockModel from 'modules/hotel/models/BlockModel';
import RoomSelectedModel from 'modules/hotel/models/RoomSelectedModel';

import qs from 'query-string';
import HotelManager from 'modules/hotel/Manager/HotelManager';
const isClient = typeof window === 'object';

interface FilterInterface {
  pocilities: {
    payAtProperty: boolean,
    freeCancel: boolean,
    breakFast: boolean
  };
  ccRequired: boolean;
}

class RoomlistStore {

  public hotelrootstore: HotelRootStore;
  @observable public data: RoomlistModel = observable<any>({});
  @observable public roomSelected = observable<RoomSelectedModel>([]);
  @observable public filter: FilterInterface = observable<FilterInterface>({
    pocilities: {
      payAtProperty: false,
      freeCancel: false,
      breakFast: false
    },
    ccRequired: false
  });
  
  constructor(hotelrootstore: HotelRootStore) {
    this.hotelrootstore = hotelrootstore;
  }

  public init(location: H.Location) {
    this.setData(observable<any>({}));
    this.hotelrootstore.RelatedStore.setRelated([]);
    this.hotelrootstore.ListStore.setupTheme();
    this.hotelrootstore.setValueByUrl(location);
    this.setupInitialize(location);
  }

  @action
  async setupInitialize(location: H.Location) {
    
    let relate: any[] = [];
    let hDetail: any;
    if (!isClient) {
      hDetail =  JSON.parse(InitializeManager.default.get());
    } else {
      hDetail =  InitializeManager.default.get();
      if(_.values(hDetail?.data?.roomlist).length == 0) {
        const param: any = qs.parse(location.search);
        const returnData = await HotelManager.default.roomlist({
            ...param
        });

        const relateData = await HotelManager.default.search({
            ...param,
            row: 20,
            order_dir: 'asc',
            order_by: 'price'
        });
        hDetail = {
          data: {
            roomlist: returnData.data.data,
            related: relateData.data
          }
        }
        // console.log(hDetail)
      }else{
        InitializeManager.default.rehydrate({})
      }
    }

    this.setData(new RoomlistModel(hDetail.data.roomlist));
    relate = Object.values(hDetail.data.related);
    const resData: HotelListModelInterface[] = relate.map((v: any) => new HotelListModel(v));
    // console.log(resData)
    this.hotelrootstore.RelatedStore.setRelated(resData);
  }

  @action.bound 
  public setFilter(value: any) {
      this.filter = _.merge({...this.filter}, value);
  }

  @computed
  get returnData() {
    return this.data;
  }

  @computed
  get returnBlock() {
    return this.data.block;
  }

  @action
  public getfilter(v: any) {
    return _.transform(v, (result: any, value: any, key: any) => {
      if (!_.isBoolean(value)) {
        const check = this.getfilter(value);
        if (_.values(check).length > 0) {
          result[key] = this.getfilter(value);
        }
      } else if (value === true) {
        result[key] = value;
      }
    }, {});
  }

  @computed
  get returnFilterBlock() {
    // console.log("returnFilterBlock")
    const blockAfterFilter: any[] = [];
    const filterActive: any = this.getfilter(this.filter);
    if (_.values(filterActive).length > 0) {
      this.data.block.map((v: any) => {
        blockAfterFilter.push(_.filter(v, filterActive));
      });
      return blockAfterFilter; 
    }
    return this.data.block;
  }

  @computed
  get getNumberFilter() {

    let countBreskfast: number = 0;
    let countFreeCancel: number = 0;
    let countPayAtProperty: number = 0;
    let countCCnotRequired: number = 0;

    this.data.block.map((v: any[]) => {
      countBreskfast = countBreskfast + _.filter(v, (value: BlockModel) => value.pocilities.breakFast == true).length;
      countFreeCancel = countFreeCancel + _.filter(v, (value: BlockModel) => {
        return value.pocilities.freeCancel == true;
      }).length;
      countPayAtProperty = countPayAtProperty + _.filter(v, (value: BlockModel) => {
        return value.pocilities.payAtProperty == true;
      }).length;
      countCCnotRequired = countCCnotRequired + _.filter(v, (value: BlockModel) => {
        return value.ccRequired == true;
      }).length;
    });

    return {
      countBreskfast,
      countFreeCancel,
      countPayAtProperty,
      countCCnotRequired,
    };
  }
  
  @computed
  get getfilterBtn() {
    const getNumberFilter = this.getNumberFilter;
    return [
        {
          number: getNumberFilter.countBreskfast,
          active: this.filter.pocilities.breakFast,
          text: 'รวมอาหารเช้า',
          onClick: () => {
            this.setFilter({
              pocilities: {
                breakFast: !this.filter.pocilities.breakFast
              }
            })
          }
        },
        {
          number: getNumberFilter.countFreeCancel,
          active: this.filter.pocilities.freeCancel,
          text: 'ยกเลิกได้ฟรี',
          onClick: () => {
            this.setFilter({
              pocilities: {
                freeCancel: !this.filter.pocilities.freeCancel
              }
            })
          }
        },
        {
          number: getNumberFilter.countPayAtProperty,
          active: this.filter.pocilities.payAtProperty,
          text: 'ชำระเงิน ณ โรงแรม',
          onClick: () => {
            this.setFilter({
              pocilities: {
                payAtProperty: !this.filter.pocilities.payAtProperty
              }
            })
          }
        },
        {
          number: getNumberFilter.countCCnotRequired,
          active: this.filter.ccRequired,
          text: 'ไม่ต้องใช้บัตรเครดิตในการจอง',
          onClick: () => {
            this.setFilter({
              ccRequired: !this.filter.ccRequired
            })
          }
        }
      ];
  }

  @action.bound
  public setData(value: RoomlistModel) {
    this.data = value;
  }

  @action.bound
  public setRoomSelected(value: RoomSelectedModel) {
    // const filterRoomSelected = _.filter(this.roomSelected, (rs:RoomSelectedModel) => { return rs.roomId!=value.roomId && rs.blockId!=value.blockId; });
    // this.roomSelected.length = 0;
    // filterRoomSelected.map((rs:RoomSelectedModel) => {
    //   this.roomSelected.push(rs);
    // });
    this.roomSelected.push(value);
  }

}

export default RoomlistStore;