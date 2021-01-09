import _ from 'lodash';
import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import { inject, observer } from 'mobx-react';
import { cryptoTheme } from 'common/src/theme/crypto';
import Parampath from 'common/models/Parampath';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle } from 'common/containers/Crypto/crypto.style';
import PaxesContext from 'modules/package/contexts/paxes';
import MenuBar from 'modules/package/components/MenuBar';
import useDetail from 'modules/package/Hook/pages/useDetail';
import RootStore from 'stores';
import Content from './Content';

type Props = {
  match?: Parampath;
  stores?: RootStore;
};

const DetailPage: FunctionComponent<Props> = ({ match, stores }) => {
  const uiStore = stores!.PackageRootStore.DestinationStore;

  const activityCode = match?.params.activityCode;

  const {
    activity,
    modalities,
    modalityCart,
    paxes,
    dateSelect,
    isLoading,
    isLoadingModality,
    isLoadingHeaderSearch,
    addToCart,
    handleChangeQuantity,
    clearQuantities,
    handleChangeDate,
    handleSelectedDate,
  } = useDetail({
    activityCode,
    dateRange: uiStore.dateRange,
    setDestination: uiStore.setDestination,
    setDateRange: uiStore.setDateRange,
  });

  return (
    <ThemeProvider theme={cryptoTheme}>
      <ResetCSS />
      <GlobalStyle />
      <MenuBar />
      <PaxesContext.Provider
        value={{ paxes, handleChangeQuantity, clearQuantities }}
      >
        <Content
          activity={activity}
          modalities={modalities}
          modalityCart={modalityCart}
          dateSelect={dateSelect}
          isLoading={isLoading}
          isLoadingModality={isLoadingModality}
          isLoadingHeaderSearch={isLoadingHeaderSearch}
          addToCart={addToCart}
          handleChangeDate={handleChangeDate}
          handleSelectedDate={handleSelectedDate}
        />
      </PaxesContext.Provider>
    </ThemeProvider>
  );
};
export default inject('stores')(observer(DetailPage));
