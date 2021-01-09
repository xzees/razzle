import _ from 'lodash';
import MediaModel from '../MediaModel';

class ContentModel {
  name: string;
  description: string;
  media: MediaModel;

  constructor(json: any) {
    this.name = _.get(json, 'name');
    this.description = _.get(json, 'description');
    this.media = _.get(json, 'media');
  }
}

export default ContentModel;
