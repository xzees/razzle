import _ from 'lodash';
import SegmentModel from './SegmentModel';

class SegmentationGroupModel {
  code: number;
  name: string;
  segments: SegmentModel[];

  constructor(json: any) {
    this.code = _.get(json, 'code');
    this.name = _.get(json, 'name');
    this.segments = _.get(json, 'segments   ');
  }
}

export default SegmentationGroupModel;
