import RoomSizeModel from 'modules/hotel/models/RoomSizeModel';
import BedroomsModel from 'modules/hotel/models/BedroomsModel';

export default interface RoomInfoModelInterface {
    bedrooms: BedroomsModel[];
    roomSize: RoomSizeModel;
    bathroomCount: number;
    bedroomCount: number;
    maxPersons: number;
    roomType: string;
    roomTypeId: number;
}
