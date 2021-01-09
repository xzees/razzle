import React from 'react';
import FilterBar from 'modules/hotel/component/FilterBar';
import _ from 'lodash';
import SearchToggle from 'modules/hotel/component/SearchToggle';
import Breadcrumbs from 'modules/hotel/component/Breadcrumbs';
import { inject, observer } from 'mobx-react';
import qs from 'query-string';
import HotelListInterface from 'modules/hotel/pages/hotel_list/HotelListInterface';
import Location from 'modules/hotel/interface/Component/Location';

const FilterBarEle = (props: Location) => {

  const param: any = qs.parse(props.location.search);

  return (
    <FilterBar 
        {...props}
        isMobile={true} 
        latitude={param.latitude}
        longitude={param.longitude}
    />
  );
};

type HotelListNotStoreInterface = Omit<HotelListInterface , 'stores'>

export const Mobile = (props: HotelListNotStoreInterface) => {

    const param: any = qs.parse(props.location.search);

    return (
        <>
          <Breadcrumbs name={param.name} />
          <SearchToggle {...props} />
          <FilterBarEle {...props} />
        </>
    );
}

export default Mobile;