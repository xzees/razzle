import React from 'react';
import _ from 'lodash';
import Header from './Header/Mobile';
import Items from './Items';
import { inject, observer } from 'mobx-react';
import HotelListInterface from 'modules/hotel/pages/hotel_list/HotelListInterface';

const Item = (props: any) => {
    return (<Items 
        {...props}
        isMobile={true} 
    />);
};

const LayoutMobile = inject('stores')(
    observer((props: HotelListInterface) => {
    const uiStore = props.stores!.HotelRootStore.ListStore;

    return (   
        <>
            <Header {...props}/>
            <Item {...props} />
            
        </>
    );
}));

export default LayoutMobile;