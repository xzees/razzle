// import Collective from 'modules/collective/pages/Home';
import CollectiveList from 'modules/collective/pages/List';
import CollectiveListFilter from 'modules/collective/pages/ListFilter';
// import CollectiveDetail from 'modules/collective/pages/Detail';
import Loadable from "react-loadable";

function renderLoadableComponents(component: any) {
  return Loadable({
    loader: () => component,
    loading: () => null,
  })
}

export default [
  // {
  //   path: "/",
  //   // label: "Tour",
  //   // exact: true,
  //   component: renderLoadableComponents(import(/* webpackChunkName: "CHome" */ "modules/collective/pages/Home")),
  //   // showInNavigationBar: true,
  // },
  {
    path: "/list/:tourCode",
    // component: renderLoadableComponents(import(/* webpackChunkName: "CList" */ "modules/collective/pages/List")),
    component: CollectiveList,
  },
  {
    path: "/list/:tourCode([^/]+/[^/]+)",
    // component: renderLoadableComponents(import(/* webpackChunkName: "CList" */ "modules/collective/pages/List")),
    component: CollectiveList,
  },
  {
    path: "/list-filter/:tourCode",
    // component: renderLoadableComponents(import(/* webpackChunkName: "CList" */ "modules/collective/pages/List")),
    component: CollectiveListFilter,
  },
  {
    path: "/list-filter/:tourCode([^/]+/[^/]+)",
    // component: renderLoadableComponents(import(/* webpackChunkName: "CList" */ "modules/collective/pages/List")),
    component: CollectiveListFilter,
  },
  {
    path: "/detail/:tourID/",
    component: renderLoadableComponents(import(/* webpackChunkName: "CDetail" */ "modules/collective/pages/Detail")),
  },
]