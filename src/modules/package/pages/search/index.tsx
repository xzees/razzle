import React, { FunctionComponent } from 'react';
import { inject, observer } from 'mobx-react';
import RootStore from 'stores';
import { ThemeProvider } from 'styled-components';
import { cryptoTheme } from 'common/src/theme/crypto';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle } from 'common/containers/Crypto/crypto.style';
import useSearch from 'modules/package/Hook/pages/useSearch';
import SortAndFilterContext from 'modules/package/contexts/sortAndFilter';
import MenuBar from 'modules/package/components/MenuBar';
import Content from './Content';

type Props = {
  stores?: RootStore;
};

const SearchPage: FunctionComponent<Props> = ({ stores }) => {
  const uiStore = stores!.PackageRootStore.DestinationStore;

  const {
    textSearch,
    items,
    isLoading,
    dataComplete,
    sorting,
    filter,
    isLoadingHeaderSearch,
    handleLoadMore,
    handleChangeSorting,
    handleChangeFilter,
  } = useSearch({
    setDestination: uiStore.setDestination,
    setDateRange: uiStore.setDateRange,
  });

  return (
    <ThemeProvider theme={cryptoTheme}>
      <ResetCSS />
      <GlobalStyle />
      <MenuBar />
      <SortAndFilterContext.Provider value={{ filter, handleChangeFilter }}>
        <Content
          textSearch={textSearch}
          items={items}
          isLoading={isLoading}
          dataComplete={dataComplete}
          sorting={sorting}
          filter={filter}
          isLoadingHeaderSearch={isLoadingHeaderSearch}
          handleLoadMore={handleLoadMore}
          handleChangeSorting={handleChangeSorting}
          handleChangeFilter={handleChangeFilter}
        />
      </SortAndFilterContext.Provider>
    </ThemeProvider>
  );
};

export default inject('stores')(observer(SearchPage));
