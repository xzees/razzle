import _ from 'lodash';

class UrlModel {
  dpi: number;
  height: number;
  resource: string;
  sizeType: string;
  width: number;

  constructor(json: any) {
    this.dpi = _.get(json, 'dpi');
    this.height = _.get(json, 'height');
    this.resource = _.get(json, 'resource');
    this.sizeType = _.get(json, 'sizeType');
    this.width = _.get(json, 'width');
  }
}

export default UrlModel;
