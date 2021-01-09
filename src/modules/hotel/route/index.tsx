import React from 'react'
import { match, Route } from 'react-router-dom';
import routes from './routes';
import RootStore from 'stores';
import { inject,observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import _ from 'lodash'
import InitializeManager from 'common/Manager/InitializeManager';
import history, { BASENAME } from "common/history";
import AppRoute from 'common/components/AppRoute';

type Props = {
  match: match
  rootStore: RootStore
}

const isClient = typeof window === 'object';
const isServer = typeof window === 'undefined';

@inject('stores')
@observer
class HotelRoutes extends React.PureComponent<Props> {

  public moduleMetadata: any;

  constructor(props: Props) {
    super(props);
  }

  public UNSAFE_componentWillMount() {
    
  }

  public render() {
    const match = this.props.match;
    
    return (
      <>
        {routes.map((item, i) => <AppRoute key={i} routeConfig={item} exact path={`${match.url}${item.path}`} component={item.component} />)}
      </>
    );
  }
}
export default HotelRoutes;