import _ from 'lodash';
import MeetingPointModel from './MeetingPointModel';

class StartingPointModel {
  type: string;
  meetingPoint: MeetingPointModel;

  constructor(json: any) {
    this.type = _.get(json, 'type');
    this.meetingPoint = _.get(json, 'meetingPoint');
  }
}

export default StartingPointModel;
