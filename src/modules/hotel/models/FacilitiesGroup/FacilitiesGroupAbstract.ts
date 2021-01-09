import _ from 'lodash';
import FacilitiesGroupInterface from 'modules/hotel/models/FacilitiesGroup/FacilitiesGroupInterface';
import FacilitiesInterface from 'modules/hotel/models/Facilities/FacilitiesInterface';
import Facilities from 'modules/hotel/models/Facilities';

export default abstract class FacilitiesGroupAbstract implements FacilitiesGroupInterface {
    
    public facilities: FacilitiesInterface[];
    public facilityTypeId: number;
    public icon: string;
    public id: number;
    public name: string;
    public translationNameEn: string;
    public translationNameTh: string;

    constructor(json: any) {
        this.facilities = (_.get(json, 'facilities') || []).map((v: any) => new Facilities(v));
        this.facilityTypeId = _.get(json, 'facility_type_id') || 0;
        this.icon = _.get(json, 'icon') || '';
        this.id = _.get(json, 'id') || 0;
        this.name = _.get(json, 'name') || '';
        this.translationNameEn = _.get(json, 'translation_name_en') || '';
        this.translationNameTh = _.get(json, 'translation_name_th') || '';
    }
}