import React, { FunctionComponent } from 'react';
import { inject, observer } from 'mobx-react';
import RootStore from 'stores';
import DateRangePicker from '../../DateRangePicker';
import DateRangeDetail from '../../DateRangePicker/DateRangeDetail';
import ModalScreen from '../../ModalScreen';

type Props = {
  stores?: RootStore;
};

const EditDateRange: FunctionComponent<Props> = ({ stores }) => {
  const uiStore = stores!.PackageRootStore.DestinationStore;

  const dateRange = uiStore.dateRange;

  return (
    <ModalScreen
      title="ปฏิทิน"
      fullscreen
      buttonOpenModal={(props: any) => {
        return (
          <DateRangeDetail
            isMobile
            startDate={dateRange.start}
            endDate={dateRange.end}
            onClick={props.onClick}
          />
        );
      }}
    >
      <DateRangePicker isMobile />
    </ModalScreen>
  );
};

export default inject('stores')(observer(EditDateRange));
