import React from 'react';
import { inject, observer } from 'mobx-react';
import { TourImg } from './Mobile.style';
import { TourDetailProps } from './Interface';
import ImageGallery from './ImageGallery';
import Discount from './Discount';

const MobileImage = inject("stores")(
  observer((props: TourDetailProps) => {
    const { tourDetail, isMobile, isClient } = props;

    function renderImageGallery() {
      return (
        <ImageGallery tourDetail={tourDetail} isMobile={isMobile} />
      )
    }
    function renderImageServer() {
      return (
        <div style={{ position: "relative", width: '100%' }}>
          <TourImg visibleByDefault src={tourDetail?.coverImage} alt={tourDetail?.title} />
          {tourDetail.discount ? <Discount tourDiscount={tourDetail.discount} /> : undefined}
        </div>
      )
    }

    return (
      <>
        {tourDetail?.galleries ? isClient ? renderImageGallery() : renderImageServer() : undefined}
      </>
    )
  })

)

export default MobileImage;