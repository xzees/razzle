import React from 'react';
import { Box} from '@material-ui/core';
import ModalScreens from 'modules/hotel/component/ModalScreen';
import useModel from 'modules/hotel/Hook/useModel';
import { RenderExpandMoreIcon } from 'modules/hotel/component/Icon';
import { AppImageResponsive } from 'common/components';
import _ from 'lodash';
import { 
    ImgMobile, 
    ImgLazyMobile,
    BoxImg,
    ImgDesktop,
    ImgBox,
    ImgCard,
    ScrollContainer
} from 'modules/hotel/component/RoomList/Image/Style';
import HotelListModel from 'modules/hotel/models/HotelListModel';
import Marker from './Marker';
import GoogleMap from './GoogleMap';
import { inject, observer } from 'mobx-react';
import RootStore from 'stores';

interface IModelMap {
    children?: any,
    latitude: number, 
    longitude: number,
    stores?: RootStore;
}
  
const index = inject('stores')(
    observer((props: IModelMap) => {
    const uiStore = props.stores!.HotelRootStore.ListStore;
    const ListStore = props.stores!.HotelRootStore.ListStore;
    const hotelLists = ListStore.returnSearchModel;
    const {
        handleClickOpen,
        stateModel,
        setStateModel,
        handleClose 
    } = useModel({});
    const isClient = typeof window === 'object';    

    const [showMarker,setShowMarker] = React.useState<number>(-1);
    const [mapCenter,setMapCenter] = React.useState<any>({
        lat: _.round(props.latitude, 6),
        lng: _.round(props.longitude, 6),
      });
      
    let defaultZoom:number = 13;

    const [mapZoom,setmapZoom] = React.useState<number>(defaultZoom);

    const ItemMaps = (hotelLists: HotelListModel[]):JSX.Element[] => {
        let markers:JSX.Element[] = [];
        hotelLists.map((h: HotelListModel, index: number) => {
            //console.log(h.location.latitude, h.location.longitude);
            markers.push(
            <Marker
                {...props}
                hData={h}
                lat={h.location.latitude}
                lng={h.location.longitude}
                text={h.name}
                key={index}
                index={index}
                isShowContent={index==showMarker}
                onMarkerClick={() => {
                    setShowMarker(index);
                    setMapCenter({
                    lat: _.round(h.location.latitude, 6),
                    lng: _.round(h.location.longitude, 6)
                  });
                }}
            />);       
        });
        return markers;
    }

    return (
        <>
        <ModalScreens 
        closeBtnIcon={<RenderExpandMoreIcon />}
        title="MAP"
        open={stateModel}
        setOpen={setStateModel}
        handleClose={handleClose}
      >
                <GoogleMap {...props} mapCenter={mapCenter} mapZoom={mapZoom} isMobile={false} hotelLists={hotelLists}>
                    {/* { ItemMaps(props.hotelLists) } */}
                </GoogleMap>
      </ModalScreens>
      <div onClick={handleClickOpen}>{props.children}</div>
      </>
    );
}));

export default index;