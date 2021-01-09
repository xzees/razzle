import _ from 'lodash';
import { observable, computed, action, reaction } from 'mobx';
import qs from 'query-string';
import i18n from 'utilities/I18n';
import HotelRootStore from 'modules/hotel/Stores/HotelRootStore';
import { formatDate } from 'common/Manager/Helper';
import HotelListModelInterface from 'modules/hotel/interface/Models/HotelListModelInterface';
import ColorManager from 'common/Manager/ColorManager';
import * as H from 'history';
import HotelManager from 'modules/hotel/Manager/HotelManager';
import SocketManager from 'modules/hotel/Manager/SocketManager';
import HotelListModel from 'modules/hotel/models/HotelListModel';
import InitializeManager from 'common/Manager/InitializeManager';

interface PriceRankInterface {
  start: number;
  end: number;
}

interface PaymentInterface {
  pay_at_property: boolean;
  no_require_credit_card: boolean; 
}

interface FilterInterface {
  star: number[];
  vat: VAT;
  price: PriceRankInterface[];
  rating: number[];
  payment: PaymentInterface;
}

interface HotelClassInterface {
  nameClass: string | number;
  isChecked: boolean;
  count: string | number;
}

interface IPriceRange { label: string, value:number[], isChecked:boolean, count: number }

interface PriceSliderInterface {
  start: number;
  end: number;
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

const isClient = typeof window === 'object';

class ListStore {

  public hotelrootstore: HotelRootStore;

  @observable public open: boolean = false;
  @observable public firstRows: any = '';
  @observable public star: any = '';
  @observable public orderDir: string = 'asc';
  @observable public Row: number = 10;
  @observable public offsets: number = 0;
  @observable public dataComplete: boolean = false;
  @observable public searchSocket: HotelListModelInterface[] = [];
  @observable public searchModel: HotelListModelInterface[] = [];
  @observable public locations: any = {};
  @observable public items: any[] = [];
  @observable public hasLoadmore: boolean = true;
  @observable public itemsRender: any;
  @observable public loading: boolean = false;
  @observable public checkReload: boolean = false;
  @observable public maxItemPrice: number = 0;
  @observable public sort: any = observable({name: SortType.PRICE, ordering: Order.ASC});

  @observable public filter: FilterInterface = observable({
    star: [],
    vat: VAT.NOT_CONDITION, 
    price: [],
    rating: [], 
    payment: {
      pay_at_property: false, 
      no_require_credit_card: false
    }
  });

  @observable public hotelClass: HotelClassInterface[] = [];
  
  @observable public priceControl: number = 0;
  
  @observable public priceCheckbox: IPriceRange[] = [
    { label: 'THB 0 - 2,000', value: [1, 2000], isChecked:false, count: 0},
    { label: 'THB 2,001 - 4,000', value: [2001, 4000], isChecked:false, count: 0},
    { label: 'THB 4,001 - 6,000', value: [4001, 6000],  isChecked:false, count: 0},
    { label: 'THB 6,001 - 8,000', value: [6001, 8000], isChecked:false, count: 0},
    { label: 'THB 8,001 +',  value: [8001, 10000], isChecked:false, count: 0},
  ];

  @observable public priceSlider: PriceSliderInterface = {start: 0, end: 0};

  constructor(hotelrootstore: HotelRootStore) {
    this.hotelrootstore = hotelrootstore;
  }

  public init(location: H.Location) {
    this.setupInitialize(location);
    this.setlocations(qs.parse(location.search));
    this.hotelrootstore.setValueByUrl(location);
    this.setupTheme();
  }

  @computed
  get returnPriceCheckbox () {
    return this.priceCheckbox;
  }
  
  @computed
  get returnPriceSlider () {
    return this.priceSlider;
  }

  @action.bound
  public clearValue() {
    this.setDataComplete(false);
    this.open = false;
    this.firstRows = '';
    this.star = '';
    this.orderDir = 'asc';
    this.Row = 10;
    this.offsets = 0;
    this.searchSocket = [];
    this.searchModel = [];
    this.locations = {};
    this.items = [];
    this.hasLoadmore = true;
    this.itemsRender;
    this.loading = false;
    this.checkReload = false;
    this.maxItemPrice = 0;
    this.sort = {name: SortType.PRICE, ordering: Order.ASC}
    this.filter = {
      star: [],
      vat: 0, 
      price: [],
      rating: [], 
      payment: {
        pay_at_property: false, 
        no_require_credit_card: false
      }
    };
    this.hotelClass = [];
    this.priceControl = 0;
    this.priceCheckbox = [
      { label: 'THB 0 - 2,000', value: [1, 2000], isChecked:false, count: 0},
      { label: 'THB 2,001 - 4,000', value: [2001, 4000], isChecked:false, count: 0},
      { label: 'THB 4,001 - 6,000', value: [4001, 6000],  isChecked:false, count: 0},
      { label: 'THB 6,001 - 8,000', value: [6001, 8000], isChecked:false, count: 0},
      { label: 'THB 8,001 +',  value: [8001, 10000], isChecked:false, count: 0},
    ];
    this.priceSlider = {start: 0, end: 0};
  }

  @action.bound
  public async setupInitialize(location: H.Location) {
    let item: any;
    let search: any;
    if (!isClient) {
      search =  JSON.parse(InitializeManager.default.get());
    } else {
      search =  InitializeManager.default.get();
    }

    item = _.chain((search?.data?.data || [])).filter((v: any, k: any) => {
      return k !== 'status' && k !== 'requestId';
    }).value();
    InitializeManager.default.rehydrate("{}");
    
    if(item.length == 0) {
      this.clearValue();
      const param: any = qs.parse(location.search);
      const returnData: any = await HotelManager.default.search({
          ...param, 
          row: 3,
          order_dir: 'asc',
          order_by: 'price' 
      });
      item = _.chain(returnData.data).filter((v: any, k: any) => {
        return k !== 'status' && k !== 'requestId';
      }).value();
    }
    this.setsearchModel(_.values(_.mapKeys(item, (v) => v.hotel_id)).map((v) => new HotelListModel(v)));
  }

  public setupTheme() {
    // console.log("list theme")
    this.hotelrootstore.AutocompleteStore.setUI({
      input: {
        paddingTop: '5px', 
        paddingBottom: '5px',
        paddingLeft: '16px',
        paddingRight: '16px',
        TextField: {
          backgroundColor: '#ffffff1a',
          labelColor: ColorManager.default.secondaryColor,
          inputColor: ColorManager.default.white
        },
        InputProps: {
          desktop: {
            style : {
              backgroundColor: 'none',
            },
          }
        }
      },
    });

    this.hotelrootstore.DatepickerStore.setUI({
      backgroundColor: '#ffffff1a',
      colorDate: ColorManager.default.white,
      borderDate: ColorManager.default.secondaryColor,
      Theme: {
        container: {
          width: '100%',
          height: '56px'
        },
      }
    });

    this.hotelrootstore.GuestStore.setUI({
      Theme: {
        container: {
            width: '100%',
            height: '56px'
          },
        backgroundColor: '#ffffff1a',
        textColor: ColorManager.default.white,
        labelColor: ColorManager.default.secondaryColor
      }
    });
  }

  public setupSocket(location: H.Location) {
    if (isClient) {
      const apiRequset = HotelManager.default.paramforsearch(location, this.Row, this.orderDir);
      SocketManager.default.socket?.disconnect();
      SocketManager.default.initializeSocket();
      SocketManager.default.socket!.on('searchHotel', (searchResponse: any[]) => {
        setTimeout(async () => {
          this.setsearchSocket(
            _.values(
              _.mapKeys(searchResponse, (v) => v.hotel_id)
            ).map((v) => new HotelListModel(v))
          );
        });
      });
      SocketManager.default.socket!.on('doneSearchHotelList', (searchResponse: any) => {
        this.setDataComplete(true);
      });
      SocketManager.default.socket!.emit('searchHotel', apiRequset);
      SocketManager.default.socket!.emit('doneSearchHotelList');
    }
  }

  @computed
  get returnSearch() {
    return this.searchModel;
  }

  @computed
  get returnLocation() {
    return {...this.locations};
  }

  @computed
  get returnSearchModel() {
    return this.searchModel;
  }

  @computed 
  get returnCountHotel() {
    return this.searchModel.length;
  }

  @computed 
  get returnCountHotelClass() {
    return _.countBy(this.searchModel, 'class');
  }

  @computed 
  get returnCountPayAtProperty() {
    return _.countBy(this.searchModel, 'blockDetail.pocilities.payAtProperty');
  }

  @computed 
  get returnCountCreditcardRequired() {
    return _.countBy(this.searchModel, 'creditcardRequired');
  }

  @computed 
  get returnMaxPriceHotel() {
    return ({..._.maxBy(this.searchModel, 'price')} as any).price;
  }
  @computed 
  get returnRow() {
    return this.Row;
  }

  @action.bound
  public onClickLoadmore() {
      setTimeout(async()=> {
        this.setHasLoadmore(false);
        this.setLoading(false);
        setTimeout(()=>{
          this.setRow((this.Row + 10));
        },300) 
      })
  }

  @action.bound 
  public setOpen(value: any) {
    this.open = value;
  }
  @action.bound 
  public setFirstRows(value: any) {
    this.firstRows = value;
  }
  @action.bound 
  public setStar(value: any) {
    this.star = value;
  }
  @action.bound 
  public setOrderDir(value: any) {
    this.orderDir = value;
  }
  @action.bound 
  public setRow(value: any) {
    this.Row = value;
  }
  @action.bound 
  public setOffsets(value: any) {
    this.offsets = value;
  }
  @action.bound 
  public setDataComplete(value: any) {
    this.dataComplete = value;
  }
  @action.bound 
  public setsearchSocket(value: HotelListModelInterface[]) {
    for (const values of value) {
        const filters = this.searchSocket.filter((v: HotelListModelInterface) => v.hotelId === values.hotelId);
        if (filters.length === 0) {
          this.searchSocket.push(values); 
        }
     }
    this.setsearchModel(this.searchSocket);
  }

  @action.bound
  public async setsearchModel(value: any) {
    this.searchModel = value;
  }

  @action.bound 
  public setlocations(value: any) {
    this.locations = value;
  }

  @action.bound 
  public setItems(value: any) {
    this.items = value;
  }
  @action.bound 
  public setItemsRender(value: any) {
    this.itemsRender = value;
  }
  @action.bound 
  public setLoading(value: any) {
    this.loading = value;
  }
  @action.bound 
  public setCheckReload(value: any) {
    this.checkReload = value;
  }
  @action.bound 
  public setHasLoadmore(value: any) {
    this.hasLoadmore = value;
  }
  @action.bound 
  public setMaxItemPrice(value: any) {
    this.maxItemPrice = value;
  }
  @action.bound 
  public setSort(value: any) {
    if (!_.isEqual({...this.sort}, value)) {
      this.sort = value;
    }
  }
  
  @action.bound 
  public setFilter(value: any) {
    if (!_.isEqual({...this.filter}, {...this.filter, ...value })) {
      this.filter = {...this.filter, ...value };
    }
  }

  @action.bound 
  public setHotelClass(value: any) {
    this.hotelClass = value;
  }

  @action.bound 
  public setPriceControl(value: any) {
    this.priceControl = value;
  }

  @action.bound 
  public setPriceCheckbox(value: IPriceRange[]) {
    this.priceCheckbox = value;
  }

  @action.bound 
  public setPriceSlider(value: any) {
    this.priceSlider = value;
  }

  @action
  public getAdultText() {
    return  ` ${i18n.t('hotel.search.adult')} ` + this.hotelrootstore.vAdult + ` ${i18n.t('hotel.search.adult.classifier')} ` ;
  }

  @action
  public getRoomText() {
    return  `` + this.hotelrootstore.vRoom + ` ${i18n.t('hotel.search.room')} ` ;
  }

  @action
  public getChildText() {
    return this.hotelrootstore.vChild !== 0 ? ` ${i18n.t('hotel.search.child')} ` + this.hotelrootstore.vChild + ` ${i18n.t('hotel.search.adult.classifier')} `  : '';
  }

  @action
  public getBookingDateText() {
    const startDate =  formatDate(this.hotelrootstore.vDatepicker.startDate);
    const endDate =  formatDate(this.hotelrootstore.vDatepicker.endDate, true);
    const label =  startDate + ' - ' + endDate + ' ' ;
    return label;
  }
}

export default ListStore;