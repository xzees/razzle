import FacilitiesInterface from 'modules/hotel/models/Facilities/FacilitiesInterface';

export default interface FacilitiesGroupInterface {
    facilities: FacilitiesInterface[];
    facilityTypeId: number;
    icon: string;
    id: number;
    name: string;
    translationNameEn: string;
    translationNameTh: string;
}