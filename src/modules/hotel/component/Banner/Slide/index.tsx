import React from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import {
  Containers,
  SectionDesktop,
  BoxMainDesktop,
  BoxDesktop,
  BoxImg,
  ImgBox,
  ImgCard
} from './Style'
import { Grid } from '@material-ui/core'
// import './carousel.css'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';



const index = (props: any) => {

  const { images } = props;

  return (
    <>      
      <BoxMainDesktop>
        <BoxDesktop>
              <BoxImg> 
                <ImgBox>
                  <ImgCard>
                    <ImageGallery items={images} />
                  </ImgCard>
                  </ImgBox>
                </BoxImg>
          </BoxDesktop>
      </BoxMainDesktop>
    </>
  );
};

export default index;