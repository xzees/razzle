import _ from 'lodash';

class index {
  email: string;
  mailing: string;
  name: string;
  surname: string;
  telephones: any[];
  title: string;
  constructor(json: any) {
    this.email = _.get(json, 'email');
    this.mailing = _.get(json, 'mailing');
    this.name = _.get(json, 'name');
    this.surname = _.get(json, 'surname');
    this.telephones = _.get(json, 'telephones');
    this.title = _.get(json, 'title');
  }
}
export default index;
