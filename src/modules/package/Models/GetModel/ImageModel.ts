import _ from 'lodash';
import UrlModel from './UrlModel';

class ImageModel {
  mimeType: string;
  urls: UrlModel[];
  visualizationOrder: number;

  constructor(json: any) {
    this.mimeType = _.get(json, 'mimeType');
    this.urls = _.get(json, 'urls');
    this.visualizationOrder = _.get(json, 'visualizationOrder');
  }
}

export default ImageModel;
