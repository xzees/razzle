import React from 'react';
import { 
  ImgMobile, 
  ImgLazyMobile,
  BoxImg,
  ImgDesktop,
  ImgBox,
  ImgCard,
  ScrollContainer
} from 'modules/hotel/component/RoomList/Image/Style';
import RibbonDesktop from 'modules/hotel/component/SearchHotel/Ribbon/Desktop';
import { Box, useMediaQuery } from '@material-ui/core';
import ModalSlide from 'modules/hotel/component/ModalSlide';
import Detail from 'modules/hotel/component/RoomList/Detail';
import ModalScreens from 'modules/hotel/component/ModalScreen';
import useModel from 'modules/hotel/Hook/useModel';
import { RenderExpandMoreIcon } from 'modules/hotel/component/Icon';
import { AppImageResponsive } from 'common/components';
import _ from 'lodash'
import HotelPhotoModel from 'modules/hotel/models/HotelPhotoModel';
import ImageInterface from 'modules/hotel/component/RoomList/Image/ImageInterface';


const index = (props: ImageInterface) => {
    const {
      check,
      title,
      isMobile,
      coverImage,
    } = props;

    const isLarge = useMediaQuery('(max-width: 959px)'); 
    const borderRadius = isLarge ? '0px 6px 0px 0px' : '0px 0px 0px 6px';

    if (isMobile) {

      const {
          handleClickOpen,
          stateModel,
          setStateModel,
          handleClose 
      } = useModel({});
      // console.log("🚀 ~ file: index.tsx ~ line 37 ~ index ~ useModel", props)

      const mapImage = (v: HotelPhotoModel) => {
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
      const isClient = typeof window === 'object';

      return (
        <>
            <ModalScreens 
              closeBtnIcon={<RenderExpandMoreIcon />}
              title={props.parent_props.roomName}
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
                  {_.values(props.parent_props.roomPhotos).map(mapImage)}
                </Box>
              </ScrollContainer>
            </ModalScreens> 
            <ImgCard>
              {check === 0 && <ImgMobile onClick={handleClickOpen} height={180} src={coverImage} title={title} />}
              {check !== 0 && <ImgLazyMobile onClick={handleClickOpen} height={180} src={coverImage} title={title} />}
              
              <RibbonDesktop randomMock={'G'} />
          </ImgCard>
        </>
      );
    }
    
    const onError = (e: any) => {
      e.target.src = 'https://piotrkowalski.pw/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png';
    };

    return (
        <BoxImg>
          <ImgBox>
            <ImgCard>
              <ModalSlide data={props.room_photos} content={<Detail {...props.parent_props} />}>
                <ImgDesktop 
                  borderRadius={borderRadius}
                  height={249}
                  {...props} 
                  src={coverImage} 
                  alt={title} 
                  title={title} 
                  onError={onError}
                />
              </ModalSlide>
              <RibbonDesktop randomMock={'G'} />
            </ImgCard>
          </ImgBox>
        </BoxImg>
    );
};

export default index;