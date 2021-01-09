import React, { useState } from 'react'
import { styles, useStyles } from '../Layout/Content/Mobile/styles';
import TopContainer from './Content/Mobile/TopContainer' 
import{ default as HotelPhotoGallery }  from './Content/Mobile/PhotoGallery';
import{ default as HotelHeader }  from './Content/Mobile/Header';
import{ default as HotelDescription }  from './Content/Mobile/Description';
import{ default as HotelFacilityPopular }  from './Content/Mobile/FacilityPopular';
import{ default as HotelNearBy }  from './Content/Mobile/NearBy';
import{ default as HotelRoomList }  from './Content/Mobile/RoomList';
import{ default as HotelFacilityAll }  from './Content/Mobile/FacilityAll';
import{ default as HotelAround }  from './Content/Mobile/Around';
import{ default as HotelPolicy }  from './Content/Mobile/Policy';
import{ default as HotelReview }  from './Content/Mobile/Review';
import{ default as HotelRelate }  from './Content/Mobile/Relate';
import { inject, observer } from 'mobx-react';
import _ from 'lodash';
import Loading from 'modules/hotel/component/Loading';
import CartFooter  from 'modules/hotel/component/Cart/Footer';

const LayoutMobile = inject('stores')(
    observer((props: any) => {
        
    const uiStore = props.stores!.HotelRootStore;
    const { data } = props;

    return (   
        <>
            <TopContainer  {...props}/>
            {_.values(uiStore.RoomlistStore.data).length == 0 && <Loading />}
            {_.values(uiStore.RoomlistStore.data).length > 0 && <>

            <HotelPhotoGallery {...props} refName="" refComp={null}/>
            <HotelHeader {...props} refName="" refComp={null}/>
            <HotelDescription {...props} refName="" refComp={null}/>
            <HotelFacilityPopular {...props} refName="" refComp={null}/>
            <styles.MBox component="div" m={6}><styles.HotelDetailDivider/></styles.MBox>
            <HotelNearBy {...props} refName="" refComp={null}/>
            <HotelRoomList {...props}/>
            <HotelFacilityAll {...props} refName="" refComp={null}/>
            <HotelAround {...props} refName="" refComp={null}/>
            <HotelPolicy {...props} refName="" refComp={null}/>
            <HotelReview {...props} refName="" refComp={null}/>
            <HotelRelate {...props} refName="" refComp={null}/>
            </>}
            <CartFooter {...props} isMobile={true}/>
        </>
    );
}));

export default LayoutMobile;