import _ from 'lodash';
import AmountDetail from 'modules/package/Models/GetModel/PreConfirmModels/Activities';
import CancellationPolicies from 'modules/package/Models/GetModel/PreConfirmModels/Activities/CancellationPolicies';
import Comments from 'modules/package/Models/GetModel/PreConfirmModels/Activities/Comments';
import ExtraData from 'modules/package/Models/GetModel/PreConfirmModels/Activities/ExtraData';
import Paxes from 'modules/package/Models/GetModel/PreConfirmModels/Activities/Paxes';
import Questions from 'modules/package/Models/GetModel/PreConfirmModels/Activities/Questions';
import ContactInfo from 'modules/package/Models/GetModel/PreConfirmModels/Activities/ContactInfo';
class index {
  activityReference: string;
  agencyCommission: AgencyCommission;
  amountDetail: AmountDetail;
  cancellationPolicies: CancellationPolicies[];
  code: string;
  comments: Comments[];
  contactInfo: ContactInfo;
  dateFrom: string;
  dateTo: string;
  extraData: ExtraData[];
  id: string;
  modality: Modality;
  name: string;
  paxes: Paxes[];
  providerInformation: ProviderInformation;
  questions: Questions[];
  status: string;
  supplier: Supplier;
  type: string;
  constructor(json: any) {
    this.activityReference = _.get(json, 'activityReference');
    this.agencyCommission = _.get(json, 'agencyCommission');
    this.amountDetail = _.get(json, 'amountDetail');
    this.cancellationPolicies = _.get(json, 'cancellationPolicies');
    this.code = _.get(json, 'code');
    this.comments = _.get(json, 'comments');
    this.contactInfo = _.get(json, 'contactInfo');
    this.dateFrom = _.get(json, 'dateFrom');
    this.dateTo = _.get(json, 'dateTo');
    this.extraData = _.get(json, 'extraData');
    this.id = _.get(json, 'id');
    this.modality = _.get(json, 'modality');
    this.name = _.get(json, 'name');
    this.paxes = _.get(json, 'paxes');
    this.providerInformation = _.get(json, 'providerInformation');
    this.questions = _.get(json, 'questions');
    this.status = _.get(json, 'status');
    this.supplier = _.get(json, 'supplier');
    this.type = _.get(json, 'type');
  }
}
export default index;

class AgencyCommission {
  amount: number;
  percentage: number;
  vatAmount: number;
  constructor(json: any) {
    this.amount = _.get(json, 'amount');
    this.percentage = _.get(json, 'percentage');
    this.vatAmount = _.get(json, 'vatAmount');
  }
}

class Modality {
  amountUnitType: string;
  code: string;
  name: string;
  constructor(json: any) {
    this.amountUnitType = _.get(json, 'amountUnitType');
    this.code = _.get(json, 'code');
    this.name = _.get(json, 'name');
  }
}

class ProviderInformation {
  name: string;
  constructor(json: any) {
    this.name = _.get(json, 'name');
  }
}

class Supplier {
  name: string;
  vatNumber: string;
  constructor(json: any) {
    this.name = _.get(json, 'name');
    this.vatNumber = _.get(json, 'vatNumber');
  }
}
