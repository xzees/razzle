import _ from 'lodash';
import BedTypesModel, { BedTypesModelInterface } from 'modules/hotel/models/BedTypesModel';

export interface BedConfigurationsModelInterface {
    bedTypes: BedTypesModelInterface[];
}

class BedConfigurationsModel implements BedConfigurationsModelInterface {
    
    public bedTypes: BedTypesModelInterface[];
    constructor(json: any) {
        this.bedTypes = (_.get(json, 'bed_types') || []).map((v: any) => new BedTypesModel(v));
    }
}

export default BedConfigurationsModel;