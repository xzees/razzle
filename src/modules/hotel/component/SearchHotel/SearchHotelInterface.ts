
import LocationInterface from 'modules/hotel/interface/Component/Location';
import isMobileInterface from 'modules/hotel/interface/Component/IsMobile';
import HotelListModelInterface from 'modules/hotel/interface/Models/HotelListModelInterface';
export default interface IsearchItem extends LocationInterface, isMobileInterface {
    hotelListModel: HotelListModelInterface;
    index: number;
}