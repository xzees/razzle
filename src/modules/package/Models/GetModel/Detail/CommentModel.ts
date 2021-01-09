import _ from 'lodash';

class CommentModel {
  type: string;
  text: string;

  constructor(json: any) {
    this.type = _.get(json, 'type');
    this.text = _.get(json, 'text');
  }
}

export default CommentModel;
