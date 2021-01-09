import _ from 'lodash';

class QuestionModel {
  code: string;
  text: string;
  required: boolean;

  constructor(json: any) {
    this.code = _.get(json, 'code');
    this.text = _.get(json, 'text');
    this.required = _.get(json, 'required');
  }
}

export default QuestionModel;
