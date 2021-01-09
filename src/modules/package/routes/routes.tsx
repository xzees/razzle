import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { cryptoTheme } from 'common/src/theme/crypto';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle } from 'common/containers/Crypto/crypto.style';
import routesConfigs from 'modules/package/routes/routes-config';

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
        <ThemeProvider theme={cryptoTheme}>
          <Fragment>
            <ResetCSS />
            <GlobalStyle />
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
          </Fragment>
        </ThemeProvider>
      </>
    );
  }
}

export default Routes;
