import _ from 'lodash';

class index {
  text: number;
  type: string;
  constructor(json: any) {
    this.text = _.get(json, 'text');
    this.type = _.get(json, 'type');
  }
}
export default index;
