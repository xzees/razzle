
import React from 'react';
import _ from 'lodash';
import Outlined from 'modules/hotel/component/Button/Outlined';
import i18n from 'utilities/I18n';
import {
    Containers,
    SectionMobile
} from 'modules/hotel/component/SearchHotel/Layout/Style';
import { inject, observer } from 'mobx-react';
import ItemInterface from 'modules/hotel/pages/hotel_list/Layout/Items/ItemInterface';
import ObjectCss from 'modules/hotel/interface/Component/ObjectCss';

const LoadMoreButton = inject('stores')(
    observer((props: ItemInterface) => {
        
    const uiStore = props.stores!.HotelRootStore.ListStore;
    const style: ObjectCss = {
        div: {
            textAlign: 'center'
        },
        outlined: {
            display: 'inline-table',
            width: '200px'
        },
    };
    
    const EleHasLoadmore = () => {
        return <div style={style.div}>
            {uiStore.loading && <Containers>
                <SectionMobile>
                    <Outlined 
                        style={style.outlined}
                        onClick={uiStore.onClickLoadmore}
                    >
                        {i18n.t('hotel.desktop.btn.loadmore')}
                    </Outlined>
                </SectionMobile>
            </Containers>}
        </div>;
    };

    return (
        <>
            {!uiStore.hasLoadmore && EleHasLoadmore()}
        </>
    );
}));

export default LoadMoreButton;