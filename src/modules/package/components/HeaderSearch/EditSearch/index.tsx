import React, { FunctionComponent } from 'react';
import { inject, observer } from 'mobx-react';
import RootStore from 'stores';
import EditInputSearch from '../EditInputSearch';
import EditDateRange from '../EditDateRange';
import {
  EditSearchScrollContainer,
  FooterButtonWrapper,
  FooterButton,
  Divider,
} from './Style';

type Props = {
  stores?: RootStore;
  handleCloseModal?: () => void;
};

const EditSearch: FunctionComponent<Props> = ({ stores, handleCloseModal }) => {
  const uiStore = stores!.PackageRootStore.DestinationStore;

  return (
    <>
      <EditSearchScrollContainer
        windowInnerHeight={typeof window === 'object' ? window.innerHeight : 0}
      >
        <EditInputSearch />
        <Divider />
        <EditDateRange />
        <Divider />
      </EditSearchScrollContainer>
      <FooterButtonWrapper>
        <FooterButton
          onClick={(event: any) => {
            if (handleCloseModal) handleCloseModal();
            uiStore.searchDestination();
          }}
        >
          ค้นหา
        </FooterButton>
      </FooterButtonWrapper>
    </>
  );
};

export default inject('stores')(observer(EditSearch));
