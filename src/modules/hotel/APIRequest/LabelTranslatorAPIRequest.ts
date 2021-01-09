import _ from 'lodash';
import APIRequestInterface  from 'common/Manager/interface/APIRequest';
import { HTTPMethodEnum } from 'common/Manager/Enumeration/HTTPMethodEnum';
import APIConfig from 'common/Config/APIConfig';
import LabelTranslatorAPIInterface from 'modules/hotel/interface/API/LabelTranslatorAPIInterface';

class LabelTranslatorAPIRequest implements APIRequestInterface {

  public method: HTTPMethodEnum = HTTPMethodEnum.POST; 
  public url: string;
  public query: any;
  public endpoint: string = APIConfig.hotel.label;

  public brandIdentifier: string;
  public productIdentifier: string;
  public platformType: string;

  constructor(query: LabelTranslatorAPIInterface) {
    this.url = this.endpoint;
    this.brandIdentifier = query.brandIdentifier;
    this.productIdentifier = query.productIdentifier;
    this.platformType = query.platformType;
  }

  public makeBody() {
    return {
      brandIdentifier: this.brandIdentifier,
      productIdentifier: this.productIdentifier,
      platformType: this.platformType,
    };
  }
  public makeHeader() {
    return {};
  }
  public makeQuery() {  
    return {};
  }
}

export default LabelTranslatorAPIRequest;