import _ from 'lodash';
import BlockModelAbstract from 'modules/hotel/models/BlockModel/BlockModelAbstract';
import { observable, computed, reaction, action } from 'mobx';

class BlockModel extends BlockModelAbstract {
    constructor(json: any) {
        super(json);
    }

    @action.bound 
    public setSelectedAmount(value: number) {
        this.selectedAmount = value;
    }
}

export default BlockModel;