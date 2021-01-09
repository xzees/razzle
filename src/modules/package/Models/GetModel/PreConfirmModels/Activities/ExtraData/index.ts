import _ from 'lodash';

class index {
  id: number;
  value: string;
  constructor(json: any) {
    this.id = _.get(json, 'id');
    this.value = _.get(json, 'value');
  }
}
export default index;
