import React, { Component,Fragment } from 'react';
import { Box, useMediaQuery } from '@material-ui/core';
import ModalScreens from 'modules/hotel/component/ModalScreen';
import useModel from 'modules/hotel/Hook/useModel';
import { RenderExpandMoreIcon } from 'modules/hotel/component/Icon';
import { AppImageResponsive } from 'common/components';
import HotelPhotoModelInterface from 'modules/hotel/models/HotelPhotoModel/HotelPhotoModelInterface';
import Grid from '@material-ui/core/Grid';
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
  

interface IModelSlide {
  children?: any
  photos: HotelPhotoModelInterface[]
}

const index = (props: IModelSlide) => {
    const {
        handleClickOpen,
        stateModel,
        setStateModel,
        handleClose 
    } = useModel({});
    const isClient = typeof window === 'object';    
    const mapImage = (v: HotelPhotoModelInterface) => {
        return (
          <div
            style={{
              width: '100%',
              paddingTop: '10px',
              paddingBottom: '10px'
            }}
          >
            <AppImageResponsive src={v.urlOriginal} />
          </div>
        )
      }
    return (
        <>
        <ModalScreens 
        closeBtnIcon={<RenderExpandMoreIcon />}
        title="Photo Gallery"
        open={stateModel}
        setOpen={setStateModel}
        handleClose={handleClose}
      >
        <ScrollContainer
            windowinnerheight={isClient ? window.innerHeight : 0} 
            style={{ 
                position: 'relative', 
                overflow: 'scroll' 
            }}
        >
          <Box >
            {_.values(props.photos).map(mapImage)}
          </Box>
        </ScrollContainer>
      </ModalScreens>
      <div onClick={handleClickOpen}>{props.children}</div>
      </>
    );
}

export default index;