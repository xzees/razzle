import React from 'react';
import Loading from 'modules/hotel/component/SearchHotel/Loading'
import _ from 'lodash';
import { inject, observer } from 'mobx-react';
import ItemInterface from 'modules/hotel/pages/hotel_list/Layout/Items/ItemInterface';

const LoadingForFilterAction = inject('stores')(
    observer((props: ItemInterface) => {
        const uiStore = props.stores!.HotelRootStore.ListStore;

        const mapData = (index: number) => {
            return <Loading
                key={index}
                {...{
                    isMobile: props.isMobile,
                }}
            />;
        };

        return (
            <>
                {uiStore.checkReload === true && _.times(5).map((index) => mapData(index))}
            </>
        );
    }));

export default LoadingForFilterAction;