import IsMobile from "modules/hotel/interface/Component/IsMobile";

export default interface PriceInterface extends IsMobile {
    onClick: () => void;
    identifier?: any;
    title?: string;
    price: number;
    discount?: any;
}