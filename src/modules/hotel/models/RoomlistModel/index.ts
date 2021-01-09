import _ from 'lodash';
import BlockModel from 'modules/hotel/models/BlockModel';
import HotelInfoModel from '../HotelInfoModel';

class RoomlistModel {
    public block: BlockModel[][];
    public hotelInfo: HotelInfoModel; 
    public canPayNow: boolean;
    public ccRequired: boolean;
    public checkin: string;
    public checkout: string;
    public cvcRequired: boolean;
    public hotelId: number;
    public hotelUrl: string;
    public isFlashDeal: boolean;

    constructor(json: any) {
        this.block = (_.get(json, 'block') || []).map((v: any) => {
            return (v || []).map((value: any) => new BlockModel(value));
        });
        this.canPayNow = _.get(json, 'can_pay_now') || false;
        this.ccRequired = _.get(json, 'cc_required') || false;
        this.checkin = _.get(json, 'checkin') || '';
        this.checkout = _.get(json, 'checkout') || '';
        this.cvcRequired = _.get(json, 'cvc_required')  || false;
        this.hotelId = _.get(json, 'hotel_id')  || 0;
        this.hotelUrl = _.get(json, 'hotel_url') || '';
        this.isFlashDeal = _.get(json, 'is_flash_deal') || false;
        this.hotelInfo = new HotelInfoModel(_.get(json, 'hotel_info'));

    }
}
export default RoomlistModel;
