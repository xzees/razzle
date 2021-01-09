import BlockModelInterface from 'modules/hotel/models/BlockModel/BlockModelInterface';
import HotelPhotoModelInterface from 'modules/hotel/models/HotelPhotoModel/HotelPhotoModelInterface';

export default interface ImageInterface {
    parent_props: BlockModelInterface;
    room_photos: HotelPhotoModelInterface[];
    check: number;
    title: string;
    isMobile: boolean;
    coverImage: string;
    children?: any;
}