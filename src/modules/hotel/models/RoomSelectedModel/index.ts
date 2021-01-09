import _ from 'lodash';
import BlockModel from 'modules/hotel/models/BlockModel';
import HotelInfoModel from '../HotelInfoModel';

class RoomSelectedModel {
    public roomId: number;
    public blockId: string;
    public amount: number;

    constructor(selected: RoomSelectedModel) {
        this.roomId = selected.roomId  || 0;
        this.blockId = selected.blockId || '';
        this.amount = selected.amount || 0;

    }
}
export default RoomSelectedModel;
