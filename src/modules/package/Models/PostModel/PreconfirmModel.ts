import _ from 'lodash';
import ActivityModel from 'modules/package/Models/PostModel/ActivityModel';

class PreconfirmModel {
  activities: any[];
  clientReference: string;
  holder: Holder;
  language: string;
  constructor(json: any) {
    this.activities = _.get(json, 'activities');
    this.clientReference = _.get(json, 'clientReference');
    this.holder = _.get(json, 'holder');
    this.language = _.get(json, 'language');
  }
}
export default PreconfirmModel;

class Holder {
  address: string;
  age: number;
  country: string;
  email: string;
  mailing: boolean;
  name: string;
  surname: string;
  telephones: any[];
  title: string;
  zipCode: string;
  constructor(json: any) {
    this.address = _.get(json, 'address');
    this.age = _.get(json, 'age');
    this.country = _.get(json, 'country');
    this.email = _.get(json, 'email');
    this.mailing = _.get(json, 'mailing');
    this.name = _.get(json, 'name');
    this.surname = _.get(json, 'surname');
    this.telephones = _.get(json, 'telephones');
    this.title = _.get(json, 'title');
    this.zipCode = _.get(json, 'zipCode');
  }
}
