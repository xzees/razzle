import _ from 'lodash';
import HotelFacilitiesModelInterface from 'modules/hotel/models/HotelFacilitiesModel/HotelFacilitiesModelInterface';
import FacilitiesGroup from 'modules/hotel/models/FacilitiesGroup';
import FacilitiesGroupInterface from 'modules/hotel/models/FacilitiesGroup/FacilitiesGroupInterface';

export default abstract class HotelFacilitiesModelAbstract implements HotelFacilitiesModelInterface {
    public facilitiesGroup: FacilitiesGroupInterface;

    constructor(json: any) {
        this.facilitiesGroup = new FacilitiesGroup(_.get(json, 'facilitiesGroup'));
    }
}