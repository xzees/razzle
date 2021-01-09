import React from 'react';
import { inject, observer } from 'mobx-react';
import DesktopTop from './DesktopTop';
import DesktopContent from './DesktopContent';

type Props = {
  dataDetail: any;
  tourID: number;
  openDayPlan?: any;
  selectedDayPlan?: any;
  handleTabToggle?: any;
  isMobile?: boolean;
  periodDesktopScroll?: any;
  isClient?: any;
}

const Desktop = inject("stores")(
  observer((props: Props) => {
    const {
      dataDetail,
      tourID,
      openDayPlan,
      selectedDayPlan,
      handleTabToggle,
      isMobile,
      periodDesktopScroll,
      isClient
    } = props;

    return (
      <>
        {dataDetail ? (
          <>
            <DesktopTop tourDetail={dataDetail} periodDesktopScroll={periodDesktopScroll} isClient={isClient} />
            <DesktopContent tourDetail={dataDetail} openDayPlan={openDayPlan} selectedDayPlan={selectedDayPlan} handleTabToggle={handleTabToggle} periodDesktopScroll={periodDesktopScroll} />
          </>
        ) : undefined}
      </>
    )
  })
)

export default Desktop;