import _ from 'lodash';
import Activities from 'modules/package/Models/GetModel/PreConfirmModels/Activities';
import Agency from 'modules/package/Models/GetModel/PreConfirmModels/Acgency';
import Holder from 'modules/package/Models/GetModel/PreConfirmModels/Holder';
import PaymentData from 'modules/package/Models/GetModel/PreConfirmModels/PaymentData';
class PreconfirmbookingModel {
  activities: Activities[];
  agency: Agency;
  clientReference: string;
  creationDate: string;
  currency: string;
  pendingAmount: number;
  reference: string;
  status: string;
  total: number;
  totalnet: number;
  holder: Holder;
  paymentData: PaymentData;
  constructor(json: any) {
    this.activities = _.get(json, 'activities');
    this.agency = _.get(json, 'agency');
    this.clientReference = _.get(json, 'clientReference');
    this.creationDate = _.get(json, 'creationDate');
    this.currency = _.get(json, 'currency');
    this.pendingAmount = _.get(json, 'pendingAmount');
    this.reference = _.get(json, 'reference');
    this.status = _.get(json, 'status');
    this.total = _.get(json, 'total');
    this.totalnet = _.get(json, 'totalnet');
    this.holder = _.get(json, 'holder');
    this.paymentData = _.get(json, 'paymentData');
  }
}
export default PreconfirmbookingModel;
