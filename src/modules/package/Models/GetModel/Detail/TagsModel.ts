import _ from 'lodash';

class TagsModel {
  activityId: number;
  fontColor: string;
  id: number;
  imageIcon: string;
  text: string;

  constructor(json: any) {
    this.id = _.get(json, 'id');
    this.activityId = _.get(json, 'activityId');
    this.fontColor = _.get(json, 'fontColor');
    this.imageIcon = _.get(json, 'imageIcon');
    this.text = _.get(json, 'text');
  }
}

export default TagsModel;
