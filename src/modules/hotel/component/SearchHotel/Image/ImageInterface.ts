import IsMobile from 'modules/hotel/interface/Component/IsMobile';
import HotelListModelInterface from 'modules/hotel/interface/Models/HotelListModelInterface';

export default interface ImageInterface extends IsMobile {
    check: number;
    onClick: () => void;
    title: string;
    coverImage: string;
    isLarge?: boolean;
    parent_props?: HotelListModelInterface
}