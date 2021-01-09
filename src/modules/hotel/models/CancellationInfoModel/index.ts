import _ from 'lodash';
import CancellationInfoModelAbstract from 'modules/hotel/models/CancellationInfoModel/CancellationInfoModelAbstract';

class CancellationInfoModel extends CancellationInfoModelAbstract {

    constructor(json: any) {
        super(json);
    }
}

export default CancellationInfoModel;