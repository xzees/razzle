import React from 'react'
import FilterBar from 'modules/hotel/component/FilterBar';
import FilterBarLoading from 'modules/hotel/component/FilterBar/Loading';
import _ from 'lodash';
import SearchToggle from 'modules/hotel/component/SearchToggle';
import Breadcrumbs from 'modules/hotel/component/Breadcrumbs';
import { inject, observer } from 'mobx-react';
import qs from 'query-string';
import HotelListInterface from 'modules/hotel/pages/hotel_list/HotelListInterface';

export const Mobile = inject('stores')(
    observer((props: HotelListInterface) => {

    const param: any = qs.parse(props.location.search);
    const uiStore = props.stores!.HotelRootStore.ListStore;
    
    return (
        <>
          <Breadcrumbs name={param.name} />
          <SearchToggle {...props} />
          {!uiStore.open && <FilterBar {...props} {...param} />}
        </>
    );
    
}));

export default Mobile;