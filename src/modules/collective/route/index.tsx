import React, { Fragment } from 'react';
import { match, Route } from 'react-router-dom';
import routes from './routes';
import RootStore from 'stores';
import { inject, observer } from 'mobx-react';
import _ from 'lodash';
import InitializeManager from 'common/Manager/InitializeManager';
import { ThemeProvider } from 'styled-components';
import { cryptoTheme } from 'common/src/theme/crypto';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle } from 'common/containers/Crypto/crypto.style';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  match: match
  rootStore: RootStore
};

const isClient = typeof window === "object";
// const isServer = typeof window === 'undefined';

@inject('stores')
@observer
class CollectiveRoutes extends React.PureComponent<Props> {

  moduleMetadata: any;

  constructor(props: Props) {
    super(props);
  };

  UNSAFE_componentWillMount() {
    if (isClient) {
      const data = _.get(window, '__STATE')
      InitializeManager.default.rehydrate(data)
      delete (window as any).__STATE
      document.getElementById("__STATE")?.remove()
      this.moduleMetadata = data?.data
    }
  };

  render() {
    const match = this.props.match;
    return (
      <>
        <ThemeProvider theme={cryptoTheme}>
          <Fragment>
            <ResetCSS />
            <GlobalStyle />
            {routes.map((item, i) => <Route exact key={i} path={`${match.url}${item.path}`} component={item.component} />)}
          </Fragment>
        </ThemeProvider>
      </>
    )
  }
}
export default CollectiveRoutes;