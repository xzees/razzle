import React, { Fragment } from 'react';
import BannerSection from 'modules/collective/component/Banner/Home';
import Popular from 'modules/collective/component/Home/Popular';
import Festival from 'modules/collective/component/Home/Festival';

type Props = {}
class HomePage extends React.PureComponent<Props> {
  render() {
    return (
      <>
        <BannerSection />
        <Popular />
        <Festival />
      </>
    )
  }
}

export default HomePage