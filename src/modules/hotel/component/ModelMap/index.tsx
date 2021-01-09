import React, {useState, useEffect} from 'react';
import {
    CoverBtn,
} from 'modules/hotel/component/ModalSlide/Style'
import ColorManager from 'common/Manager/ColorManager';
import { Box, Grid } from '@material-ui/core';
import Modal from 'modules/hotel/component/ModalSlide/Modal'
import BtnClose from 'modules/hotel/component/ModalSlide/BtnClose'
import GoogleMap from './GoogleMap'
import _ from 'lodash';
import HotelListModel from 'modules/hotel/models/HotelListModel';

interface IModelMap {
  children?: any,
  latitude: number, 
  longitude: number,
  hotelLists: HotelListModel[],
}

const containerStyle = {backgroundColor: ColorManager.default.black, padding: '0.5rem'};

const index = (props: IModelMap) => {
    const [open, setOpen] = React.useState(false);
    const [nav1, setNav1] = React.useState<any>(null);
    const [nav2, setNav2] = React.useState<any>(null);
    const mapCenter = {
        lat: _.round(props.latitude, 6),
        lng: _.round(props.longitude, 6),
    }

    let defaultZoom:number = 13;
    const [mapZoom, setmapZoom] = React.useState<number>(defaultZoom);
    useEffect(() => {
        if(props.hotelLists.length > 100){
            setmapZoom(12);
        }else if(props.hotelLists.length > 500){
            setmapZoom(11);
        }else if(props.hotelLists.length > 1000){
            setmapZoom(10);
        }
    },[props.hotelLists.length])



    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
      <>
        <CoverBtn type="button" onClick={handleOpen}>
            {props.children}
        </CoverBtn>
        <Modal
        handleClose={handleClose}
        open={open}
        >
            <Box width={'90%'}
                maxWidth={'1200px'}
                marginTop={'-50px'}
            >
                <BtnClose  
                    onClick={handleClose}
                />
                <Grid container={true} style={containerStyle} spacing={4}>
                    <Grid item={true} xs={12}>
                        <Box style={{height:'600px'}}>
                            <GoogleMap {...props} mapCenter={mapCenter} mapZoom={mapZoom} isMobile={false} hotelLists={props.hotelLists}>
                                {/* { ItemMaps(props.hotelLists) } */}
                            </GoogleMap>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
      </>
    );
}

export default index