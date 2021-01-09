import React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import NavigationManager from 'common/Manager/NavigationManager'
import { RouteConfig } from 'routes/RouteConfigType';

type Props = RouteProps & {
  routeConfig: RouteConfig
};

class AppRoute extends React.Component<Props> {

  public componentWillMount() {
    const { routeConfig } = this.props;
    if (routeConfig.absolutePath) {
      NavigationManager.redirectTo(routeConfig.absolutePath);
    }
  }

  public render() {
    const { routeConfig, ...rest } = this.props;
    if (routeConfig.absolutePath) {
      return <div />;
    }
    return <Route exact={routeConfig.exact} path={routeConfig.path} component={routeConfig.component} {...rest} />;
  }
}

export default AppRoute;