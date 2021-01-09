import _ from 'lodash'
import { observable, computed, reaction, action } from 'mobx';
import HotelRootStore from 'modules/hotel/Stores/HotelRootStore';
import HotelListModel from 'modules/hotel/models/HotelListModel';
import HotelListModelInterface from 'modules/hotel/interface/Models/HotelListModelInterface';
class RelatedStore {

  public hotelrootstore: HotelRootStore;
  
  @observable public related: HotelListModelInterface[] = []; 

  constructor(hotelrootstore: HotelRootStore) {
    this.hotelrootstore = hotelrootstore;
  }
  
  @action
  public setRelated(value: HotelListModelInterface[]) {
    this.related = value;
  }

  @computed
  get getRelated(): HotelListModelInterface[] {
    return this.related;
  }

}

export default RelatedStore;