import React from 'react';
import { inject, observer } from 'mobx-react';
import { BoxTour, BoxTourContent } from './Desktop.style';
import { TourListProps } from './Interface';
import DesktopImage from './DesktopImage';
import DesktopTitleP from './DesktopTitleP';
import DesktopAbstract from './DesktopAbstract';
import DesktopContent from './DesktopContent';
import DesktopPeriod from './DesktopPeriod';

const DesktopList = inject("stores")(
  observer((props: TourListProps) => {
    const {
      tourData,
      index
    } = props

    return (
      <BoxTour className="Box-Tour" key={tourData.tourID}>
        <DesktopImage tourData={tourData} index={index} />
        <BoxTourContent className="Box-Tour-Content">
          <DesktopTitleP tourData={tourData} />
          <DesktopAbstract tourData={tourData} />
          <DesktopContent tourData={tourData} index={index} />
          <DesktopPeriod tourData={tourData} />
        </BoxTourContent>
      </BoxTour>
    )
  })
)

export default DesktopList;