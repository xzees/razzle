import _ from 'lodash';

class SegmentModel {
  code: number;
  name: string;

  constructor(json: any) {
    this.code = _.get(json, 'code');
    this.name = _.get(json, 'name');
  }
}

export default SegmentModel;
