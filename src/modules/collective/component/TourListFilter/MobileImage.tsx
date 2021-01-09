import React from 'react';
import { inject, observer } from 'mobx-react';
import { TourImg } from './Mobile.style';
import { TourListProps } from './Interface';

const MobileImage = inject("stores")(
  observer((props: TourListProps) => {
    const {
      tourData,
      index
    } = props;

    return (
      <a href={`https://www.thaitravelcenter.com/th/tour/detail/${tourData.tourID}/`} target="_blank" title={tourData?.title} >
        {index === 0 ? (<TourImg visibleByDefault height={249} src={tourData?.coverImage} alt={tourData?.title} title={tourData?.title} />)
          : (<TourImg effect="blur" height={249} src={tourData?.coverImage} alt={tourData?.title} title={tourData?.title} />)
        }
      </a>
    )
  })
)

export default MobileImage;