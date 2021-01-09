import React from 'react';
import { inject, observer } from 'mobx-react';
import { SectionTour, ContainerTour } from './Mobile.style';
import MobileTop from './MobileTop';
import MobileAbstract from './MobileAbstract';
import MobileDeparturePlan from './MobileDeparturePlan';
import MobilePeriod from './MobilePeriod';
import MobileCondition from './MobileCondition';
import FooterToolbar from './MobileFooter';

type Props = {
  dataDetail: any;
  tourID: number;
  openDayPlan?: any;
  selectedDayPlan?: any;
  openPeriod?: any;
  selectedPeriod?: any;
  handleTabToggle?: any;
  isMobile?: boolean;
  periodMobileScroll?: any;
  isClient?: any;
}

const Mobile = inject("stores")(
  observer((props: Props) => {
    const {
      dataDetail,
      tourID,
      openDayPlan,
      selectedDayPlan,
      openPeriod,
      selectedPeriod,
      handleTabToggle,
      isMobile,
      periodMobileScroll,
      isClient
    } = props;

    return (
      <>
        <SectionTour>
          <ContainerTour>
            {dataDetail ? (
              <>
                <MobileTop tourDetail={dataDetail} isMobile={isMobile} isClient={isClient} periodMobileScroll={periodMobileScroll} />
                {dataDetail?.description ? (<MobileAbstract tourDetail={dataDetail} />) : undefined}
                <MobileDeparturePlan tourDetail={dataDetail} openDayPlan={openDayPlan} selectedDayPlan={selectedDayPlan} />
                <MobilePeriod tourDetail={dataDetail} openPeriod={openPeriod} selectedPeriod={selectedPeriod} />
                <MobileCondition tourDetail={dataDetail} handleTabToggle={handleTabToggle} />
              </>
            ) : undefined}
          </ContainerTour>
        </SectionTour>
        <FooterToolbar tourDetail={dataDetail} periodMobileScroll={periodMobileScroll} />
      </>
    )
  })
)

export default Mobile;