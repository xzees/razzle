//React
import React from 'react';
//Plugin
import { inject, observer } from 'mobx-react';
import qs from 'query-string';
//MUI
import Grid from '@material-ui/core/Grid';
//Manager
import NavigationManager from 'common/Manager/NavigationManager';
//Component
import Header from './Content/Header';
import PhotoGallery from './Content/PhotoGallery';
import Detail from './Content/Detail';
import ReservationForm from './Content/ReservationForm';
import Success from './Content/Alert/Success';
import Fail from './Content/Alert/Fail';
//Styled
import { Containers } from './Content/styles';
//Interface
import RoomListInterface from 'modules/hotel/pages/room_list/RoomListInterface';

const Layout = inject('stores')(
    observer((props: RoomListInterface) => {
        //console.log("🚀 ~ file: index.tsx ~ line 22 ~ observer ~ props", props)
        const isMobile = props.isMobile;
        const uiStore = props.stores!.HotelRootStore.ReservationStore.hotels;
        
        const payment = uiStore[0]?.payment;
        // console.log("🚀 ~ file: index.tsx ~ line 25 ~ observer ~ uiStore", uiStore)
        // uiStore[0].booking.hotelId
        
        const searchParam: any = qs.parse(props.location.search);

        const containersStyle = (!isMobile) ? { marginTop: '75px' } : { marginTop: '10px' };


        const showAlertOrderStatus = () => {
            if(payment.orderRef != ""){
                if(payment.success){
                    return <Success orderRef={payment.orderRef}  msgPayment={payment.msgPayment} />;
                } else {
                    return <Fail orderRef={payment.orderRef} msgPayment={payment.msgPayment}/>;
                }
            }
            return <></>;
        }

        let renderCompoment = <></>
        // if (searchParam.orderRef || uiStore.length > 0) {
        //     console.log('uiStore.length', uiStore.length);
        //     renderCompoment = <>{ showAlertOrderStatus() }</>;
        // } else 
        if (uiStore.length > 0) {
            // console.log("🚀 ~ file: index.tsx ~ line 12 ~ observer ~ uiStore", uiStore)
            renderCompoment = <Containers>
                <Grid container spacing={2} style={containersStyle}>
                    {isMobile && <Grid item xs={12}>
                        { showAlertOrderStatus() }
                        <PhotoGallery {...props} />
                        <Header {...props} />
                    </Grid>}
                    <Grid item lg={3} md={4} xs={12}>
                        <Detail {...props} />
                    </Grid>
                    <Grid item lg={9} md={8} xs={12}>
                        {!isMobile && <>
                            { showAlertOrderStatus() }
                            <Header {...props} />
                            <PhotoGallery {...props} />
                        </>}
                        <ReservationForm {...props} />
                    </Grid>
                </Grid>
            </Containers>;
        }

        return (
            <>{renderCompoment}</>
        );
    }));

export default Layout;