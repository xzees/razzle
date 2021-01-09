import GuestModel from './GuestModel';

class BlockModel{
    public blockId: string;
    public incrementPriceId:string;
    public guests:GuestModel[];

    constructor(block: BlockModel) {
        this.blockId = block.blockId;
        this.incrementPriceId = block.incrementPriceId;
        this.guests = block.guests;

    }
}
export default BlockModel;