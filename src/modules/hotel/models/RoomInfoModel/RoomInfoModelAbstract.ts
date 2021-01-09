import RoomSizeModel from 'modules/hotel/models/RoomSizeModel';
import BedroomsModel from 'modules/hotel/models/BedroomsModel';
import RoomInfoModelInterface from './RoomInfoModelInterface';
import _ from 'lodash';

export default abstract class RoomInfoModelAbstract implements RoomInfoModelInterface {
    
    public bedrooms: BedroomsModel[];
    public roomSize: RoomSizeModel;
    public bathroomCount: number;
    public bedroomCount: number;
    public maxPersons: number;
    public roomType: string;
    public roomTypeId: number;

    constructor(json: any) {
        this.bathroomCount = _.get(json, 'bathroom_count');
        this.bedroomCount = _.get(json, 'bedroom_count');
        this.maxPersons = _.get(json, 'max_persons');
        this.roomType = _.get(json, 'room_type');
        this.roomTypeId = _.get(json, 'room_type_id');
        this.roomSize = _.get(json, 'room_size');
        this.bedrooms = (_.get(json, 'bedrooms') || []).map((v: any) => new BedroomsModel(v));
    }
}