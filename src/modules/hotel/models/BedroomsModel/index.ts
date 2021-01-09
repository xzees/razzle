import _ from 'lodash';
import BedConfigurationsModel, { BedConfigurationsModelInterface } from '../BedConfigurationsModel';

export interface BedroomsModelInterface {
    bedConfigurations: BedConfigurationsModelInterface[];
    description: string;
    name: string;
}

class BedroomsModel {
    
    public bedConfigurations: BedConfigurationsModelInterface[];
    public description: string;
    public name: string;
    
    constructor(json: any) {
        this.description = _.get(json, 'description') || '';
        this.name = _.get(json, 'name') || '';
        this.bedConfigurations = (_.get(json, 'bed_configurations') || [])
        .map((v: any) => new BedConfigurationsModel(v));
    }
}

export default BedroomsModel;