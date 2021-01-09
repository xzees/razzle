import _ from 'lodash';
import BlockModelInterface from 'modules/hotel/models/BlockModel/BlockModelInterface';
import CancellationInfoModel from 'modules/hotel/models/CancellationInfoModel';
import CancellationInfoModelInterface from 'modules/hotel/models/CancellationInfoModel/CancellationInfoModelInterface';
import IncrementalPriceModel from 'modules/hotel/models/IncrementalPriceModel';
import IncrementalPriceModelInterface from 'modules/hotel/models/IncrementalPriceModel/IncrementalPriceModelInterface';
import RoomInfoModel from 'modules/hotel/models/RoomInfoModel';
import RoomInfoModelInterface from 'modules/hotel/models/RoomInfoModel/RoomInfoModelInterface';
import PocilitiesModel from 'modules/hotel/models/PocilitiesModel';
import PocilitiesModelInterface from 'modules/hotel/models/PocilitiesModel/PocilitiesModelInterface';
import PaymentTermsModel from 'modules/hotel/models/PaymentTermsModel';
import PaymentTermsModelInterface from 'modules/hotel/models/PaymentTermsModel/PaymentTermsModelInterface';
import HotelPhotoModel from 'modules/hotel/models/HotelPhotoModel';
import HotelPhotoModelInterface from 'modules/hotel/models/HotelPhotoModel/HotelPhotoModelInterface';
import HotelFacilitiesModel from 'modules/hotel/models/HotelFacilitiesModel';
import HotelFacilitiesModelInterface from 'modules/hotel/models/HotelFacilitiesModel/HotelFacilitiesModelInterface';

export default abstract class BlockModelAbstract implements BlockModelInterface {
    public addons: any[];
    public cancellationInfo: CancellationInfoModelInterface[];
    public incrementalPrice: IncrementalPriceModelInterface[];
    public roomInfo: RoomInfoModelInterface;
    public pocilities: PocilitiesModelInterface;
    public paymentTerms: PaymentTermsModelInterface;
    public roomPhotos: HotelPhotoModelInterface[];
    public roomFacilities: HotelFacilitiesModelInterface[];
    public allInclusive: boolean;
    public blockId: string;
    public breakfastIncluded: boolean;
    public ccRequired: boolean;
    public dealTagging: string;
    public depositRequired: boolean;
    public dinnerIncluded: boolean;
    public fullBoard: boolean;
    public halfBoard: boolean;
    public isFlashDeal: boolean;
    public lunchIncluded: boolean;
    public maxChildrenFree: number;
    public maxChildrenfreeAge: number;
    public maxOccupancy: number;
    public mealplanDescription: string;
    public name: string;
    public numberOfRoomsLeft: number;
    public photos: string;
    public refundable: boolean;
    public refundableUntil: string;
    public roomDescription: string;
    public roomId: number;
    public roomName: string;
    public smoking: number;
    public taxes: string;
    public selectedAmount: number;

    constructor(json: any) {
        this.allInclusive = _.get(json, 'all_inclusive');
        this.blockId = _.get(json, 'block_id');
        this.breakfastIncluded = _.get(json, 'breakfast_included');
        this.ccRequired = _.get(json, 'cc_required');
        this.dealTagging = _.get(json, 'deal_tagging');
        this.depositRequired = _.get(json, 'deposit_required');
        this.dinnerIncluded = _.get(json, 'dinner_included');
        this.fullBoard = _.get(json, 'full_board');
        this.halfBoard = _.get(json, 'half_board');
        this.isFlashDeal = _.get(json, 'is_flash_deal');
        this.lunchIncluded = _.get(json, 'lunch_included');
        this.maxChildrenFree = _.get(json, 'max_children_free');
        this.maxChildrenfreeAge = _.get(json, 'max_children_free_age');
        this.maxOccupancy = _.get(json, 'max_occupancy');
        this.mealplanDescription = _.get(json, 'mealplan_description');
        this.name = _.get(json, 'name');
        this.numberOfRoomsLeft = _.get(json, 'number_of_rooms_left');
        this.photos = _.get(json, 'photos');
        this.refundable = _.get(json, 'refundable');
        this.refundableUntil = _.get(json, 'refundable_until');
        this.roomDescription = _.get(json, 'room_description');
        this.roomId = _.get(json, 'room_id');
        this.roomName = _.get(json, 'room_name');
        this.smoking = _.get(json, 'smoking');
        this.taxes = _.get(json, 'taxes');
        this.cancellationInfo = (_.get(json, 'cancellation_info') || []).map((v: any) => new CancellationInfoModel(v));
        this.incrementalPrice = (_.get(json, 'incremental_price') || []).map((v: any) => new IncrementalPriceModel(v));
        this.addons = (_.get(json, 'addons') || []);
        this.roomInfo = new RoomInfoModel(_.get(json, 'room_info'));
        this.pocilities = new PocilitiesModel(_.get(json, 'pocilities'));
        this.paymentTerms = new PaymentTermsModel(_.get(json, 'payment_terms'));
        this.roomPhotos = (_.get(json, 'room_photos') || []).map((v: any) => new HotelPhotoModel(v));
        this.roomFacilities = (_.get(json, 'room_facilities') || []).map((v: any) => new HotelFacilitiesModel(v));
        this.selectedAmount = 0;
    }

    public setSelectedAmount(value: number) {}


}