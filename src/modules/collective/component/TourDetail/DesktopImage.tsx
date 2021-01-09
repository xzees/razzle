import React from 'react';
import { inject, observer } from 'mobx-react';
import { GridImage, TourImg } from './Desktop.style';
import { TourDetailProps } from './Interface';
import ImageGallery from './ImageGallery';
import Discount from './Discount';

const DesktopImage = inject("stores")(
  observer((props: TourDetailProps) => {
    const { tourDetail, isClient } = props;

    function renderImageGallery() {
      return (
        <ImageGallery tourDetail={tourDetail} />
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
      <GridImage key="leftContent" item xs={12} md={5} >
        {tourDetail?.galleries ? isClient ? renderImageGallery() : renderImageServer() : undefined}
      </GridImage>
    )
  })

)

export default DesktopImage;