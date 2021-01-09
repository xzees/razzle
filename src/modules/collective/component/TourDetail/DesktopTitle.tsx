import React from 'react';
import { inject, observer } from 'mobx-react';
import Heading from 'common/src/components/Heading';
import { h1Style } from './Desktop.style';
import { TourDetailProps } from './Interface';

const DesktopTitle = inject("stores")(
  observer((props: TourDetailProps) => {
    const { tourDetail } = props;
    return (
      <Heading content={tourDetail.title} {...h1Style} />
    )
  })

)

export default DesktopTitle;