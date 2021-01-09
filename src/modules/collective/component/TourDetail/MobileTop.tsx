import React from 'react';
import { inject, observer } from 'mobx-react';
import { BoxMain, BoxDetail } from './Mobile.style';
import { TourDetailProps } from './Interface';
import MobileImage from './MobileImage';
import MobileTitle from './MobileTitle';
import MobileCodeRating from './MobileCodeRating';
import MobileContent from './MobileContent';
import MobileTopButton from './MobileTopButton';

const MobileTop = inject("stores")(
  observer((props: TourDetailProps) => {
    const { tourDetail, isMobile, isClient, periodMobileScroll } = props;

    return (
      <BoxMain>
        <BoxDetail>
          <MobileImage tourDetail={tourDetail} isMobile={isMobile} isClient={isClient} />
          <MobileTitle tourDetail={tourDetail} />
          <MobileCodeRating tourDetail={tourDetail} />
          <MobileContent tourDetail={tourDetail} />
          <MobileTopButton tourDetail={tourDetail} periodMobileScroll={periodMobileScroll} />
        </BoxDetail>
      </BoxMain>
    )
  })
)

export default MobileTop;