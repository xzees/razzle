import _ from 'lodash';
import APIManager from 'common/Manager/APIManager';
import AutocompleteAPIRequest from '../APIRequest/AutocompleteAPIRequest';
import SEOAPIRequest from '../APIRequest/SEOAPIRequest';
import SEOAPIV2Request from '../APIRequest/SEOAPIV2Request';
import ListAPIRequest from '../APIRequest/ListAPIRequest';
import ListAPIV2Request from '../APIRequest/ListAPIV2Request';
import CategoryAPIRequest from '../APIRequest/CategoryAPIRequest';
import ListFilterAPIRequest from '../APIRequest/ListFilterAPIRequest';
import ListRelatedAPIRequest from '../APIRequest/ListRelatedAPIRequest';
import DetailAPIRequest from '../APIRequest/DetailAPIRequest';
import RecommendAPIRequest from '../APIRequest/RecommendAPIRequest';
import APIResponse from 'common/Manager/Models/API/APIRespones';
import AutocsAPIRequest from '../APIRequest/AutocsAPIRequest';
import DetailcsAPIRequest from '../APIRequest/DetailcsAPIRequest';
import ListcsAPIRequest from '../APIRequest/ListcsAPIRequest';

export interface collectiveATCInterface {
  keyword: string,
  pageNo: number,
  pageSize: number
}

export interface collectiveSEOInterface {
  tourCode: string,
  pageID: string,
}

export interface collectiveTLInterface {
  tourCode: string,
  pageSize: number,
  pageNo: number,
  sortBy: string,
}
export interface collectiveTLV2Interface {
  tourCode: string,
  pageSize: number,
  pageNo: number,
  sortBy: string,
  pageID: string,
}

class CollectiveManage {

  static default: CollectiveManage = new CollectiveManage()

  private constructor() { }

  // async autocomplete(param: collectiveATCInterface) {
  //   const apiRequest = new AutocompleteAPIRequest(param)
  //   const response = await APIManager.default.fetch(apiRequest)
  //   const data = new APIResponse(response)
  //   return data.data
  // }
  async autocomplete(param: any) {
    const apiRequest = new AutocsAPIRequest(param)
    const response = await APIManager.default.fetch(apiRequest)
    const data = new APIResponse(response)
    return data.data
  }

  async getTourSEO(param: any) {
    const apiRequest = new SEOAPIRequest(param)
    const response = await APIManager.default.fetch(apiRequest)
    const data = new APIResponse(response)
    return data.data
  }
  async getTourSEOV2(param: collectiveSEOInterface) {
    const apiRequest = new SEOAPIV2Request(param)
    const response = await APIManager.default.fetch(apiRequest)
    const data = new APIResponse(response)
    return data.data
  }
  // async getList(param: any) {
  //   const apiRequest = new ListcsAPIRequest(param)
  //   const response = await APIManager.default.fetch(apiRequest)
  //   const data = new APIResponse(response)
  //   return data.data
  // }
  async getList(param: collectiveTLInterface) {
    const apiRequest = new ListAPIRequest(param)
    const response = await APIManager.default.fetch(apiRequest)
    const data = new APIResponse(response)
    return data.data
  }
  async getListV2(param: collectiveTLV2Interface) {
    const apiRequest = new ListAPIV2Request(param)
    const response = await APIManager.default.fetch(apiRequest)
    const data = new APIResponse(response)
    return data.data
  }

  async getTourCategory(param: collectiveSEOInterface) {
    const apiRequest = new CategoryAPIRequest(param)
    const response = await APIManager.default.fetch(apiRequest)
    const data = new APIResponse(response)
    return data.data
  }

  async getListFilter(param: any) {
    const apiRequest = new ListFilterAPIRequest(param)
    const response = await APIManager.default.fetch(apiRequest)
    const data = new APIResponse(response)
    return data.data
  }

  async getListRelated(param: any) {
    const apiRequest = new ListRelatedAPIRequest(param)
    const response = await APIManager.default.fetch(apiRequest)
    const data = new APIResponse(response)
    return data.data
  }

  async getDetail(param: any) {
    const apiRequest = new DetailAPIRequest(param)
    const response = await APIManager.default.fetch(apiRequest)
    const data = new APIResponse(response)
    return data.data
  }

  async getRecommend(param: any) {
    const apiRequest = new RecommendAPIRequest(param)
    const response = await APIManager.default.fetch(apiRequest)
    const data = new APIResponse(response)
    return data.data
  }

  async fetchMeta() {
    return {
      title: "บริษัททัวร์คุณภาพ ชั้นนำ ท่องเที่ยวครบวงจร - ไทยทราเวลเซ็นเตอร์",
      metadata: [
        {
          name: 'keywords',
          content: "บริษัททัวร์คุณภาพ ชั้นนำ ท่องเที่ยวครบวงจร - ไทยทราเวลเซ็นเตอร์",
        },
        {
          name: 'description',
          content: "บริษัททัวร์คุณภาพ ชั้นนำ ท่องเที่ยวครบวงจร - ไทยทราเวลเซ็นเตอร์",
        }
      ],
      h1: "บริษัททัวร์คุณภาพ ชั้นนำ ท่องเที่ยวครบวงจร - ไทยทราเวลเซ็นเตอร์",
    }
  }
}

export default CollectiveManage