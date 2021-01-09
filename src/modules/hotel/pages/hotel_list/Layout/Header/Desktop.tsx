import React from 'react';
import Banner from 'modules/hotel/component/Banner/List';
import _ from 'lodash';
import Location from 'modules/hotel/interface/Component/Location';

export const Desktop = (props: Location): JSX.Element => {
    return (
      <>
        <Banner location={props.location} />
      </>
    );
};

export default Desktop;