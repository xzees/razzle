import { Route, Router, Switch, StaticRouter } from "react-router-dom";
import _ from "lodash";
import React from "react";

import routesConfigs from "modules/sightseeing/routes/routes-config";
import styled from "styled-components";

import ColorManager from 'common/Manager/ColorManager';


type Props = {
  // stores?: RootStore,
};

// @inject('stores')
// @observer
class Routes extends React.PureComponent<Props> {

  handleResize = (width: number, height: number) => {
    // if (RootStore.isServer) return
    // this.props.stores!.ScreenStore.currentWidth = width
  };

  withRouter = (children: any) => {
    return children;
    // if (RootStore.isServer) return children
    // return <Router history={history}>
    //   {children}
    // </Router>
  };

  render() {
    // const isLoading = this.props.stores!.UIStore.isPageLoading
    const routes = routesConfigs();
    return (
      <>
        {/* <ReactResizeDetector handleHeight handleWidth onResize={this.handleResize} /> */}
        {this.withRouter(
          <Switch>
            {routes.map((item, i) => (
              <Route
                key={i}
                exact={item.exact}
                path={item.path}
                component={item.component}
              />
            ))}
          </Switch>
        )}
      </>
    );
  }
}

const styles = {
  Container: styled.div`
    /* background-color: ${ColorManager.default.appBackground}; */
    min-height: 100vh;
  `,
  FullHeight: styled.div`
    min-height: calc(100vh - 56px);
  `,
};

export default Routes;

