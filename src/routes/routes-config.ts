import TestPage from "modules/main/pages/TestPage";
import Loadable from "react-loadable";
import Hotelroute from 'modules/hotel/route'
import CollectivePage from 'modules/collective/route'
import HotelPage from 'modules/hotel/route';
import { RouteConfig } from "./RouteConfigType";



const renderLoadableComponents = (component: any) => {
  return Loadable({
    loader: () => component,
    loading: () => null,
  });
};

export default () =>
  [
    // {
    //   path: "/",
    //   label: "Test Page",
    //   exact: true,
    //   component: TestPage,
    //   showInNavigationBar: true,
    // },
    // {
    //   path: "/package",
    //   label: "package",
    //   exact: false,
    //   component: renderLoadableComponents(import(/* webpackChunkName: "sightseeing" */ "modules/package/routes")),
    //   showInNavigationBar: true,
    // },
    // {
    //   path: "/collective",
    //   label: "collective",
    //   exact: false,
    //   // component: renderLoadableComponents(import( /* webpackChunkName: "collective" */ "modules/collective/route")),
    //   component: CollectivePage,
    //   showInNavigationBar: true,
    // },
    // {
    //   path: "/hotel",
    //   label: "hotel",
    //   exact: false,
    //   // component: renderLoadableComponents(import( /* webpackChunkName: "hotel" */  "modules/hotel/route")),
    //   component: HotelPage,
    //   showInNavigationBar: true,
    // }
  ] as RouteConfig[];
