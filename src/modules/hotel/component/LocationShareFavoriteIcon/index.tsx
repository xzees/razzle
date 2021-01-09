import React, { useState, useEffect } from 'react'
import { makeStyles, createStyles, Theme, withStyles } from '@material-ui/core/styles';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import Button from '@material-ui/core/Button';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import _ from 'lodash';
import { inject, observer } from 'mobx-react';

import HotelRootStore from 'modules/hotel/Stores/HotelRootStore';
import RoomlistStore from 'modules/hotel/pages/room_list/stores/RoomlistStore';

import RoomlistModel from 'modules/hotel/models/RoomlistModel';
import GoogleMap from './GoogleMap'
import Popup from 'modules/hotel/component/LocationShareFavoriteIcon/Popup';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        topIcon: {
            padding: '6px',
            margin: '0 2px',
            minWidth: '24px',
        }
    }),
);


const containerStyle = {backgroundColor: ColorManager.default.black, padding: '0.5rem'};

const index = inject('stores')(
    observer((props: any) => {
    const { color } = props;
    const uiStore:HotelRootStore = props.stores!.HotelRootStore;
    const roomList = uiStore.RoomlistStore.data;
    // console.log("🚀 ~ file: index.tsx ~ line 37 ~ observer ~ roomList", roomList)

    const myclasses = useStyles(props);

    const [open, setOpen] = useState(false);
    const [nav1, setNav1] = useState<any>(null);
    const [nav2, setNav2] = useState<any>(null);
    const [popupContent, setPopupContent] = useState<JSX.Element>(<></>);

    const mapCenter = {
        lat: _.round(roomList?.hotelInfo?.location?.latitude, 6),
        lng: _.round(roomList?.hotelInfo?.location?.longitude, 6),
    }

    let defaultZoom:number = 15;
    const [mapZoom, setmapZoom] = React.useState<number>(defaultZoom);

    const handleOpen = (children: JSX.Element) => {
        setPopupContent(children);
        setOpen(true);
        
    };

    const handleClose = () => {
        setOpen(false);
    };

    const GoogleMapHotel = <GoogleMap {...props} mapCenter={mapCenter} mapZoom={mapZoom} isMobile={false} roomList={roomList}></GoogleMap>;

    return (
        <>
            <Button
                onClick={() => {handleOpen(GoogleMapHotel)}}
                variant="outlined"
                className={myclasses.topIcon}
                style={{ color: color, borderColor: color }}
            >
                <LocationOnIcon />
            </Button>

            <Button
                variant="outlined"
                className={myclasses.topIcon}
                style={{ color: color, borderColor: color }}
            >
                <ShareIcon />
            </Button>
            <Button
                variant="outlined"
                className={myclasses.topIcon}
                style={{ color: color, borderColor: color }}
            >
                <FavoriteBorderIcon />
            </Button>
            <Popup handleClose={handleClose} open={open}>
                {popupContent}
            </Popup>
        </>
    );
}));

export default index;