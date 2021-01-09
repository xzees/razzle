import _ from 'lodash';
import RootStore from 'stores';
import { observable, action } from 'mobx';
import HotelManager from '../Manager/HotelManager';
import { START_DATE } from '@datepicker-react/styled';
import NavigationManager from 'common/Manager/NavigationManager';
import qs from 'query-string';
import { IqueryRoomList } from 'modules/hotel/APIRequest/RoomListAPIRequest';
import { formatDateForApi, formatDateForAutocomplete } from 'common/Manager/Helper';
import ListStore from 'modules/hotel/pages/hotel_list/stores/ListStore';
import RoomlistStore from 'modules/hotel/pages/room_list/stores/RoomlistStore';
import AutocompleteStore from 'modules/hotel/Stores/UI/AutocompleteStore';
import DatepickerStore from 'modules/hotel/Stores/UI/DatepickerStore';
import GuestStore from 'modules/hotel/Stores/UI/GuestStore';
import RelatedStore from 'modules/hotel/pages/room_list/stores/RelatedStore';
import ReservationStore from 'modules/hotel/pages/reservation/stores/ReservationStore';
import SearchAPIInterface from 'modules/hotel/interface/API/SearchAPIInterface';
interface KeyValue {
  [key: string]: any;
}
interface Idate {
  startDate: Date;
  endDate: Date;
  focusedInput: any;
}

const enum SortType {
  ADVICE = 'advice',
  PRICE = 'price',
  CLASS = 'class',
  SCROLL = 'scroll',
}

const enum Order {
  ASC = 'asc',
  DESC = 'desc',
}

const enum VAT {
  NOT_CONDITION = 0,
  INCLUDE_VAT_FREE = 1,
  EXCLUDE_VAT_FREE = 2,
}
class HotelRootStore {
 
  @observable public isPageLoading: boolean = false; 
  @observable public endpointResult: KeyValue = observable<KeyValue>([]);
  @observable public vAutocomplete: any =  observable<{}>({
    tag: '',
    tagLabel: ''
  }) || '';
  @observable public vDatepicker: Idate = observable<Idate>({
    startDate: new Date(),
    endDate: (new Date((new Date()).setDate((new Date()).getDate() + 1))),
    focusedInput: START_DATE,
  });
  @observable public vAdult: number = 1;
  @observable public vChild: number = 0;
  @observable public vChildOld: any[] = [];
  @observable public vRoom: number = 1;

  public rootStore: RootStore;
  public RoomlistStore: RoomlistStore;
  public ListStore: ListStore;
  public AutocompleteStore: AutocompleteStore;
  public DatepickerStore: DatepickerStore;
  public GuestStore: GuestStore;
  public RelatedStore: RelatedStore;
  public ReservationStore: ReservationStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.ListStore = new ListStore(this);
    this.RoomlistStore = new RoomlistStore(this);
    this.AutocompleteStore = new AutocompleteStore(this);
    this.DatepickerStore = new DatepickerStore(this);
    this.GuestStore = new GuestStore(this);
    this.RelatedStore = new RelatedStore(this);
    this.ReservationStore = new ReservationStore(this);
  }

  @action
  public setVAutocomplete(value: any) {
    this.vAutocomplete = value;
  }
  
  @action
  public setVDatepicker(value: Idate) {
    this.vDatepicker = value;
  }

  @action
  public setvAdult(value: number) {
    this.vAdult = value;
  }

  @action
  public setvChild(value: number) {
    this.vChild = value;
  }

  @action
  public setvChildOld(value: any[]) {
    this.vChildOld = value;
  }

  @action
  public setvRoom(value: number) {
    this.vRoom = value;
  }

  @action
  public async apiAutocomplete(param: string) {
    return HotelManager.default.autocomplete({
      text: param,
      langForApi: 'th' 
    });
  }

  @action
  public async apiSearch(param: SearchAPIInterface) {
    return HotelManager.default.search(param);
  }

  @action
  public async apiRoomlist(param: IqueryRoomList) {
    return HotelManager.default.roomlist(param);
  }

  @action
  public paramForApiSearch() {
    return {
      name: this.vAutocomplete?.tag,
      label: this.vAutocomplete?.tagLabel,
      type: this.vAutocomplete?.type,
      hotel_id: this.vAutocomplete?.hotel_id,
      longitude: this.vAutocomplete?.longitude,
      latitude: this.vAutocomplete?.latitude,
      startDate: this.vDatepicker.startDate !== null && formatDateForApi(this.vDatepicker.startDate) || null,
      endDate: this.vDatepicker.endDate !== null && formatDateForApi(this.vDatepicker.endDate) || null,
      adult: this.vAdult,
      room: this.vRoom,
      child: this.vChild,
      childOld: (Array(this.vChild).fill(null).map((_, i) => this.vChildOld[i].value)).join('|')
    };
  }

  @action
  public paramForAutocomplete() {
    return {
      startDate: this.vDatepicker.startDate !== null && formatDateForAutocomplete(this.vDatepicker.startDate) || null,
      endDate: this.vDatepicker.endDate !== null && formatDateForAutocomplete(this.vDatepicker.endDate) || null,
      adult: this.ListStore.getAdultText(),
      room: this.ListStore.getRoomText(),
      child: this.ListStore.getChildText(),
    };
  }
  
  @action.bound
  public async btnSearch() {
    if (
      (
        this.vAutocomplete?.longitude
        && this.vAutocomplete?.latitude
      )
      && this.vDatepicker.startDate != null
      && this.vDatepicker.endDate != null
      && this.vAdult !== 0
      && this.vRoom !== 0
    ) {
      if (RootStore.isServer) {
        return '';
      }
      this.ListStore.clearValue()
      NavigationManager.goTo(
        NavigationManager.ROUTES.HOTEL_SEARCH_LIST,
        this.paramForApiSearch()
      );
    }
    return undefined;
  }

  @action.bound
  public async btnSearchRoomList() {
    if (
      (
        this.vAutocomplete?.longitude
        && this.vAutocomplete?.latitude
      )
      && this.vDatepicker.startDate != null
      && this.vDatepicker.endDate != null
      && this.vAdult !== 0
      && this.vRoom !== 0
    ) {
      if (RootStore.isServer) {
        return '';
      }
      this.ListStore.clearValue()
      NavigationManager.goTo(
        NavigationManager.ROUTES.HOTEL_SEARCH_LIST,
        this.paramForApiSearch()
      );
      
    }
    return undefined;
  }

  @action.bound
  public setValueByUrl(location: any) {
    
    const param: any = qs.parse(location.search);

    this.setVAutocomplete({
      tag: param?.name,
      tagLabel: param?.label,
      longitude: param?.longitude,
      latitude: param?.latitude,
      type: param?.type,
      hotel_id: param?.hotel_id
    });

    this.setVDatepicker({
      startDate: new Date(param.startDate),
      endDate: new Date(param.endDate),
      focusedInput: START_DATE
    });

    this.setvChild(parseInt(param.child, undefined));
    this.setvAdult(parseInt(param.adult, undefined));
    this.setvRoom(parseInt(param.room, undefined));
    const __ARRAY: any = [];
    if (param.childOld !== '') {
      const array = param.childOld.split('|');
      for (const value of array) {
        __ARRAY.push({
          value
        });
      }
    }
    this.setvChildOld(__ARRAY);
  }
  
  public async init() {
    this.isPageLoading = true;
    this.isPageLoading = false;
  }
}

export default HotelRootStore;