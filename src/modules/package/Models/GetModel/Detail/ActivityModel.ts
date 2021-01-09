import _ from 'lodash';
import AmountFromModel from './AmountFromModel';
import ContentModel from './ContentModel';
import CountryModel from '../CountryModel';
import OperationDayModels from './OperationDayModel';
import TagsModel from './TagsModel';

class ActivityModel {
  code: string;
  name: string;
  activityCode: string;
  amountsFrom: AmountFromModel[];
  bookingAmount: number;
  complete: number;
  creationTime: string;
  currency: string;
  currencyName: string;
  language: string;
  operationDays: OperationDayModels[];
  tags: TagsModel[];
  type: string;
  country: CountryModel;
  content: ContentModel;

  constructor(json: any) {
    this.code = _.get(json, 'code');
    this.name = _.get(json, 'name');
    this.activityCode = _.get(json, 'activityCode');
    this.amountsFrom = _.get(json, 'amountsFrom');
    this.bookingAmount = _.get(json, 'bookingAmount');
    this.complete = _.get(json, 'complete');
    this.creationTime = _.get(json, 'creationTime');
    this.currency = _.get(json, 'currency');
    this.currencyName = _.get(json, 'currencyName');
    this.language = _.get(json, 'language');
    this.operationDays = _.get(json, 'operationDays');
    this.country = _.get(json, 'country');
    this.content = _.get(json, 'content');
    this.tags = _.get(json, 'tags');
    this.type = _.get(json, 'type');
  }
}

export default ActivityModel;
