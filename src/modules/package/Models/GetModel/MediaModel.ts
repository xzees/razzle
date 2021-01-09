import _ from 'lodash';
import ImageModel from './ImageModel';

class MediaModel {
  images: ImageModel[];

  constructor(json: any) {
    this.images = _.get(json, 'images');
  }
}

export default MediaModel;
