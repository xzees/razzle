import RootStore from "stores";
import Parampath from "common/models/Parampath";
import TourModel from "modules/collective/Models/TourList/TourModel";
import SEOModel from 'modules/collective/Models/TourList/SEOModel';

export interface TourListProps {
  stores?: RootStore;
  match?: Parampath;
  tourCode?: string;
  tourData: TourModel;
  index?: number;
  openQuestion?: any;
  selectedQuestion?: any;
  openPeriod?: any;
  selectedPeriod?: any;
  seoTour?: SEOModel;
  tourTotal?: number;
  handleSort?: any;
  isMobile?: boolean;
}