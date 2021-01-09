import { Route, Switch, Router } from "react-router-dom";
import _ from "lodash";
import React from "react";
import history, { BASENAME } from "common/history";
import routesConfigs from "routes/routes-config";
import { inject, observer } from "mobx-react";
import qs from "query-string";
import RootStore from "stores";
import Loadable from "react-loadable";
import Header from "common/layout/Header";
import LanguageCodeEnum from "common/enumerations/LanguageCodeEnum";
import NavigationManager from "common/Manager/NavigationManager";
import AppRoute from "common/components/AppRoute";
import DynamicRouteManager from 'common/Manager/DynamicRouteManager';
import RouteMapping from 'routes/RouteMapping';

type Props = {
  stores?: RootStore;
};
@inject("stores")
@observer
class Routes extends React.PureComponent<Props> {

  uiStore = this.props.stores?.UIStore;

  UNSAFE_componentWillMount() {
    this.props.stores?.init();
    if (!RootStore.isServer && !!location && typeof window != "undefined") {
      this.props.stores!.NavigationStore.currentPath = window.location.pathname;
      const urlParams = qs.parse(location.search);
      const langCode = ((urlParams["lang"] as string) || "").toUpperCase();
      delete urlParams["lang"];

      if (LanguageCodeEnum[langCode]) {
        const languageCodeEnum = LanguageCodeEnum[langCode];
        this.props.stores!.LocalizationStore.setLanguage(languageCodeEnum);
      }

      if (langCode && !!window.location.search)
        window.location.search = qs.stringify(urlParams);

      history.listen((location: any) => {
        this.props.stores!.NavigationStore.shouldShowNavigationBar =
          ((window["webMode"] as string) || "").toLowerCase() != "webview";
        let pathname: string = location.pathname;
        if (!pathname.startsWith(BASENAME))
          pathname = NavigationManager.getRoute(pathname);
        this.props.stores!.NavigationStore.currentPath = pathname.endsWith("/")
          ? pathname.substring(0, pathname.length - 1)
          : pathname;
        window.scrollTo(0, 0);
      });
      this.setState({});
    }
  }

  handleResize = (width: number, height: number) => {
    if (RootStore.isServer) return;
    this.props.stores!.ScreenStore.currentWidth = width;
  };

  withRouter = (children: any) => {
    // return children;
    if (RootStore.isServer) return children
    return (<Router history={history}>
      {children}
    </Router>)
  };

  render() {
    const renderLoadableComponents = (component: any) => {
      return Loadable({
        loader: () => component,
        loading: () => null,
      });
    };
    const Footer = renderLoadableComponents(import(/* webpackChunkName: "Footer" */ "common/layout/Footer"));
    const routes = routesConfigs();

    // const tourListPageRoutes = _.get(DynamicRouteManager.default.route, 'list_path.paths') as { path: string, keyword: string }[] || []
    // const tourListPageLayoutKey = _.get(DynamicRouteManager.default.route, 'list_path.layout_key') || ''
    // const TourListPageComponent = RouteMapping[tourListPageLayoutKey]

    // const tourListFilterPageRoutes = _.get(DynamicRouteManager.default.route, 'list_filter_path.paths') as { path: string, keyword: string }[] || []
    // const tourListFilterPageLayoutKey = _.get(DynamicRouteManager.default.route, 'list_filter_path.layout_key') || ''
    // const TourListFilterPageComponent = RouteMapping[tourListFilterPageLayoutKey]

    const listRoutes = _.get(DynamicRouteManager.default.route, 'data') as { path: string, keyword: string, layout_key: string, pageID: string }[] || []

    return (
      <>

        <Header fixed color="transparent" changeColorOnScroll={{ height: 66, color: "white", }} />

        {this.withRouter(
          <Switch>
            {
              listRoutes.map((item: any, i: number) => <Route key={i} exact path={item['path']} render={(props) => {
                const TourListPageComponent = RouteMapping[item['layout_key']]
                return (
                  <TourListPageComponent {...props} keyword={item['keyword']} pageID={item['id']} />
                )
              }
              } />)
            }

            {
              routes.map((item: any, i: any) => <AppRoute key={i} routeConfig={item} exact={item.exact} path={item.path} component={item.component} />)
            }
          </Switch>
        )}
        <Footer />
      </>
    );
  }
}

export default Routes;