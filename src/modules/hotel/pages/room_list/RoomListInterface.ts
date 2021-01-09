import Store from 'modules/hotel/interface/Component/Store';
import Location from 'modules/hotel/interface/Component/Location';

export default interface RoomListInterface extends Location, Store {
    refName: string;
    refComp: React.MutableRefObject<HTMLElement | null>;
    isMobile?: boolean;
};