import IsMobile from 'modules/hotel/interface/Component/IsMobile';

export default interface TitleInterface extends IsMobile {
    LinkRoomlist?: () => void;
    propName: string;
}