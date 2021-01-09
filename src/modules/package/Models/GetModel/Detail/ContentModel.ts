import _ from 'lodash';
import FeatureGroupModel from './FeatureGroupModel';
import LocationModel from './LocationModel';
import MediaModel from '../MediaModel';
import SegmentationGroupModel from './SegmentationGroupsModel';
class ContentModel {
  activityCode: string;
  activityFactsheetType: string;
  activityId: number;
  contentId: string;
  countries: any[];
  description: string;
  detailedInfo: any[];
  featureGroups: FeatureGroupModel[];
  id: number;
  location: LocationModel;
  media: MediaModel;
  name: string;
  segmentationGroups: SegmentationGroupModel[];

  constructor(json: any) {
    this.id = _.get(json, 'id');
    this.activityId = _.get(json, 'activityId');
    this.activityCode = _.get(json, 'activityCode');
    this.activityFactsheetType = _.get(json, 'activityFactsheetType');
    this.contentId = _.get(json, 'contentId');
    this.countries = _.get(json, 'countries');
    this.description = _.get(json, 'description');
    this.detailedInfo = _.get(json, 'detailedInfo');
    this.featureGroups = _.get(json, 'featureGroups');
    this.location = _.get(json, 'location');
    this.media = _.get(json, 'media');
    this.name = _.get(json, 'name');
    this.segmentationGroups = _.get(json, 'segmentationGroups');
  }
}

export default ContentModel;
