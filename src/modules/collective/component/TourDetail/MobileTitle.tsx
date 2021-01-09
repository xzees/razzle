import React from 'react';
import { inject, observer } from 'mobx-react';
import Heading from 'common/src/components/Heading';
import { TourTitle } from './Mobile.style';
import { TourDetailProps } from './Interface';

const MobileTitle = inject("stores")(
  observer((props: TourDetailProps) => {
    const { tourDetail } = props;
    return (
      <Heading content={tourDetail.title} {...TourTitle} />
    )
  })

)

export default MobileTitle;