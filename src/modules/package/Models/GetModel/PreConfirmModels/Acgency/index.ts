import _ from 'lodash';

class index {
  branch: number;
  code: number;
  comments: string;
  sucursal: Sucursal;
  constructor(json: any) {
    this.branch = _.get(json, 'branch');
    this.code = _.get(json, 'code');
    this.comments = _.get(json, 'comments');
    this.sucursal = _.get(json, 'sucursal');
  }
}
export default index;

class Sucursal {
  city: string;
  email: string;
  fax: string;
  name: string;
  phone: string;
  region: string;
  street: string;
  zip: string;
  constructor(json: any) {
    this.city = _.get(json, 'city');
    this.email = _.get(json, 'email');
    this.fax = _.get(json, 'fax');
    this.name = _.get(json, 'name');
    this.phone = _.get(json, 'phone');
    this.region = _.get(json, 'region');
    this.street = _.get(json, 'street');
    this.zip = _.get(json, 'zip');
  }
}
