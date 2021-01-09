import _ from 'lodash';
import PocilitiesModelInterface from 'modules/hotel/models/PocilitiesModel/PocilitiesModelInterface';

export default abstract class PocilitiesModelAbstract implements PocilitiesModelInterface {
    public breakFast: boolean;
    public freeCancel: boolean;
    public payAtProperty: boolean;

    constructor(json: any) {
        this.breakFast = _.get(json, 'breakFast') || false;
        this.freeCancel = _.get(json, 'freeCancel') || false;
        this.payAtProperty = _.get(json, 'payAtProperty') || false;
    }
}