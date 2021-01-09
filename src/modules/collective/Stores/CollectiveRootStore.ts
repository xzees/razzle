import _ from 'lodash'
import RootStore from 'stores';
import { observable, action } from 'mobx';
import i18n from 'utilities/I18n';
import homeListStore from '../pages/home/stores/homeListStore'
import CollectiveManage, { collectiveTLInterface, collectiveTLV2Interface } from '../Manager/CollectiveManage';

type KeyValue = {
  [key: string]: any
}

class HomeRootStore {

  @observable isPageLoading: boolean = false

  rootStore: RootStore
  homeListStore: homeListStore
  @observable endpointResult: KeyValue = observable<KeyValue>([])
  @observable tourList: any = observable<any>([]);
  @observable sortBy: any = "minPrice";

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    this.homeListStore = new homeListStore(this)
  }

  @action
  public async setTourList(value: any) {
    this.tourList = value;
  }
  @action
  public async setSortBy(value: any) {
    this.sortBy = value;
  }
  // async apiAutocomplete(param: string) {
  //   return await CollectiveManage.default.autocomplete({
  //     keyword: param,
  //     pageNo: 1,
  //     pageSize: 100
  //   })
  // }
  async apiAutocomplete(param: string) {
    return await CollectiveManage.default.autocomplete({ keyword: param })
  }

  async apiTourSEO(param: string) {
    return await CollectiveManage.default.getTourSEO({ tourCode: param })
  }
  // async apiTourList(param: string) {
  //   return await CollectiveManage.default.getList({ tourCode: param })
  // }
  async apiTourList(param: collectiveTLInterface) {
    return await CollectiveManage.default.getList(param)
  }
  async apiTourListV2(param: collectiveTLV2Interface) {
    return await CollectiveManage.default.getListV2(param)
  }

  async apiTourFilter(param: string) {
    return await CollectiveManage.default.getListFilter({ tourCode: param })
  }

  async apiTourRelated(param: string) {
    return await CollectiveManage.default.getListRelated({ tourCode: param })
  }

  async apiTourDetail(param: number) {
    return await CollectiveManage.default.getDetail({ id: param })
  }

  async apiTourRecommend(param: number) {
    return await CollectiveManage.default.getRecommend({ id: param })
  }

  get moduleMetadata() {
    return {
      title: i18n.t('hotel.title'),
      metadata: [
        {
          name: 'keywords',
          content: i18n.t('hotel.metadata.keywords')
        },
        {
          name: 'description',
          content: i18n.t('hotel.metadata.description')
        }
      ],
      h1: i18n.t('hotel.h1'),
    }
  }


  async init() {
    this.isPageLoading = true
    this.isPageLoading = false
  }
}

export default HomeRootStore