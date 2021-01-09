import _ from 'lodash';

class RoomSizeModel {
    
    public metreSquare: number;

    constructor(json: any) {
        this.metreSquare = _.get(json, 'metre_square');
    }
}

export default RoomSizeModel;