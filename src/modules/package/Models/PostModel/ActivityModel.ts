import _ from 'lodash';

class ActivityModel {
  rateKey: string | undefined;
  from: string;
  to: string;
  answers: Answers[];
  paxes: Paxes[];
  constructor(json: any) {
    this.rateKey = _.get(json, 'rateKey');
    this.from = _.get(json, 'from');
    this.to = _.get(json, 'to');
    this.answers = _.get(json, 'answers');
    this.paxes = _.get(json, 'paxes');
  }
}
export default ActivityModel;

class Paxes {
  age: number;
  name: string;
  surname: string;
  type: string;
  constructor(json: any) {
    this.age = _.get(json, 'get');
    this.name = _.get(json, 'name');
    this.surname = _.get(json, 'surname');
    this.type = _.get(json, 'type');
  }
}

class Answers {
  answers: string;
  question: Question;
  constructor(json: any) {
    this.answers = _.get(json, 'answers');
    this.question = _.get(json, 'question');
  }
}

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
