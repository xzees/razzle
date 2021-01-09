import _ from 'lodash';

class NearByLocationInside {
    public name: string; 
    public distance: number; 
    public userRatingsTotal: number;
    
    constructor(json: any) {
        this.name = _.get(json, 'name') || '';
        this.distance = _.get(json, 'distance') || '';
        this.userRatingsTotal = _.get(json, 'user_ratings_total') || '';
    }
}

export default NearByLocationInside;