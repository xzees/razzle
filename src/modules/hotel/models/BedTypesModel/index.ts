import _ from 'lodash';

export interface BedTypesModelInterface {
    configurationId: number;
    count: string;
    description: string;
    name: string;
}

class BedTypesModel implements BedTypesModelInterface {
    
    public configurationId: number;
    public count: string;
    public description: string;
    public name: string;

    constructor(json: any) {
        this.configurationId = _.get(json, 'configuration_id') || 0;
        this.count = _.get(json, 'count') || '';
        this.description = _.get(json, 'description') || '';
        this.name = _.get(json, 'name') || '';
    }
}

export default BedTypesModel;