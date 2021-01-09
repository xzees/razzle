import RootStore from "stores";
import Parampath from "common/models/Parampath";
import TourModel from "modules/collective/Models/TourDetail/TourModel";

export interface TourDetailProps {
  stores?: RootStore;
  match?: Parampath;
  tourID?: number;
  tourDetail: TourModel;
  openDayPlan?: any;
  selectedDayPlan?: any;
  openPeriod?: any;
  selectedPeriod?: any;
  handleTabToggle?: any;
  isServer?: boolean;
  isClient?: any;
  isMobile?: boolean;
  periodDesktopScroll?: any;
  periodMobileScroll?: any;
}