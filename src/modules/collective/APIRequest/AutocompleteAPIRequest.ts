import _ from 'lodash'
import APIRequestInterface from 'common/Manager/interface/APIRequest'
import ConstantManager from 'common/Manager/ConstantManager'
import { HTTPMethodEnum } from 'common/Manager/Enumeration/HTTPMethodEnum'
import APIConfig from 'common/Config/APIConfig';
import { collectiveATCInterface } from '../Manager/CollectiveManage';

class AutocompleteAPIRequest implements APIRequestInterface {

  method: HTTPMethodEnum = HTTPMethodEnum.GET
  url: string = APIConfig.collective.autoComplete

  keyword: any
  pageNo: any
  pageSize: any
  query: any

  constructor(query: { keyword: string }) {
    this.url = this.url + '?keyword=' + encodeURI( query.keyword)
  }

  // constructor(keyword: collectiveATCInterface) {
  //   this.keyword = keyword
  //   this.url = this.url
  // }

  makeHeader() {
    return {
      // 'dataType': 'jsonp',
      // 'Authorization': 'Basic QWRtaW46',
      // 'Content-Type': 'application/json'
    }
  }
  makeBody() {
    return {
    //   keyword: this.keyword.keyword,
    //   pageNo: this.keyword.pageNo,
    //   pageSize: this.keyword.pageSize
    }
  }
  makeQuery() { }
}

export default AutocompleteAPIRequest