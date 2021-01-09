import _ from 'lodash';
import FacilitiesInterface from 'modules/hotel/models/Facilities/FacilitiesInterface';

export default abstract class FacilitiesAbstract implements FacilitiesInterface {
    public facilityTypeId: number;
    public icon: string;
    public id: number;
    public isPopular: boolean;
    public name: string;
    public translationNameEn: string;
    public translationNameTh: string;

    constructor(json: any) {
        this.facilityTypeId = _.get(json, 'facility_type_id');
        this.icon = _.get(json, 'icon');
        this.id = _.get(json, 'id');
        this.isPopular = _.get(json, 'is_popular');
        this.name = _.get(json, 'name');
        this.translationNameEn = _.get(json, 'translation_name_en');
        this.translationNameTh = _.get(json, 'translation_name_th');
    }
}