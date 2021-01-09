import _ from 'lodash';
import FacilitiesAbstract from 'modules/hotel/models/Facilities/FacilitiesAbstract';

class Facilities extends FacilitiesAbstract {
    constructor(json: any) {
        super(json);
    }
}

export default Facilities;
