import _ from 'lodash';

class DurationModel {
  value: number;
  metric: string;

  constructor(json: any) {
    this.value = _.get(json, 'value');
    this.metric = _.get(json, 'metric');
  }
}

export default DurationModel;
