// import HotelMainPage from 'modules/hotel/route';
// import i18n from 'utilities/I18n';
import Home from "modules/sightseeing/pages/home";
// import FlightRoutes from 'modules/flight/route';
// import PackageRoutes from 'modules/package/route';
// import Loadable from 'react-loadable';

export type RouteConfig = {
  path: string;
  label: string;
  absolutePath?: string;
  exact: boolean;
  component: any;
  showInNavigationBar: boolean;
};

export default () =>
  [
    {
      path: "/package/",
      // label: i18n.t('common.main'),
      label: "package",
      exact: true,
      component: Home,
      showInNavigationBar: true,
    },
    // {
    //   path: "/package/label",
    //   // label: i18n.t('common.main'),
    //   label: "package",
    //   exact: true,
    //   component: labelAll,
    //   showInNavigationBar: true,
    // },
    // {
    //   path: "/package/ListTour",
    //   // label: i18n.t('common.main'),
    //   label: "package",
    //   exact: true,
    //   component: ListTour,
    //   showInNavigationBar: true,
    // },
    // {
    //   path: "/package/DetailTour",
    //   // label: i18n.t('common.main'),
    //   label: "package",
    //   exact: true,
    //   component: DetailTour,
    //   showInNavigationBar: true,
    // },
  ] as RouteConfig[];
