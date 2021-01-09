import _ from 'lodash';
import HotelPoliciesModelInterface from 'modules/hotel/models/HotelPoliciesModel/HotelPoliciesModelInterface';

export default abstract class HotelPoliciesModelAbstract implements HotelPoliciesModelInterface {
    public content: string;
    public icon: string;
    public name: string;
    public type: string;

    constructor(json: any) {
        this.content = _.get(json, 'content') || '';
        this.icon = _.get(json, 'icon') || '';
        this.name = _.get(json, 'name') || '';
        this.type = _.get(json, 'type') || '';
    }
}