import React from 'react';
import SearchHotel from 'modules/hotel/component/SearchHotel';
import _ from 'lodash';
import { inject, observer } from 'mobx-react';
import useFilter from 'modules/hotel/Hook/useFilter';
import ItemInterface from 'modules/hotel/pages/hotel_list/Layout/Items/ItemInterface';
import HotelListModelInterface from 'modules/hotel/interface/Models/HotelListModelInterface';

const RenderItem = inject('stores')(
    observer((props: ItemInterface) => {
        
    const uiStore = props.stores!.HotelRootStore.ListStore;
    const [itemForRender , setitemForRender] = React.useState<HotelListModelInterface[]>(uiStore.returnSearch);

    const {
        items
    } = useFilter({
        uiStore
    }); 
    
    const funcLoading = () => {
        uiStore.setLoading(true); 
    };

    const funcSetMemo = () => {    
        if (items.length > 0) {
            setitemForRender(items);
            if (!uiStore.loading) {
                setTimeout(funcLoading, 2000);
            }
        }
    };

    React.useMemo(funcSetMemo, [items]);

    return (
        <MemoItem  
            location={props.location}
            isMobile={props.isMobile}
            itemForRender={itemForRender}
            checkReload={uiStore.checkReload}
        />
    )
}));

const Item = (props: any) => {
    const funcMapdata = (v: HotelListModelInterface, index: number) => {
        
        return (
            <>
                <SearchHotel 
                    hotelListModel={v}
                    isMobile={props.isMobile}
                    location={props.location}
                    key={index} 
                    index={index} 
                />
            </>
        );
    };

    return (<>
        {props.checkReload === false && props.itemForRender.length > 0 && props.itemForRender.map(funcMapdata)}
    </>);
}

const MemoItem = React.memo(Item);

export default RenderItem;