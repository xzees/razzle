import _ from 'lodash';
import FeatureGroupModel from './FeatureGroupModel';
import MediaModel from '../MediaModel';
import SegmentationGroupModel from './SegmentationGroupsModel';
import StartingPointModel from './StartingPointModel';

class ContentModalityModel {
  name: string;
  featureGroups: FeatureGroupModel[];
  location: StartingPointModel[];
  media: MediaModel;
  segmentationGroups: SegmentationGroupModel[];
  geolocation: Geolocation;
  contentId: string;
  description: string;

  constructor(json: any) {
    this.name = _.get(json, 'name');
    this.featureGroups = _.get(json, 'featureGroups');
    this.location = _.get(json, 'location');
    this.media = _.get(json, 'media');
    this.segmentationGroups = _.get(json, 'segmentationGroups');
    this.geolocation = _.get(json, 'geolocation');
    this.contentId = _.get(json, 'contentId');
    this.description = _.get(json, 'description');
  }
}

export default ContentModalityModel;
