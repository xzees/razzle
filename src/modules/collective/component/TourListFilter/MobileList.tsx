import React from 'react';
import { inject, observer } from 'mobx-react';
import { BoxMain, BoxDetail } from './Mobile.style';
import MobileImage from './MobileImage';
import MobileTitleP from './MobileTitleP';
import MobileAbstract from './MobileAbstract';
import MobileContent from './MobileContent';
import MobilePeriod from './MobilePeriod';
import MobileResv from './MobileResv';
import { TourListProps } from './Interface';

const MobileList = inject("stores")(
  observer((props: TourListProps) => {
    const {
      tourData,
      index,
      openQuestion,
      selectedQuestion,
      openPeriod,
      selectedPeriod
    } = props;

    return (
      <BoxMain key={tourData.tourID}>
        <BoxDetail>
          <MobileImage tourData={tourData} index={index} />
          <MobileTitleP tourData={tourData} />
          <MobileAbstract
            tourData={tourData}
            index={index}
            openQuestion={openQuestion}
            selectedQuestion={selectedQuestion}
          />
          <MobileContent index={index} tourData={tourData} />
          <MobilePeriod
            tourData={tourData}
            openPeriod={openPeriod}
            selectedPeriod={selectedPeriod}
          />
        </BoxDetail>
        <MobileResv tourData={tourData} />
      </BoxMain>
    )
  })
)

export default MobileList;