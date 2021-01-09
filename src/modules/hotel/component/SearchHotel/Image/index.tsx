import React from 'react';
import { 
  ImgMobile, 
  ImgLazyMobile,
  BoxImg,
  ImgDesktop,
  ImgBox,
  ImgCard,
} from 'modules/hotel/component/SearchHotel/Image/Style';
import RibbonDesktop from 'modules/hotel/component/SearchHotel/Ribbon/Desktop';
import RibbonMobile from 'modules/hotel/component/SearchHotel/Ribbon/Mobile';
import { useMediaQuery } from '@material-ui/core';
import ImageInterface from 'modules/hotel/component/SearchHotel/Image/ImageInterface';
import ModalSlide from 'modules/hotel/component/ModalSlide';

const index = (props: ImageInterface) => {
    const {
      check,
      onClick,
      title,
      isMobile,
      coverImage,
    } = props;

    const isLarge = props.isLarge && useMediaQuery('(max-width: 959px)'); 
    const borderRadius = isLarge ? '0px 6px 0px 0px' : '0px 0px 0px 6px';

    if (isMobile) {
      return (
        <>
          <a onClick={onClick} target="_blank" title={title} >
            {check === 0 && <ImgMobile height={249} src={coverImage} alt={title} title={title} />}
            {check !== 0 && <ImgLazyMobile height={249} src={coverImage} alt={title} title={title} />}
            <RibbonMobile {...props} />
          </a>
        </>
      );
    }

    return ( 
        <BoxImg>
          <ImgBox>
            <ImgCard>
            <a onClick={onClick} target={'_blank'}>

              {/* <ModalSlide data={[props.parent_props?.hotelMainPhoto]}> */}
                <ImgDesktop 
                  borderRadius={borderRadius}
                  height={249} 
                  src={coverImage} 
                  alt={title} 
                  title={title} 
                />
              {/* </ModalSlide> */}
              </a>
            </ImgCard>
            <RibbonDesktop {...props} />
          </ImgBox>
        </BoxImg>
    );
};

export default index;