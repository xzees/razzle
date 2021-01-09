import _ from 'lodash';

class index {
  answer: number;
  question: Question[];

  constructor(json: any) {
    this.answer = _.get(json, 'answer');
    this.question = _.get(json, 'question');
  }
}
export default index;

class Question {
  code: string;
  required: boolean;
  text: string;
  constructor(json: any) {
    this.code = _.get(json, 'code');
    this.required = _.get(json, 'required');
    this.text = _.get(json, 'text');
  }
}
