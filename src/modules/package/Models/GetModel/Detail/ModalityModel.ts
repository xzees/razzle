import _ from 'lodash';
import AmountFromModel from './AmountFromModel';
import CommentModel from './CommentModel';
import ContentModalityModel from './ContentModalityModel';
import ContractModel from './ContractModel';
import CountryModel from '../CountryModel';
import DurationModel from './DurationModel';
import OperationDayModels from './OperationDayModel';
import ProviderInformationModel from './ProviderInformationModel';
import QuestionModel from './QuestionModel';
import RateModel from './RateModel';
import SupplierInformationModel from './SupplierInformationModel';

class ModalityModel {
  activityCode: string;
  country: CountryModel;
  operationDays: OperationDayModels[];
  modalities: Modality[];
  currencyName: string;
  code: string;
  name: string;
  currency: string;
  type: string;
  content: ContentModalityModel;
  amountsFrom: AmountFromModel[];

  constructor(json: any) {
    this.activityCode = _.get(json, 'activityCode');
    this.country = _.get(json, 'country');
    this.operationDays = _.get(json, 'operationDays');
    this.modalities = _.get(json, 'modalities');
    this.currencyName = _.get(json, 'currencyName');
    this.amountsFrom = _.get(json, 'amountsFrom');
    this.content = _.get(json, 'content');
    this.code = _.get(json, 'code');
    this.name = _.get(json, 'name');
    this.currency = _.get(json, 'currency');
    this.type = _.get(json, 'type');
  }
}

export default ModalityModel;

export class Modality {
  code: string;
  name: string;
  duration: DurationModel;
  questions: QuestionModel[];
  comments: CommentModel[];
  supplierInformation: SupplierInformationModel;
  providerInformation: ProviderInformationModel;
  destinationCode: string;
  contract: ContractModel;
  amountsFrom: AmountFromModel[];
  rates: RateModel[];
  amountUnitType: string;
  uniqueIdentifier: string;

  constructor(json: any) {
    this.code = _.get(json, 'code');
    this.name = _.get(json, 'name');
    this.duration = _.get(json, 'duration');
    this.questions = _.get(json, 'questions');
    this.comments = _.get(json, 'comments');
    this.supplierInformation = _.get(json, 'supplierInformation');
    this.providerInformation = _.get(json, 'providerInformation');
    this.destinationCode = _.get(json, 'destinationCode');
    this.contract = _.get(json, 'contract');
    this.amountsFrom = _.get(json, 'amountsFrom');
    this.rates = _.get(json, 'rates');
    this.amountUnitType = _.get(json, 'amountUnitType');
    this.uniqueIdentifier = _.get(json, 'uniqueIdentifier');
  }
}
