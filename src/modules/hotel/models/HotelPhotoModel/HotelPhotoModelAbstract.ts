import _ from 'lodash';
import HotelPhotoModelInterface from 'modules/hotel/models/HotelPhotoModel/HotelPhotoModelInterface';

export default abstract class HotelPhotoModelAbstract implements HotelPhotoModelInterface {
    public mainPhoto: boolean;
    public urlMax300: string;
    public urlOriginal: string;
    public urlSquare60: string;

    constructor(json: any) {
        this.mainPhoto = _.get(json, 'main_photo') || '';
        this.urlMax300 = _.get(json, 'url_max300') || '';
        this.urlOriginal = _.get(json, 'url_original') || '';
        this.urlSquare60 = _.get(json, 'url_square60') || '';
    }
}