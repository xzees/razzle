import _ from 'lodash';
import PopularPocilitiesModelInterface from 'modules/hotel/models/PopularPocilitiesModel/PopularPocilitiesModelInterface';

export default abstract class PopularPocilitiesModelAbstract implements PopularPocilitiesModelInterface {
    public cardRequired: boolean;
    public freeCancel: boolean;
    public payAtProperty: boolean;

    constructor(json: any) {
        this.cardRequired = _.get(json, 'cardRequired') || false;
        this.freeCancel = _.get(json, 'freeCancel') || false;
        this.payAtProperty = _.get(json, 'payAtProperty') || false;
    }
}