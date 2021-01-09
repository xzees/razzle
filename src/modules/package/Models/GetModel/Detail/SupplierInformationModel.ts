import _ from 'lodash';

class SupplierInformationModel {
  name: string;
  vatNumber: string;

  constructor(json: any) {
    this.name = _.get(json, 'name');
    this.vatNumber = _.get(json, 'vatNumber');
  }
}

export default SupplierInformationModel;
