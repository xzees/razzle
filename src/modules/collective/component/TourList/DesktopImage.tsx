import React from 'react';
import { inject, observer } from 'mobx-react';
import { BoxTourImg, ImgBox, ImgCard, TourImg } from './Desktop.style';
import { TourListProps } from './Interface';
import Discount from './Discount';

const DesktopImage = inject("stores")(
  observer((props: TourListProps) => {
    const {
      tourData,
      index
    } = props

    return (
      <BoxTourImg className="Box-Tour-Img">
        <ImgBox className="Img-Box">
          <ImgCard className="Img-Card">
            <a href={`https://www.thaitravelcenter.com/th/tour/detail/${tourData.tourID}/`} target="_blank" title={tourData?.title} >
              {index === 0 ? (<TourImg visibleByDefault height={249} src={tourData?.coverImage} alt={tourData?.title} />)
                : (<TourImg effect="blur" height={249} src={tourData?.coverImage} alt={tourData?.title} />)
              }
              {tourData.discount ? <Discount tourDiscount={tourData.discount} /> : undefined}
            </a>
          </ImgCard>
        </ImgBox>
      </BoxTourImg>
    )
  })
)

export default DesktopImage;