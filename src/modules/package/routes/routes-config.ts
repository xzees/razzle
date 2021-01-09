import landingpages from 'modules/package/pages/landingpages';
import DetailTourFull from 'modules/package/Api_Ex/DetailTourFull';
import labelAll from 'modules/package/Api_Ex/labelAll';
import ListTour from 'modules/package/Api_Ex/ListTour';

import Loadable from 'react-loadable';
export type RouteConfig = {
  path: string;
  label: string;
  absolutePath?: string;
  exact: boolean;
  component: any;
  showInNavigationBar: boolean;
};

const renderLoadableComponents = (component: any) => {
  return Loadable({
    loader: () => component,
    loading: () => null,
  });
};

export default () =>
  [
    {
      path: '/package/',
      // label: i18n.t('common.main'),
      label: 'package',
      exact: true,
      component: landingpages,
      showInNavigationBar: true,
    },
    {
      path: '/package/search',
      label: 'package',
      exact: true,
      component: renderLoadableComponents(
        import(
          /* webpackChunkName: "searchPackage" */ 'modules/package/pages/search'
        )
      ),
      showInNavigationBar: true,
    },
    {
      path: '/package/activity/detail/:activityCode',
      label: 'package',
      exact: true,
      component: renderLoadableComponents(
        import(/* webpackChunkName: "detail" */ 'modules/package/pages/detail')
      ),
      showInNavigationBar: true,
    },
    // {
    //   path: "/package/checkout",
    //   label: "package",
    //   exact: true,
    //   component: renderLoadableComponents(
    //     import(
    //       /* webpackChunkName: "checkout" */ "modules/package/pages/checkout"
    //     )
    //   ),
    //   showInNavigationBar: true,
    // },
    // {
    //   path: "/package/checkout-summary/:referencecode",
    //   label: "package",
    //   exact: true,
    //   component: renderLoadableComponents(
    //     import(
    //       /* webpackChunkName: "checkout-summary" */ "modules/package/pages/checkout-summary"
    //     )
    //   ),
    //   showInNavigationBar: true,
    // },
    {
      path: '/package/Api_EX/label',
      // label: i18n.t('common.main'),
      label: 'package',
      exact: true,
      component: labelAll,
      showInNavigationBar: true,
    },
    {
      path: '/package/Api_EX/ListTour',
      // label: i18n.t('common.main'),
      label: 'package',
      exact: true,
      component: ListTour,
      showInNavigationBar: true,
    },
    {
      path: '/package/Api_EX/DetailTour',
      // label: i18n.t('common.main'),
      label: 'package',
      exact: true,
      component: DetailTourFull,
      showInNavigationBar: true,
    },
  ] as RouteConfig[];
